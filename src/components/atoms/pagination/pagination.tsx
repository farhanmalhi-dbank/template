import { Pagination as AntdPagination, PaginationProps as AntdPaginationProps } from 'antd';
import React from 'react';

export interface PaginationProps extends AntdPaginationProps {}

const Pagination: React.FC<AntdPaginationProps> = (props: AntdPaginationProps) => <AntdPagination {...props} />;

export default Pagination;
