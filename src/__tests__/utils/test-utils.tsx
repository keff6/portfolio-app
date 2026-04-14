import React from 'react';

export const mockFramerMotion = () => {
  jest.mock('framer-motion', () => ({
    motion: {
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => 
        React.createElement('div', props, children),
      section: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => 
        React.createElement('section', props, children),
      button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => 
        React.createElement('button', props, children),
      a: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => 
        React.createElement('a', props, children),
    },
    useScroll: () => ({ scrollY: { get: () => 0 } }),
    useTransform: () => 0,
    useMotionValueEvent: () => {},
  }));
};

export const mockLucideIcons = () => {
  jest.mock('lucide-react', () => ({
    Mail: () => React.createElement('span', { 'data-testid': 'mail-icon' }),
    FileDown: () => React.createElement('span', { 'data-testid': 'filedown-icon' }),
    Menu: () => React.createElement('span', { 'data-testid': 'menu-icon' }),
    X: () => React.createElement('span', { 'data-testid': 'x-icon' }),
    ExternalLink: () => React.createElement('span', { 'data-testid': 'external-link-icon' }),
  }));
};
