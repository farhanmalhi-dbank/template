import React from 'react';
import { Typography } from 'antd';
import { TextProps as AntdTextProps } from 'antd/lib/typography/Text';
import { Tooltip } from '../tooltip';

export interface TextProps extends AntdTextProps {
  fullWidth?: boolean;
  skipFromBefore?: boolean;
  children: string;
  visibleLength?: number;
  isLink?: boolean;
}

const Text = ({ fullWidth = true, skipFromBefore = false, visibleLength = 10, isLink = false, children, ...args }: TextProps) => {
  let start = '';
  let suffix = '';

  if (fullWidth || children.length < visibleLength) {
    return (
      <Typography.Text className={isLink ? 'link' : ''} {...args}>
        {children}
      </Typography.Text>
    );
  } else if (skipFromBefore) {
    start = '...';
    suffix = children.slice(-visibleLength).trim();
  } else {
    start = children.slice(0, visibleLength);
    suffix = '...';
  }

  return (
    <Tooltip title={children}>
      <Typography.Text className={isLink ? 'link' : ''} ellipsis={{ suffix }} {...args}>
        {start}
      </Typography.Text>
    </Tooltip>
  );
};

export default Text;
