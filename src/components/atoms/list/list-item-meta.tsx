import React from 'react';
import { List } from 'antd';
import { ListItemMetaProps as AntdListItemMetaProps } from 'antd/lib/list';

export interface ListItemMetaProps extends AntdListItemMetaProps {}

const ListItemMeta: React.FC<ListItemMetaProps> = (props: ListItemMetaProps) => {
  return <List.Item.Meta {...props} />;
};

export default ListItemMeta;
