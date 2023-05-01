import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

const AntdSider: React.FC<any> = (props: any) => {
  return <Sider {...props} />;
};
export default AntdSider;
