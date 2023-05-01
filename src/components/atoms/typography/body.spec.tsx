import React from 'react';
import { render, screen } from '@testing-library/react';
import { Body, BodyProps } from '.';

const bodyProps: BodyProps = {
  children: 'Mock body'
};

const bodyTestId = 'body';

describe('Body', () => {
  it('should render body component', () => {
    render(<Body data-test-id={bodyTestId} {...bodyProps} />);

    const body = screen.getByTestId(bodyTestId);

    expect(body).toBeInTheDocument();
    expect(body.innerHTML).toBe(bodyProps.children);
  });
});
