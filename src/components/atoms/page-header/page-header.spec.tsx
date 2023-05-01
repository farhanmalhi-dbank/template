import { render, screen } from '@testing-library/react';
import PageHeader, { PageHeaderProps } from './page-header';

const props: PageHeaderProps = {
  title: 'Title',
  subTitle: 'Sub Title'
};

describe('PageHeader', () => {
  it('should render page header with title and subtitle', () => {
    render(<PageHeader {...props} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Sub Title')).toBeInTheDocument();
  });
});
