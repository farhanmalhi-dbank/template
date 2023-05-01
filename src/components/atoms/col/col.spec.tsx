import React from 'react';
import { render, screen } from '@testing-library/react';
import Col from './col';

const colTestId = 'test-col';

describe('Col', () => {
  it('should render col with its content/children', () => {
    render(
      <Col data-test-id={colTestId}>
        <span>
          <h3 data-test-id="test-col-title">Col</h3>
          <p data-test-id="test-col-content">this is a sample col</p>
        </span>
      </Col>
    );

    expect(screen.getByTestId(colTestId)).toBeInTheDocument();
    expect(screen.getByText('this is a sample col')).toBeInTheDocument();
    expect(screen.getByTestId('test-col-title')).toBeInTheDocument();
    expect(screen.getByTestId('test-col-content')).toBeInTheDocument();
  });
});
