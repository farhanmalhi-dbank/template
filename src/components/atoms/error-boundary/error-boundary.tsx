import React from 'react';

import { ErrorBoundary as CustomErrorBoundary, ErrorBoundaryPropsWithComponent } from 'react-error-boundary';

export interface CustomerErrorBoundaryProps extends ErrorBoundaryPropsWithComponent {
  children: React.ReactNode;
}

const ErrorBoundary = (props: CustomerErrorBoundaryProps) => {
  return <CustomErrorBoundary {...props} />;
};

export default ErrorBoundary;
