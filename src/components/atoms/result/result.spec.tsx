import { render, screen } from '@testing-library/react';
import Button from '../button/button';
import Result from './result';

const buttonTestId = 'test-button';

describe('Result', () => {
  it('should render fine along button', () => {
    render(
      <Result
        status="success"
        title="Result Title"
        subTitle="Result Subtitle"
        extra={[
          <Button key="buy" data-test-id={buttonTestId}>
            Buy Again
          </Button>
        ]}
      />
    );
    expect(screen.getByText('Result Title')).toBeInTheDocument();
    expect(screen.getByText('Result Subtitle')).toBeInTheDocument();
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
  });

  it('should render fine', () => {
    render(<Result status="success" title="Result Title" subTitle="Result Subtitle" />);
    expect(screen.getByText('Result Title')).toBeInTheDocument();
    expect(screen.getByText('Result Subtitle')).toBeInTheDocument();
  });
});
