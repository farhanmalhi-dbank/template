import React from 'react';

import Skeleton from 'antd/lib/skeleton';
import { AvatarProps as AntdSkeletonAvatarProps } from 'antd/lib/skeleton/Avatar';

export interface SkeletonAvatarProps extends AntdSkeletonAvatarProps {}

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = (props: SkeletonAvatarProps) => {
  return <Skeleton.Avatar {...props} />;
};
export default SkeletonAvatar;
