import React from 'react';
import { Divider as AntdDivider, DividerProps as AntdDividerProps } from 'antd';

export interface DividerProps extends AntdDividerProps {}

const Divider: React.FC<DividerProps> = (props: DividerProps) => <AntdDivider {...props} />;

export default Divider;
