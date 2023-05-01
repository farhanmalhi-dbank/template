import { Dropdown as AntdDropdown, DropdownProps as AntdDropdownProps } from 'antd';
import React from 'react';

export interface DropdownProps extends AntdDropdownProps {}

const Dropdown: React.FC<AntdDropdownProps> = (props: AntdDropdownProps) => <AntdDropdown {...props} />;

export default Dropdown;
