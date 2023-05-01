import React from 'react';
import { Form } from 'antd';
import { FormItemProps as AntdFormItemProps } from 'antd/lib/form';

export interface FormItemProps extends AntdFormItemProps {}

const FormItem: React.FC<FormItemProps> = (props: FormItemProps) => {
  return <Form.Item {...props} />;
};
export default FormItem;
