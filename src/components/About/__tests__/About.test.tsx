import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../About';

describe('About', () => {
  it('renders the section with correct id', () => {
    render(<About />);
    const section = document.querySelector('#about');
    expect(section).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    render(<About />);
    const image = screen.getByAltText('Kevin Fallas');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/profile.png');
  });

  it('renders all text paragraphs', () => {
    render(<About />);
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/10\+ years of experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Across the stack/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
