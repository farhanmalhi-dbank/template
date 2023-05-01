// Popconfirm
import React from 'react';
import { Popconfirm as AntdPopconfirm, PopconfirmProps as AntdPopconfirmProps } from 'antd';

export interface PopconfirmProps extends AntdPopconfirmProps {}

const Popconfirm: React.FC<PopconfirmProps> = (props: PopconfirmProps) => <AntdPopconfirm {...props} />;

export default Popconfirm;
