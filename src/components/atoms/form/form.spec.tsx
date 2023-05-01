import { render, screen } from '@testing-library/react';
import { Form, FormItem } from '.';

const formTestId = 'test-form';
const formItemTestId = 'test-form-item';

//TODO: add test case for email validation on formItem
describe('From', () => {
  it('should render the Form ', () => {
    render(<Form data-test-id={formTestId}></Form>);
    expect(screen.getByTestId(formTestId)).toBeInTheDocument();
  });

  it('should render the form item fine ', () => {
    render(
      <Form>
        <FormItem data-test-id={formItemTestId} label="Transaction ID"></FormItem>
      </Form>
    );
    expect(screen.getByText('Transaction ID')).toBeInTheDocument();
    expect(screen.getByTestId(formItemTestId)).toBeInTheDocument();
  });
});
