require('@testing-library/jest-dom');

jest.mock('framer-motion', () => {
  const React = require('react');

  const filterProps = (props) => {
    const {
      whileHover,
      whileTap,
      whileFocus,
      whileDrag,
      whileInView,
      initial,
      animate,
      exit,
      transition,
      variants,
      viewport,
      drag,
      dragConstraints,
      dragElastic,
      dragMomentum,
      dragTransition,
      onDrag,
      onDragStart,
      onDragEnd,
      layout,
      layoutId,
      ...rest
    } = props;

    return rest;
  };

  const createMockComponent = (tag) => {
    return ({ children, ...props }) =>
      React.createElement(tag, filterProps(props), children);
  };

  return {
    motion: new Proxy({}, {
      get: (_, tag) => createMockComponent(tag),
    }),
    AnimatePresence: ({ children }) => children,
  };
});