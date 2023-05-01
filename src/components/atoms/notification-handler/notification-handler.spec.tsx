import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../button/button';
import NotificationHandler from './notification-handler';

const buttonTestId = 'test-button';

describe('Notification', () => {
  it('should render fine', async () => {
    render(
      <Button data-test-id={buttonTestId} onClick={() => NotificationHandler({ title: 'Notification', type: 'none', description: 'Test' })}>
        I am a button
      </Button>
    );
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId(buttonTestId));
    await screen.findByText('Notification');

    expect(await screen.findByText('Notification')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('img', { name: 'close' }));
    expect(screen.queryByText('Notification')).not.toBeInTheDocument();
  });

  it('should render success type fine', async () => {
    render(
      <Button
        data-test-id={buttonTestId}
        onClick={() => NotificationHandler({ title: 'Notification', type: 'success', description: 'Test' })}>
        I am a button
      </Button>
    );
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId(buttonTestId));
    await screen.findByText('Notification');

    expect(await screen.findByText('Notification')).toBeInTheDocument();
    expect(await (await screen.findByText('Notification')).parentElement?.parentElement?.parentElement).toHaveClass(
      'ant-notification-notice-success'
    );
    await userEvent.click(screen.getByRole('img', { name: 'close' }));
    expect(screen.queryByText('Notification')).not.toBeInTheDocument();
  });
  it('should render error type fine', async () => {
    render(
      <Button
        data-test-id={buttonTestId}
        onClick={() => NotificationHandler({ title: 'Notification', type: 'error', description: 'Test' })}>
        I am a button
      </Button>
    );
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId(buttonTestId));
    await screen.findByText('Notification');

    expect(await screen.findByText('Notification')).toBeInTheDocument();
    expect(await (await screen.findByText('Notification')).parentElement?.parentElement?.parentElement).toHaveClass(
      'ant-notification-notice-error'
    );
    await userEvent.click(screen.getByRole('img', { name: 'close' }));
    expect(screen.queryByText('Notification')).not.toBeInTheDocument();
  });
  it('should render info type fine', async () => {
    render(
      <Button data-test-id={buttonTestId} onClick={() => NotificationHandler({ title: 'Notification', type: 'info', description: 'Test' })}>
        I am an info button
      </Button>
    );
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId(buttonTestId));
    await screen.findByText('Notification');

    expect(await screen.findByText('Notification')).toBeInTheDocument();
    expect(await (await screen.findByText('Notification')).parentElement?.parentElement?.parentElement).toHaveClass(
      'ant-notification-notice-info'
    );
    await userEvent.click(screen.getByRole('img', { name: 'close' }));
    expect(screen.queryByText('Notification')).not.toBeInTheDocument();
  });

  it('should render warning type fine', async () => {
    render(
      <Button
        data-test-id={buttonTestId}
        onClick={() => NotificationHandler({ title: 'Notification', type: 'warning', description: 'Test' })}>
        I am an info button
      </Button>
    );
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId(buttonTestId));
    await screen.findByText('Notification');

    expect(await screen.findByText('Notification')).toBeInTheDocument();
    expect((await screen.findByText('Notification')).parentElement?.parentElement?.parentElement).toHaveClass(
      'ant-notification-notice-warning'
    );
    await userEvent.click(screen.getByRole('img', { name: 'close' }));
    expect(screen.queryByText('Notification')).not.toBeInTheDocument();
  });
});
