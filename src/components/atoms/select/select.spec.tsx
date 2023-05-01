import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './select';
import { mockSelectOptions } from '../../../mocks/select';

const props = {
  label: 'Text Input',
  placeholder: 'Choose an option',
  options: mockSelectOptions
};

const testId = 'test-select';

describe('Select Component', () => {
  it('should render the Select component', () => {
    render(<Select {...props} data-test-id={testId} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).getElementsByClassName('ant-select-selection-placeholder')[0]).toHaveTextContent(props.placeholder);
  });
});
