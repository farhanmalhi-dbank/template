import { Tooltip as AntdTooltip, TooltipProps } from 'antd';
import React from 'react';

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => <AntdTooltip {...props} />;
export default Tooltip;
