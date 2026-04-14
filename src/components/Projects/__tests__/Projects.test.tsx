import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../../Projects';
import { projects } from '@/data/projects';

describe('Projects', () => {
  it('renders the projects section', () => {
    render(<Projects />);
    const section = document.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders all projects from data', () => {
    render(<Projects />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders project descriptions', () => {
    render(<Projects />);
    projects.forEach((project) => {
      project.description.forEach((desc) => {
        expect(screen.getByText(desc)).toBeInTheDocument();
      });
    });
  });

  it('renders project tags', () => {
    render(<Projects />);
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });
  });

  it('matches snapshot', () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });
});
