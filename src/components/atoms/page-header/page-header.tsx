import { PageHeader as AntdPageHeader, PageHeaderProps as AntdPageHeaderProps } from '@ant-design/pro-layout';
import React from 'react';

export interface PageHeaderProps extends AntdPageHeaderProps {}

const PageHeader: React.FC<AntdPageHeaderProps> = (props: AntdPageHeaderProps) => <AntdPageHeader {...props} />;

export default PageHeader;
