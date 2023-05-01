import { screen } from '@testing-library/react';
// import { FallBackComponent } from '../../molecules';
// import Button from '../button/button';
// import ErrorBoundary from './error-boundary';
// import { FallbackProps } from 'react-error-boundary';

const tagTestId = 'test-error-boundary';

describe.skip('ErrorBoundary', () => {
  it('should render fine', () => {
    // render(
    //   <ErrorBoundary FallbackComponent={<FallBackComponent>}>
    //     <Button data-test-id={tagTestId}>Click Me</Button>
    //   </ErrorBoundary>
    // );

    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByTestId(tagTestId)).toBeInTheDocument();
  });

  // test('Error Boundary should throw error', () => {
  //   let err: any = null;
  //   const HasErrorInRender = () => {
  //     throw Error('This error was expected');
  //   };
  //   function Fallback({ error }: FallbackProps) {
  //     err = error;
  //     return <p>An error was thrown</p>;
  //   }
  //   render(
  //     <ErrorBoundary FallbackComponent={Fallback}>
  //       <HasErrorInRender />
  //     </ErrorBoundary>
  //   );
  //   expect(err).toEqual(Error('This error was expected'));
  // });
});
