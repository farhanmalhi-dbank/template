import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { Spin } from 'antd';
import { Button, Card } from '../../atoms';

export interface FileProps {
  name: string | null;
  value: string | null;
  link: string;
  type: string | null;
}

export interface FileViewProps {
  file: FileProps;
}

const PdfViewer = ({ file }: FileViewProps) => {
  const [page, setPage] = useState(1);

  function onPrevious() {
    setPage(page - 1);
  }

  function onNext() {
    setPage(page + 1);
  }

  const canvasRef = useRef(null);

  const { pdfDocument } = usePdf({
    file: file.link,
    page,
    canvasRef
  });

  return (
    <Card
      className="dtools-container-card"
      type="inner"
      title={file.name}
      extra={
        <div className={'pdf-nav-bar'}>
          <Button data-test-id={'test-prev-btn'} disabled={page === 1} onClick={onPrevious}>
            &larr; Prev
          </Button>
          <Button data-test-id={'test-next-btn'} disabled={page === pdfDocument?.numPages} onClick={onNext}>
            Next &rarr;
          </Button>
        </div>
      }>
      <Spin spinning={!pdfDocument} size="large" data-test-id="pdf-spinner">
        <canvas data-test-id="canvas" ref={canvasRef} />
      </Spin>
    </Card>
  );
};

export default PdfViewer;
