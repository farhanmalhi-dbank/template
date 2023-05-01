import { render, screen } from '@testing-library/react';
import { AvatarMenu } from './avatar-menu';

describe('Avatar menu test', () => {
  it('it should render dashboard fine', async () => {
    render(<AvatarMenu />);
    expect(await screen.findByText(/Logout/i)).toBeInTheDocument();
  });
});
