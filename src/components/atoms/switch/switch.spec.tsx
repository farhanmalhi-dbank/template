import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch, { SwitchProps } from './switch';

describe('Switch component', () => {
  const defaultProps: SwitchProps = {
    checked: false,
    onChange: jest.fn()
  };

  it('renders without crashing', () => {
    render(<Switch {...defaultProps} />);
  });

  it('changes state when clicked', () => {
    const { getByRole } = render(<Switch {...defaultProps} />);
    const input = getByRole('switch') as HTMLInputElement;
    fireEvent.click(input);
    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
