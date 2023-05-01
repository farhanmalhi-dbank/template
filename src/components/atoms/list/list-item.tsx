import React from 'react';
import { List } from 'antd';
import { ListItemProps as AntdListItemProps } from 'antd/lib/list';

export interface ListItemProps extends AntdListItemProps {}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  return <List.Item {...props} />;
};
export default ListItem;
