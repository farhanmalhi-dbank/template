import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckableTag, { CheckableTagProps } from './checkable-tag';

const props: CheckableTagProps = {
  checked: true,
  onChange: jest.fn()
};

const tagTestId = 'test-checkable-tag';

describe('CheckableTag', () => {
  it('should render fine', () => {
    render(
      <CheckableTag {...props} data-test-id={tagTestId}>
        I am a CheckableTag
      </CheckableTag>
    );

    expect(screen.getByText('I am a CheckableTag')).toBeInTheDocument();
    expect(screen.getByTestId(tagTestId)).toBeInTheDocument();
  });

  it('onChange callback should be called on click', async () => {
    render(<CheckableTag {...props} data-test-id={tagTestId} />);

    await userEvent.click(screen.getByTestId(tagTestId));

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  it('should update the checked property to false', async () => {
    render(
      <CheckableTag
        checked={props.checked}
        onChange={(checked) => {
          props.checked = checked;
        }}
        data-test-id={tagTestId}
      />
    );
    expect(props.checked).toBeTruthy();
    await userEvent.click(screen.getByTestId(tagTestId));
    expect(props.checked).toBeFalsy();
  });
});
