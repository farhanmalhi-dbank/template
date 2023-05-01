import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckboxGroup from './checkbox-group';

const checkoutBoxTestId = 'checkbox-group-test';

describe('Checkbox-group', () => {
  const plainOptions = ['P2P', 'Card', 'App', 'P2M', 'ATM'];

  it('should render col with its content/children', () => {
    render(<CheckboxGroup data-test-id={checkoutBoxTestId} options={plainOptions} />);
    expect(screen.getByTestId(checkoutBoxTestId)).toBeInTheDocument();
    expect(screen.getByText('P2P')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length).toBe(plainOptions.length);
  });
});
