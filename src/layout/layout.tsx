import React, { useEffect, useState } from 'react';
import Icon from '../components/atoms/icon/icon';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import HeaderComponent from './header/header-component';
import { MenuProps } from 'rc-menu';
import Layout from '../components/atoms/layout/layout';
import AntdSider from '../components/atoms/layout/sider';
import AntdContent from '../components/atoms/layout/content';
import Menu from '../components/atoms/menu/menu';

const LayoutComponent = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(location.pathname);
  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);
  const navigationHandler: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <AntdSider trigger={null} collapsible collapsed={collapsed} className="ant-layout-sider-light" style={{ position: 'sticky' }}>
        <div className={`${collapsed ? 'logo-collapsed' : 'logo'}`}>
          <Icon name="d-char" className="d-char" />
          {!collapsed && <Icon name="bank-char" className="bank-char" />}
        </div>

        <Menu
          theme="light"
          mode="inline"
          onClick={navigationHandler}
          selectedKeys={[current]}
          items={[
            {
              key: '/',
              icon: <Icon name="dashboard-filled" />,
              label: 'Home'
            }
          ]}
        />
      </AntdSider>
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} collapseHandler={setCollapsed} />
        <AntdContent className="container">
          <Outlet />
        </AntdContent>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
