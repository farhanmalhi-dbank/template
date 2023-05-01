import { Typography } from 'antd';
import { ParagraphProps as AntdBodyProps } from 'antd/lib/typography/Paragraph';
import { ReactElement } from 'react';

export interface BodyProps extends AntdBodyProps {}

export const Body = ({ children, ...args }: BodyProps): ReactElement => <Typography.Paragraph {...args}>{children}</Typography.Paragraph>;

export default Body;
