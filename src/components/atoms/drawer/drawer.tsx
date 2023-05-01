import { Drawer as AntdDrawer, DrawerProps as AntdDrawerProps } from 'antd';
import React from 'react';

export interface DrawerProps extends AntdDrawerProps {}

const Drawer: React.FC<AntdDrawerProps> = (props: AntdDrawerProps) => <AntdDrawer {...props} />;

export default Drawer;
