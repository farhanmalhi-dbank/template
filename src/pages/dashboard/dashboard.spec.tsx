import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

describe('dashboard test', () => {
  it('it should render dashboard fine', async () => {
    render(<Dashboard />);

    expect(await screen.findByText(`Welcome Tools Component Library`)).toBeInTheDocument();
  });
});
