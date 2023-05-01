import React from 'react';
import { Spin as AntdSpin, SpinProps } from 'antd';

const Spin: React.FC<SpinProps> = (props: SpinProps) => <AntdSpin {...props} />;
export default Spin;
