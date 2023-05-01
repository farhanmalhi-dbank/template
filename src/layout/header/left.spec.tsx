import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Left from './left';

describe('Left component test', () => {
  it('it should render dashboard fine in collapsed mode and expand fine', async () => {
    const mockFn = jest.fn();
    render(<Left collapsed={true} collapseHandler={mockFn} />);

    await userEvent.click(screen.getByRole('img'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it('it should render dashboard fine in expanded mode and collapse fine', async () => {
    const mockFn = jest.fn();
    render(<Left collapsed={false} collapseHandler={mockFn} />);
    await userEvent.click(screen.getByRole('img'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
