import { render, screen } from '@testing-library/react';
import Avatar from './avatar-name';

describe('Accounts', () => {
  it('should render all cards', () => {
    render(<Avatar />);
    expect(screen.getByTestId('avatar-name-test')).toBeInTheDocument();
  });
});
