import { render, screen } from '@testing-library/react';
import App from './App';

// Ensure the header tagline is displayed on initial render
test('renders header tagline', () => {
  render(<App />);
  const tagline = screen.getByText(/Pioneering new technology across all industries\./i);
  expect(tagline).toBeInTheDocument();
});
