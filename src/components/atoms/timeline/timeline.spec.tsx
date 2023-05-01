import { render, screen } from '@testing-library/react';
import { activityLogMock } from '../../../constants';
import Timeline from './timeline';

const timeLineTestId = 'timeline-test-id';

describe('Timeline', () => {
  it('should render the Timeline ', () => {
    render(<Timeline mode={'left'} items={activityLogMock} data-test-id={timeLineTestId} />);
    expect(screen.getByTestId(timeLineTestId)).toBeInTheDocument();
  });
});
