import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import React from 'react';

export interface ButtonProps extends AntdButtonProps {}

const Button: React.FC<AntdButtonProps> = ({ type = 'primary', htmlType = 'button', ...props }: AntdButtonProps) => (
  <AntdButton type={type} htmlType={htmlType} {...props} />
);

export default Button;
