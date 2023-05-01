import React from 'react';
import { Col, Row, SkeletonAvatar, SkeletonButton, SkeletonInput } from '../../atoms';

export interface SkeletonDetailProps {
  md?: number;
  xl?: number;
  xxl?: number;
  type: 'input' | 'button' | 'avatar';
}

const SkeletonDetail = ({ md = 24, xl = 24, xxl = 24, type }: SkeletonDetailProps) => {
  if (type === 'input') {
    return (
      <Col md={md} xl={xl} xxl={xxl}>
        <Row>
          <Col md={12} xl={12} xxl={12}>
            <SkeletonInput active={true} block size="small" />
          </Col>
        </Row>
        <Row>
          <SkeletonInput active={true} block size="small" />
        </Row>
      </Col>
    );
  } else if (type === 'avatar') {
    return <SkeletonAvatar active={true} />;
  } else {
    return <SkeletonButton block active={true} size="large" />;
  }
};

export default SkeletonDetail;
