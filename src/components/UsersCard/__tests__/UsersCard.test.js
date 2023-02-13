import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import UsersCard from '../UsersCard.js';

describe('UsersCard', () => {
  it('renders users data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve([
          {
            name: 'John Doe',
            position: 'UI / UX Designer',
            email_id: 'johndoe@example.com',
            projects: 120,
            followers: 25,
            following: 12,
          },
          {
            name: 'Jane Doe',
            position: 'Front End Developer',
            email_id: 'janedoe@example.com',
            projects: 200,
            followers: 60,
            following: 40,
          },
          {
            name: 'Bob Smith',
            position : 'Back End Developer',
            email_id: 'bobsmith@example.com',
            projects: 80,
            followers: 10,
            following: 8
          },
        ]),
      });
    });
  
    render(<UsersCard />);

    const personOne = await waitFor(() => screen.findByText('John Doe'));
    expect(personOne).toBeInTheDocument();
    const positionOne = screen.getByText('UI / UX Designer');
    expect(positionOne).toBeInTheDocument();
    const emailOne = screen.getByText('johndoe@example.com');
    expect(emailOne).toBeInTheDocument();
    const projectsOne = screen.getByText('120');
    expect(projectsOne).toBeInTheDocument();
    const followersOne = screen.getByText('25'); 
    expect(followersOne).toBeInTheDocument();
    const followingOne = screen.getByText('12');
    expect(followingOne).toBeInTheDocument();

    const personTwo = await waitFor(() => screen.findByText('Jane Doe'));
    expect(personTwo).toBeInTheDocument();
    const positionTwo = screen.getByText('Front End Developer');
    expect(positionTwo).toBeInTheDocument();
    const emailTwo = screen.getByText('janedoe@example.com');
    expect(emailTwo).toBeInTheDocument();
    const projectsTwo = screen.getByText('200');
    expect(projectsTwo).toBeInTheDocument();
    const followersTwo = screen.getByText('60');
    expect(followersTwo).toBeInTheDocument();
    const followingTwo = screen.getByText('40');
    expect(followingTwo).toBeInTheDocument();

    const personThree = await waitFor(() => screen.findByText('Bob Smith'));
    expect(personThree).toBeInTheDocument();
    const positionThree = screen.getByText('Back End Developer');
    expect(positionThree).toBeInTheDocument();
    const emailThree = screen.getByText('bobsmith@example.com');
    expect(emailThree).toBeInTheDocument();
    const projectsThree = screen.getByText('80');
    expect(projectsThree).toBeInTheDocument();
    const followersThree = screen.getByText('10');
    expect(followersThree).toBeInTheDocument();
    const followingThree = screen.getByText('8');
    expect(followingThree).toBeInTheDocument();
  });
});