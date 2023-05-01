import { Form as AntdForm, FormProps as AntdFormProps } from 'antd';
import React from 'react';
export interface FormProps extends AntdFormProps {
  children?: React.ReactNode;
}
const Form: React.FC<FormProps> = (props: FormProps) => <AntdForm {...props}>{props.children}</AntdForm>;

export default Form;
