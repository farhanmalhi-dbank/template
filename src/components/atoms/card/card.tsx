import { Card as AntdCard, CardProps as AntdCardProps } from 'antd';
import React from 'react';

export interface CardProps extends AntdCardProps {}

const Card: React.FC<CardProps> = (props: CardProps) => <AntdCard {...props} />;

export default Card;
