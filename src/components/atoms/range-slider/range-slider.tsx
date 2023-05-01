import { Slider } from 'antd';
import { SliderRangeProps } from 'antd/lib/slider';
import React from 'react';

const RangeSlider: React.FC<SliderRangeProps> = (props: SliderRangeProps) => <Slider {...props} />;

export default RangeSlider;
