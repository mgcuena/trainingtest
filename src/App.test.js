import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { App } from './App';

test('Header component should be rendered', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const headerElement = screen.getByText(/App for training/i);
  expect(headerElement).toBeInTheDocument();
});
