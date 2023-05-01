import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './header-component';

describe('header component test', () => {
  it('it should render header component fine in expanded and collapsed mode', async () => {
    const mockFn = jest.fn();
    const { rerender } = render(
      <BrowserRouter>
        <HeaderComponent collapsed={false} collapseHandler={mockFn} />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Collapse Menu')).toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByTestId('logout-outlined')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('double-left-filled'));
    expect(mockFn).toHaveBeenCalled();
    rerender(
      <BrowserRouter>
        <HeaderComponent collapsed={true} collapseHandler={mockFn} />
      </BrowserRouter>
    );

    expect(screen.getByText('Expand Menu')).toBeInTheDocument();
  });
});
