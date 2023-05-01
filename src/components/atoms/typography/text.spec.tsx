import { render, screen } from '@testing-library/react';
import Text from './text';

const textTestId = 'text';
describe('Text', () => {
  it('should render Text fine', () => {
    render(
      <Text fullWidth={true} data-test-id="text">
        Some test data
      </Text>
    );
    expect(screen.getByTestId('text')).toHaveTextContent('Some test data');
    expect(screen.getByText('Some test data')).toBeInTheDocument();
  });

  it('should render text ellipsed at end', () => {
    render(
      <Text fullWidth={false} visibleLength={10} data-test-id={textTestId}>
        123456789123456789
      </Text>
    );
    expect(screen.getByTestId(textTestId)).toBeInTheDocument();

    expect(screen.getByTestId(textTestId).firstChild?.textContent?.length).toBe(10);
    expect(screen.getByText('1234567891...')).toBeInTheDocument();
  });
  it('should render text ellipsed at starting', () => {
    render(
      <Text fullWidth={false} visibleLength={10} skipFromBefore={true} data-test-id={textTestId}>
        123456789123456789
      </Text>
    );
    expect(screen.getByTestId(textTestId)).toBeInTheDocument();

    expect(screen.getByText('...9123456789')).toBeInTheDocument();
  });
});
