import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TextArea, { TextAreaProps } from './text-area';

describe('TextArea component', () => {
  const defaultProps: TextAreaProps = {
    placeholder: 'Type something here',
    value: '',
    onChange: jest.fn()
  };

  it('renders without crashing', () => {
    render(<TextArea {...defaultProps} />);
  });

  it('displays the placeholder text', () => {
    const { getByPlaceholderText } = render(<TextArea {...defaultProps} />);
    const input = getByPlaceholderText('Type something here');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange when the input value changes', async () => {
    const { getByRole } = render(<TextArea {...defaultProps} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
