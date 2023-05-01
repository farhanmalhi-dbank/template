import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from './drawer';

describe('Drawer', () => {
  it('should render fine', () => {
    render(
      <Drawer open={true}>
        <p>Some contents...</p>
      </Drawer>
    );
    expect(screen.getByText('Some contents...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not show anything on close', () => {
    render(
      <Drawer open={false}>
        <p>Some contents...</p>
      </Drawer>
    );
    expect(screen.queryByText('Some contents...')).toBeNull();
  });
});
