import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from 'antd';
import React from 'react';

export interface TabsProps extends AntdTabsProps {}

const Tabs: React.FC<TabsProps> = (props: TabsProps) => <AntdTabs {...props} />;

export default Tabs;
