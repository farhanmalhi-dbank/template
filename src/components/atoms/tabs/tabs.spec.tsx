import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../button/button';
import Tabs from './tabs';

const tabsTestID = 'test-tab';
const buttonTestID = 'test-button';

describe('Tabs', () => {
  const items = [
    {
      label: 'Tab 1',
      key: 'item-1',
      children: <h1>Tab 1Content</h1>
    },
    {
      label: 'Tab 2',
      key: 'item-2',
      children: <h1>Tab 2Content</h1>
    }
  ];
  it('should render fine', () => {
    render(<Tabs items={items} data-test-id={tabsTestID} />);

    expect(screen.getByTestId(tabsTestID)).toBeInTheDocument();
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 1Content')).toBeInTheDocument();
  });

  it('should switch to new tab', async () => {
    render(<Tabs items={items} />);
    await userEvent.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 2Content')).toBeInTheDocument();
  });
  it('should render fine along extra component', () => {
    const extraComponent = <Button data-test-id={buttonTestID}>Extra</Button>;
    render(<Tabs tabBarExtraContent={extraComponent} items={items} data-test-id={tabsTestID} />);
    expect(screen.getByTestId(buttonTestID)).toBeInTheDocument();
    expect(screen.getByTestId(tabsTestID)).toBeInTheDocument();
  });
});
