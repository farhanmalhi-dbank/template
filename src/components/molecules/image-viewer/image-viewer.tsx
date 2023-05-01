import React, { useState } from 'react';
import { Image, Spin } from '../../atoms';
import Card from '../../atoms/card/card';
import { FileViewProps } from '../pdf-viewer';

const ImageViewer: React.FC<FileViewProps> = ({ file }: FileViewProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <Spin spinning={loading} size="large">
      <Card className="dtools-container-card" type="inner" title={file.name}>
        <Image src={file.link} onLoad={() => setLoading(false)} />
      </Card>
    </Spin>
  );
};

export default ImageViewer;
