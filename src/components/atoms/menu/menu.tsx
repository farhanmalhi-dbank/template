import React from 'react';
import { Menu as AntdMenu, MenuProps as AntdMenuProps } from 'antd';

export interface MenuProps extends AntdMenuProps {}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return <AntdMenu {...props} />;
};
export default Menu;
