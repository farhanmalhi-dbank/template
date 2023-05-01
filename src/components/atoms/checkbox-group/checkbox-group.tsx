import { Checkbox, CheckboxOptionType as AntdCheckboxOptionType } from 'antd';
import { CheckboxGroupProps as AntdCheckboxGroupProps } from 'antd/lib/checkbox';

import React from 'react';

export interface CheckboxGroupProps extends AntdCheckboxGroupProps {}
export interface CheckboxOptionType extends AntdCheckboxOptionType {}
const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => <Checkbox.Group {...props} />;

export default CheckboxGroup;
