import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import React from 'react';

const RangePicker: React.FC<RangePickerProps> = (props: RangePickerProps) => <DatePicker.RangePicker {...props} />;

export default RangePicker;
