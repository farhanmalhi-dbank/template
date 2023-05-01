import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const AntdHeader: React.FC<any> = (props: any) => {
  return <Header {...props} />;
};
export default AntdHeader;
