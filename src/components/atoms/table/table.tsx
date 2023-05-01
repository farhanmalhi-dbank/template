import React from 'react';
import { Table as AntdTable } from 'antd';
import { ColumnsType as AntdColumnsType, TableProps as AntdTableProps } from 'antd/es/table';

export interface ColumnsType extends AntdColumnsType {}
export interface TableProps<T> extends AntdTableProps<T> {}

const Table = (props): JSX.Element => <AntdTable {...props} bordered />;

export default Table;
