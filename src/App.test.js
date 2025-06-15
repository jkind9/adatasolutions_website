import { render, screen } from '@testing-library/react';
import App from './App';

// Basic smoke test to ensure the home page renders expected content
test('renders homepage heading', () => {
  render(<App />);
  const heading = screen.getByText(/Innovative Tech Solutions/i);
  expect(heading).toBeInTheDocument();
});
