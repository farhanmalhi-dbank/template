import { render, screen } from '@testing-library/react';
import { Form } from '../../atoms';
import InputWithText from './input-with-text';

describe('input with label component', () => {
  it('should render component', async () => {
    render(
      <Form>
        <InputWithText placeholder={'Enter name'} isEditing={true} name="Name" label="Name" />
      </Form>
    );
    expect(await screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  it('should render disabled component', async () => {
    render(
      <Form>
        <InputWithText placeholder={'Enter name'} isEditing={false} name="Name" label="Name" />
      </Form>
    );
    expect(await screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
    expect(await screen.getByPlaceholderText('Enter name')).toBeDisabled();
  });
});
