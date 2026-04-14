import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../Navbar';

describe('Navbar', () => {
  it('renders the navbar', () => {
    render(<Navbar />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders the logo link', () => {
    render(<Navbar />);
    const logoLink = screen.getByRole('link', { name: 'Kevin Fallas' });
    expect(logoLink).toHaveAttribute('href', '#');
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /journey/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
