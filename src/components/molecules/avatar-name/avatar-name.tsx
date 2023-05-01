import React from 'react';
import { Avatar, Text } from '../../atoms';

export interface AvatarNameProps {
  name?: string;
}

const AvatarName = ({ name = '' }: AvatarNameProps) => {
  return (
    <div className="avatar-name" data-test-id="avatar-name-test">
      <Avatar shape="circle" size={60}>
        {name[0]}
      </Avatar>
      <Text className="user-name">{name}</Text>
    </div>
  );
};
export default AvatarName;
