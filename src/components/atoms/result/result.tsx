import { Result as AntdResult, ResultProps as AntdResultProps } from 'antd';
import React from 'react';

export interface ResultProps extends AntdResultProps {}
const Result: React.FC<ResultProps> = (props: ResultProps) => {
  return <AntdResult {...props} />;
};
export default Result;
