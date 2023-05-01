import { render, screen } from '@testing-library/react';
import App from './app';

test('renders login page', async () => {
  render(<App />);

  expect(await screen.findByText(`Home`)).toBeInTheDocument();
});
