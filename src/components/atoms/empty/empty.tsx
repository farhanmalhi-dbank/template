import React from 'react';
import { Empty as AntdEmpty, EmptyProps } from 'antd';

const Empty: React.FC<EmptyProps> = (props: EmptyProps) => <AntdEmpty {...props} />;

export default Empty;
