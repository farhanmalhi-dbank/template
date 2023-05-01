import React from 'react';
import { Collapse, CollapsePanelProps } from 'antd';

const { Panel } = Collapse;
const AntdPanel: React.FC<CollapsePanelProps> = (props: CollapsePanelProps) => <Panel {...props} />;

export default AntdPanel;
