import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './input';

const props = {
  label: 'Text Input',
  placeholder: 'Placeholder text'
};

describe('Input Component', () => {
  it('should render the Input component', () => {
    render(<Input {...props} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(props.placeholder)).toBeInTheDocument();
  });

  it('should change the Input text', async () => {
    render(<Input {...props} />);

    await userEvent.type(screen.getByRole('textbox'), 'This is a sample text');

    expect(screen.getByRole('textbox')).toHaveValue('This is a sample text');
  });
});
