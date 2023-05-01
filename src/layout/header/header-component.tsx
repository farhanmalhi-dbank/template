import React from 'react';
import Left from './left';
import Center from './center';
import Right from './right';
import { AntdHeader, Col, Row } from '../../components';

type PageProps = {
  collapseHandler: Function;
  collapsed: boolean;
};

export const HeaderComponent = ({ collapsed, collapseHandler }: PageProps) => {
  return (
    <AntdHeader
      className="site-layout-background"
      style={{
        position: 'sticky',
        boxShadow: '0 9px 13px -6px #ccc'
      }}>
      <Row justify="space-between">
        <Col xs={6} xl={5}>
          <Left collapsed={collapsed} collapseHandler={collapseHandler} />
        </Col>
        <Col xs={8} xl={14}>
          <Center />
        </Col>
        <Col xs={8} xl={5}>
          <Right />
        </Col>
      </Row>
    </AntdHeader>
  );
};

export default HeaderComponent;
