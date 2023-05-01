import React from 'react';
import { Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from 'antd';

export interface SwitchProps extends AntdSwitchProps {}

const Switch: React.FC<AntdSwitchProps> = (props: AntdSwitchProps) => {
  return <AntdSwitch {...props} />;
};
export default Switch;
