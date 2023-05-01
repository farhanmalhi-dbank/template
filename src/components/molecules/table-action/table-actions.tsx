import React from 'react';
import { Button, ButtonProps } from '../../atoms';

export interface TableActionProps {
  buttons: ButtonProps[];
}

const TableActions = ({ buttons }: TableActionProps) => {
  return (
    <div className="action-area">
      {buttons.map(({ title, ...rest }) => {
        return (
          <Button key={title} size="small" {...rest}>
            {title}
          </Button>
        );
      })}
    </div>
  );
};

export default TableActions;
