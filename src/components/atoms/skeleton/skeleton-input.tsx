import React from 'react';

import Skeleton from 'antd/lib/skeleton';
import { SkeletonInputProps as AntdSkeletonInputProps } from 'antd/lib/skeleton/Input';

export interface SkeletonInputProps extends AntdSkeletonInputProps {}

const SkeletonInput: React.FC<SkeletonInputProps> = (props: SkeletonInputProps) => {
  return <Skeleton.Input {...props} />;
};
export default SkeletonInput;
