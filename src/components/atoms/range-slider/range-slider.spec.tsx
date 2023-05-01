import React from 'react';
import { render, screen } from '@testing-library/react';
import RangeSlider from './range-slider';

describe('Range-slider', () => {
  const amountMin = 100;
  const amountMax = 100000;
  const amountUnit = 'PKR';
  let marks = {};
  marks[amountMin] = amountMin.toLocaleString() + amountUnit;
  marks[amountMax] = amountMax.toLocaleString() + amountUnit;
  it('should render fine', () => {
    render(<RangeSlider range={true} marks={marks} min={amountMin} max={amountMax} />);

    expect(screen.getAllByRole('slider').length).toBe(2);
    expect(screen.getByText('100,000PKR')).toBeInTheDocument();
  });
});
