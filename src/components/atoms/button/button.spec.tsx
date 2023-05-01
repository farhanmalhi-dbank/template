import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button, { ButtonProps } from './button';

const props: ButtonProps = {
  type: 'primary',
  onClick: jest.fn()
};

const buttonTestId = 'test-button';

describe('Button', () => {
  it('should render fine', () => {
    render(
      <Button {...props} data-test-id={buttonTestId}>
        I am a Button
      </Button>
    );

    expect(screen.getByText('I am a Button')).toBeInTheDocument();
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
  });

  it('should render fine without label', () => {
    render(<Button {...props} data-test-id={buttonTestId} />);

    expect(screen.queryByText('I am a Button')).not.toBeInTheDocument();
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
  });

  it('onClick callback should be called on click', async () => {
    render(<Button {...props} data-test-id={buttonTestId} />);

    await userEvent.click(screen.getByTestId(buttonTestId));

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('button should be disabled if disabled = true', async () => {
    render(<Button {...props} disabled data-test-id={buttonTestId} />);

    await userEvent.click(screen.getByTestId(buttonTestId));

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render small button if size = small', () => {
    render(<Button {...props} size="small" data-test-id={buttonTestId} />);

    expect(screen.getByTestId(buttonTestId)).toHaveClass('ant-btn-sm');
  });

  it('should render large button if size = large', () => {
    render(<Button {...props} size="large" data-test-id={buttonTestId} />);

    expect(screen.getByTestId(buttonTestId)).toHaveClass('ant-btn-lg');
  });
});
