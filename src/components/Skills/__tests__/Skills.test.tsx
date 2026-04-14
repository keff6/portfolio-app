import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../../Skills';
import { skills } from '@/data/skills';

describe('Skills', () => {
  it('renders the skills section', () => {
    render(<Skills />);
    const section = document.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /skills & expertise/i })).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    skills.forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
    });
  });

  it('renders all skills from data', () => {
    render(<Skills />);
    skills.forEach((category) => {
      category.skills.forEach((skill) => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });
    });
  });

  it('matches snapshot', () => {
    const { container } = render(<Skills />);
    expect(container).toMatchSnapshot();
  });
});
