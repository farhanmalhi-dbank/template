import { render, screen } from '@testing-library/react';
import { List, ListItem, ListItemMeta } from '.';
import { mockList } from '../../../mocks';
import { Text } from '../typography';

describe('List', () => {
  it('should render the list ', () => {
    render(<List dataSource={mockList} renderItem={(item, i) => <ListItem key={i}>{item.name}</ListItem>} />);
    const items = screen.getAllByText(/Option\s\d/i);
    items.forEach((item) => {
      expect(item.innerHTML).toContain('Option');
    });
  });
  it('should render the list item meta fine ', () => {
    render(<ListItemMeta data-test-id="check" title={<Text ellipsis={{ tooltip: mockList[0].name }}>{mockList[0].value}</Text>} />);
    expect(screen.getByText(mockList[0].value)).toBeInTheDocument();
  });

  it('should render the list item fine ', () => {
    render(<ListItem>{mockList[0].value}</ListItem>);
    expect(screen.getByText(mockList[0].value)).toBeInTheDocument();
  });
});
