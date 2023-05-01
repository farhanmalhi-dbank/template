import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Dropdown from './dropdown';

describe('Dropdown', () => {
  const items = [
    { label: 'item 1', key: 'item-1' },
    { label: 'item 2', key: 'item-2' }
  ];
  it('should render fine', () => {
    render(
      <Dropdown menu={{ items }} trigger={['click']}>
        <a>Click me</a>
      </Dropdown>
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  it('should render menu items', async () => {
    render(
      <Dropdown menu={{ items }} trigger={['click']}>
        <a>Click me</a>
      </Dropdown>
    );
    await act(async () => {
      await userEvent.click(screen.getByText('Click me'));
    });
    expect(screen.getAllByRole('menuitem').length).toBe(items.length);
  });
});
