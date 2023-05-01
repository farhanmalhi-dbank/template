import React from 'react';
import { Upload, UploadProps as AntdUploadProps } from 'antd';
const { Dragger: AntdDragger } = Upload;

export interface DraggerProps extends AntdUploadProps {}

const Dragger: React.FC<AntdUploadProps> = (props: AntdUploadProps) => <AntdDragger {...props} />;

export default Dragger;
