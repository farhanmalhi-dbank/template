import React from 'react';

import Skeleton from 'antd/lib/skeleton';
import { SkeletonButtonProps as AntdSkeletonButtonProps } from 'antd/lib/skeleton/Button';

export interface SkeletonButtonProps extends AntdSkeletonButtonProps {}

const SkeletonButton: React.FC<SkeletonButtonProps> = (props: SkeletonButtonProps) => {
  return <Skeleton.Button {...props} />;
};
export default SkeletonButton;
