import { Row as AntdRow, RowProps as AntdRowProps } from 'antd';
import React from 'react';

export interface RowProps extends AntdRowProps {}
const Row: React.FC<RowProps> = (props: RowProps) => <AntdRow {...props} />;

export default Row;
