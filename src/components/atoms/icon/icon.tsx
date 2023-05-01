import React, { MouseEventHandler, ReactElement } from 'react';
import { default as AntdIcon } from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import icons from './icons';

export type iconNames = keyof typeof icons;

export interface IconProps extends Partial<CustomIconComponentProps> {
  name: iconNames;
  clickHandler?: MouseEventHandler<HTMLSpanElement>;
}

const Icon = ({ name, clickHandler, ...args }: IconProps): ReactElement => {
  return (
    <AntdIcon
      component={icons[name] as React.ForwardRefExoticComponent<CustomIconComponentProps>}
      onClick={clickHandler}
      {...args}
      data-test-id={name}
    />
  );
};

export default Icon;
