import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);
    const section = document.querySelector('#home');
    expect(section).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<Hero />);
    expect(screen.getByText('Kevin Fallas')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<Hero />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/building scalable software/i)).toBeInTheDocument();
  });

  it('renders all 4 buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /email me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
  });

  it('renders email button with correct href', () => {
    render(<Hero />);
    const emailBtn = screen.getByRole('link', { name: /email me/i });
    expect(emailBtn).toHaveAttribute('href', 'mailto:kev.fallas@gmail.com');
  });

  it('renders LinkedIn button with correct attributes', () => {
    render(<Hero />);
    const linkedinBtn = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinBtn).toHaveAttribute('href', 'https://www.linkedin.com/in/kevin-fallas/');
    expect(linkedinBtn).toHaveAttribute('target', '_blank');
    expect(linkedinBtn).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders GitHub button with correct attributes', () => {
    render(<Hero />);
    const githubBtn = screen.getByRole('link', { name: /github/i });
    expect(githubBtn).toHaveAttribute('href', 'https://github.com/keff6');
    expect(githubBtn).toHaveAttribute('target', '_blank');
    expect(githubBtn).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders resume download link with correct href', () => {
    render(<Hero />);
    const resumeBtn = screen.getByRole('link', { name: /resume/i });
    expect(resumeBtn).toHaveAttribute('href', '/Kevin-Fallas_resume.pdf');
    expect(resumeBtn).toHaveAttribute('download', 'Kevin-Fallas_resume.pdf');
  });

  it('matches snapshot', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
