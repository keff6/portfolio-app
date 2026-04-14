import React from 'react';
import { render, screen } from '@testing-library/react';
import Journey from '../../Journey';
import { jobs } from '@/data/journey';

describe('Journey', () => {
  it('renders the journey section', () => {
    render(<Journey />);
    const section = document.querySelector('#journey');
    expect(section).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Journey />);
    expect(screen.getByRole('heading', { name: /my journey/i })).toBeInTheDocument();
  });

  it('renders all jobs from data', () => {
    render(<Journey />);
    jobs.forEach((job) => {
      const titles = screen.getAllByText(job.title);
      expect(titles.length).toBeGreaterThan(0);
      expect(screen.getByText(job.company)).toBeInTheDocument();
      expect(screen.getByText(job.period)).toBeInTheDocument();
    });
  });

  it('renders job descriptions', () => {
    render(<Journey />);
    jobs.forEach((job) => {
      job.description.forEach((desc) => {
        expect(screen.getByText(desc)).toBeInTheDocument();
      });
    });
  });

  it('matches snapshot', () => {
    const { container } = render(<Journey />);
    expect(container).toMatchSnapshot();
  });
});
