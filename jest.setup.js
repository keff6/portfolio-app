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
    const MockMotionComponent = ({ children, ...props }) =>
      React.createElement(tag, filterProps(props), children);
    MockMotionComponent.displayName = `motion.${String(tag)}`;
    return MockMotionComponent;
  };

  const mockMotionProxy = new Proxy({}, {
    get: (_, tag) => createMockComponent(tag),
  });

  return {
    motion: mockMotionProxy,
    m: mockMotionProxy,
    AnimatePresence: ({ children }) => children,
    LazyMotion: ({ children }) => children,
    domAnimation: {},
    domMax: {},
  };
});

jest.mock('next/image', () => {
  const React = require('react');

  return {
    __esModule: true,
    default: ({ fill, priority, sizes, unoptimized, loader, quality, placeholder, blurDataURL, src, ...rest }) =>
      React.createElement('img', { ...rest, src: typeof src === 'string' ? src : src.src }),
  };
});

global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};