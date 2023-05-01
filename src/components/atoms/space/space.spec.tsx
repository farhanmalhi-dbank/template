import React from 'react';
import { render, screen } from '@testing-library/react';
import Space from './space';

const spaceTestId = 'test-space';

describe('Space', () => {
  it('should render col with its content/children', () => {
    render(
      <Space data-test-id={spaceTestId}>
        <h3 data-test-id="test-space-title">Col</h3>
        <p data-test-id="test-space-content">this is a sample space</p>
      </Space>
    );

    expect(screen.getByTestId(spaceTestId)).toBeInTheDocument();
    expect(screen.getByText('this is a sample space')).toBeInTheDocument();
    expect(screen.getByTestId('test-space-title')).toBeInTheDocument();
    expect(screen.getByTestId('test-space-content')).toBeInTheDocument();
  });
});
