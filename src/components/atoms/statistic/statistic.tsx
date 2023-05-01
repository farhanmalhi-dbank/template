import { Statistic as AntdStatistic, StatisticProps as AntdStatisticProps } from 'antd';
import React from 'react';

export interface StatisticProps extends AntdStatisticProps {}
const Statistic: React.FC<StatisticProps> = (props: StatisticProps) => <AntdStatistic {...props} />;

export default Statistic;
