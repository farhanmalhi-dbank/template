import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from './date-picker';

import { dateFormat } from '../../../constants';
import { formatDate, toDateString } from '../../../utils/date/date-util';

const dateTestId = 'date-picker';
describe('Date Picker', () => {
  it('should render date picker fine', () => {
    const date = '12/11/1990';
    render(<DatePicker defaultValue={formatDate(date)} format={dateFormat} />);
    expect(screen.getByTestId(dateTestId)).toBeInTheDocument();
    expect(screen.getByTitle(toDateString(new Date(date), dateFormat))).toBeInTheDocument();
  });
});
