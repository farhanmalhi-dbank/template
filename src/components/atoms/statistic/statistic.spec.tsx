import { render, screen } from '@testing-library/react';
import Statistic from './statistic';

describe('Statistic', () => {
  it('should render title and number with 2 precisions and in accounting format', () => {
    render(<Statistic title="Title" value={123456} precision={2} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('123,456')).toBeInTheDocument();
    expect(screen.getByText('.00')).toBeInTheDocument();
  });
});
