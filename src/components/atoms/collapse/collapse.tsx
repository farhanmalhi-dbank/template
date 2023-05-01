import { Collapse as AntdCollapse, CollapseProps as AntdCollapseProps } from 'antd';
import React from 'react';

export interface CollapseProps extends AntdCollapseProps {}

const Collapse: React.FC<CollapseProps> = (props: CollapseProps) => <AntdCollapse {...props} />;

export default Collapse;
