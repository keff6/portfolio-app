import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollToTop from '../../ScrollToTop';

describe('ScrollToTop', () => {
  it('does not render when scrollY is less than 300', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    render(<ScrollToTop />);
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  it('matches snapshot when not visible', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    const { container } = render(<ScrollToTop />);
    expect(container).toMatchSnapshot();
  });
});
