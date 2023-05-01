import { Space as AntdSpace, SpaceProps as AntdSpaceProps } from 'antd';
import React from 'react';

export interface SpaceProps extends AntdSpaceProps {}

const Space: React.FC<SpaceProps> = (props: SpaceProps) => <AntdSpace {...props} />;

export default Space;
