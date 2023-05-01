import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';

const cardTestId = 'test-card';

describe('Card', () => {
  it('should render card with its content/children', () => {
    render(
      <Card data-test-id={cardTestId}>
        <span>
          <h3 data-test-id="test-card-title">Card</h3>
          <p data-test-id="test-card-content">this is a sample card</p>
        </span>
      </Card>
    );

    expect(screen.getByTestId(cardTestId)).toBeInTheDocument();
    expect(screen.getByText('this is a sample card')).toBeInTheDocument();
    expect(screen.getByTestId('test-card-title')).toBeInTheDocument();
    expect(screen.getByTestId('test-card-content')).toBeInTheDocument();
  });
});
