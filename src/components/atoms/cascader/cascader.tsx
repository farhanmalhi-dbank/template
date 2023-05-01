import React from 'react';
import { Cascader as AntdCascader, CascaderProps } from 'antd';

const Cascader: React.FC<CascaderProps<any>> = ({ ...args }: CascaderProps<any>) => <AntdCascader {...args} />;
export default Cascader;
export const { SHOW_CHILD } = AntdCascader;
