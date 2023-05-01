import { Avatar as AntdAvatar, AvatarProps as AntdAvatarProps } from 'antd';
import React from 'react';

export interface AvatarProps extends AntdAvatarProps {}
const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => <AntdAvatar {...props} />;

export default Avatar;
