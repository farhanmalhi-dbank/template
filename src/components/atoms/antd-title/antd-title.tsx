import React from 'react';
import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';

const { Title } = Typography;
const AntdPanel: React.FC<TitleProps> = (props: TitleProps) => <Title {...props} />;

export default AntdPanel;
