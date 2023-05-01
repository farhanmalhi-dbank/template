import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading, HeadingProps } from '.';

const headingProps: HeadingProps = {
  children: 'Mock heading',
  level: 1
};

const headingTestId = 'heading';

describe('Heading', () => {
  it('should render heading component', () => {
    render(<Heading data-test-id={headingTestId} {...headingProps} />);

    const heading = screen.getByTestId(headingTestId);

    expect(heading).toBeInTheDocument();
    expect(heading.innerHTML).toBe(headingProps.children);
  });
});
