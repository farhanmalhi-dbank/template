import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './icon';

describe('Icon', () => {
  it('Should render icon component', async () => {
    render(<Icon name="edit-pen" />);
    expect(await screen.findByTestId('edit-pen')).toBeInTheDocument();
  });
});
