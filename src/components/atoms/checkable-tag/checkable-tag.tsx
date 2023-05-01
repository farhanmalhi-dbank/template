import React from 'react';
import { Tag } from 'antd';
import { CheckableTagProps as AntdCheckableTagProps } from 'antd/lib/tag';

export interface CheckableTagProps extends AntdCheckableTagProps {}

const { CheckableTag: AntdCheckableTag } = Tag;

const CheckableTag: React.FC<CheckableTagProps> = (props: CheckableTagProps) => {
  return <AntdCheckableTag {...props} />;
};
export default CheckableTag;
