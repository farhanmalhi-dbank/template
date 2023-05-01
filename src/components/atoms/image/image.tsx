import React from 'react';
import { Image as AntdImage, ImageProps } from 'antd';

const Image: React.FC<ImageProps> = (props: ImageProps) => <AntdImage {...props} />;
export default Image;
