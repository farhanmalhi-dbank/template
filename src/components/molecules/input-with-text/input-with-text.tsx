import React from 'react';
import { FormItem, Input } from '../../atoms';

export interface InputWithTextProps {
  isEditing: boolean;
  placeholder?: string;
  label: string;
  name: string;
  customClass?: string;
  rules?: Array<{ required: true; message: string }>;
}

const InputWithText = ({ customClass = '', isEditing = false, name, placeholder = '', label, rules = [] }: InputWithTextProps) => {
  return (
    <FormItem label={label} labelCol={{ span: 24 }} name={name} className={customClass} rules={rules}>
      <Input placeholder={placeholder} disabled={isEditing === false} className="input-with-text" />
    </FormItem>
  );
};

export default InputWithText;
