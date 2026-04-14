require('@testing-library/jest-dom');

// Mock framer-motion globally
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => require('react').createElement('div', props, children),
    section: ({ children, ...props }) => require('react').createElement('section', props, children),
    button: ({ children, ...props }) => require('react').createElement('button', props, children),
    nav: ({ children, ...props }) => require('react').createElement('nav', props, children),
    footer: ({ children, ...props }) => require('react').createElement('footer', props, children),
  },
}));

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});
