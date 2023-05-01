import { Timeline as AntdTimeline, TimelineProps as AntdTimelineProps } from 'antd';
import React from 'react';

export interface TimelineProps extends AntdTimelineProps {}

const Timeline: React.FC<AntdTimelineProps> = (props: AntdTimelineProps) => <AntdTimeline {...props} />;

export default Timeline;
