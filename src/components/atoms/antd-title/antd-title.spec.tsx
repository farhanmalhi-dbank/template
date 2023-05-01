import React from 'react';
import { render, screen } from '@testing-library/react';
import { AntdTitle } from '.';

describe('Title', () => {
  it('should render fine', () => {
    render(<AntdTitle level={4}>Title</AntdTitle>);

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
