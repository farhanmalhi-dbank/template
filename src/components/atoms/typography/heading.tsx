import React, { ReactElement } from 'react';
import { TitleProps as AntdHeadingProps } from 'antd/lib/typography/Title';
import { Typography } from 'antd';

export interface HeadingProps extends AntdHeadingProps {
  children: string | ReactElement;
}

const Heading = ({ level, children, ...args }: HeadingProps): ReactElement => (
  <Typography.Title level={level} {...args}>
    {children}
  </Typography.Title>
);
export default Heading;
