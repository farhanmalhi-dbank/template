import React from 'react';
import { render, screen } from '@testing-library/react';
import AntdPanel from './antd-panel';

describe('Panel', () => {
  it('should render fine', () => {
    render(
      <AntdPanel header="This is panel header 1" key="1">
        <p>This is Panel Text</p>
      </AntdPanel>
    );

    expect(screen.getByText('This is panel header 1')).toBeInTheDocument();
  });
});
