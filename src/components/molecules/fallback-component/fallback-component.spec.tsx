import { render, screen } from '@testing-library/react';
import FallBackComponent from './fallback-component';

describe('fallback component test', () => {
  it('it should render fallback fine', async () => {
    const mockFn = jest.fn();
    render(<FallBackComponent error={{ message: 'Something went wrong', name: 'err' }} resetErrorBoundary={mockFn} />);
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Please contact admin/i)).toBeInTheDocument();
    expect(screen.getByText(/Try again/i)).toBeInTheDocument();
  });
});
