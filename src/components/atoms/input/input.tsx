import React from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';

export interface InputProps extends AntdInputProps {}
const Input: React.FC<AntdInputProps> = (props: AntdInputProps) => {
  return <AntdInput {...props} />;
};
export default Input;
