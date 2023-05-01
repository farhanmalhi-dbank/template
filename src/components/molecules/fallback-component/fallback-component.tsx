import React from 'react';

import { FallbackProps as ReactFallbackProps } from 'react-error-boundary';
import { Button, Card, Result } from '../../atoms';

export interface FallbackProps extends ReactFallbackProps {}

const FallBackComponent: React.FC<FallbackProps> = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Card>
      <Result
        status="error"
        title={'Please contact admin'}
        subTitle={error?.message}
        extra={[
          <Button onClick={resetErrorBoundary} key="buy">
            Try Again
          </Button>
        ]}
      />
    </Card>
  );
};

export default FallBackComponent;
