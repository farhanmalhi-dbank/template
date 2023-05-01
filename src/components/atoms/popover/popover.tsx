import React from 'react';
import { Popover as AntdPopover, PopoverProps as AntdPopoverProps } from 'antd';

export interface PopoverProps extends AntdPopoverProps {}

const Popover: React.FC<PopoverProps> = (props: PopoverProps) => <AntdPopover {...props} />;

export default Popover;
