import { render, screen } from '@testing-library/react';
import Tag from './tag';

const tagTestId = 'tag';

describe('Tag', () => {
  it('should render fine', async () => {
    render(
      <Tag color="green" data-test-id={tagTestId}>
        Success
      </Tag>
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByTestId(tagTestId)).toHaveClass(`ant-tag-green`);
  });
});
