import React from 'react';
import { Input as AntdInput } from 'antd';
import { TextAreaProps as AntdTextAreaProps } from 'antd/es/input';
const { TextArea: AntdTextArea } = AntdInput;

export interface TextAreaProps extends AntdTextAreaProps {}

const TextArea: React.FC<AntdTextAreaProps> = (props: AntdTextAreaProps) => {
  return <AntdTextArea {...props} />;
};
export default TextArea;
