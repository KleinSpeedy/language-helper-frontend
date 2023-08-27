import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Hello world in App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
