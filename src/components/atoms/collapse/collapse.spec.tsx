import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Collapse from './collapse';
import AntdPanel from '../antd-panel/antd-panel';

describe('Collapse', () => {
  it('should render fine', () => {
    render(
      <Collapse accordion>
        <AntdPanel header="This is panel header 1" key="1">
          <p>This is Panel Text</p>
        </AntdPanel>
      </Collapse>
    );

    expect(screen.getByText('This is panel header 1')).toBeInTheDocument();
  });

  it('should expend on click and show content', async () => {
    render(
      <Collapse accordion>
        <AntdPanel header="This is panel header 1" key="1">
          <p>This is Panel Text</p>
        </AntdPanel>
      </Collapse>
    );

    await userEvent.click(screen.getByText('This is panel header 1'));
    expect(screen.getByText('This is Panel Text')).toBeInTheDocument();
  });
});
