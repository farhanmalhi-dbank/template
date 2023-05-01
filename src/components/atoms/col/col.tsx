import { Col as AntdCol, ColProps as AntdColProps } from 'antd';
import React from 'react';

export interface ColProps extends AntdColProps {}

const Col: React.FC<AntdColProps> = (props: AntdColProps) => <AntdCol {...props} />;

export default Col;
