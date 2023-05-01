import React from 'react';
import { render, screen } from '@testing-library/react';
import RangePicker from './range-picker';
import userEvent from '@testing-library/user-event';

const checkoutBoxTestId = 'checkbox-group-test';

describe('Checkbox-group', () => {
  it('should render fine', () => {
    render(<RangePicker data-test-id={checkoutBoxTestId} />);
    expect(screen.getByTestId(checkoutBoxTestId)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Start date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('End date')).toBeInTheDocument();
  });

  it('clicking on first Date should open calendar with current date', async () => {
    const month = new Date().toLocaleString('default', { month: 'short' });
    render(<RangePicker data-test-id={checkoutBoxTestId} />);
    expect(screen.getByTestId(checkoutBoxTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByPlaceholderText('Start date'));
    expect(screen.getByText(month)).toBeInTheDocument();
  });
});
