import React from 'react';
import { Icon } from '../../components';

type PageProps = {
  collapseHandler: Function;
  collapsed: boolean;
};

const Left = ({ collapsed, collapseHandler }: PageProps) => {
  return (
    <div className="dtools-header-left">
      {collapsed ? (
        <>
          <Icon name="double-right-filled" clickHandler={() => collapseHandler(!collapsed)} />
          <p>Expand Menu</p>
        </>
      ) : (
        <>
          <Icon name="double-left-filled" clickHandler={() => collapseHandler(!collapsed)} />
          <p>Collapse Menu</p>
        </>
      )}
    </div>
  );
};

export default Left;
