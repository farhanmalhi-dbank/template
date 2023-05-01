import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const AntdContent: React.FC<any> = (props: any) => {
  return <Content {...props} />;
};
export default AntdContent;
