import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from './row';

const rowTestId = 'test-row';

describe('Row', () => {
  it('should render row with its content/children', () => {
    render(
      <Row data-test-id={rowTestId}>
        <span>
          <h3 data-test-id="test-row-title">Row</h3>
          <p data-test-id="test-row-content">this is a sample row</p>
        </span>
      </Row>
    );

    expect(screen.getByTestId(rowTestId)).toBeInTheDocument();
    expect(screen.getByText('this is a sample row')).toBeInTheDocument();
    expect(screen.getByTestId('test-row-title')).toBeInTheDocument();
    expect(screen.getByTestId('test-row-content')).toBeInTheDocument();
  });
});
