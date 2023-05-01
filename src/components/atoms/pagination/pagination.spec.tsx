import { render, screen } from '@testing-library/react';
import Pagination, { PaginationProps } from './pagination';

const props: PaginationProps = {
  onChange: jest.fn()
};

const paginationTestId = 'test-pagination';

describe('Pagination', () => {
  const meta = { totalRecords: 200, page: 1, pageSize: 10 };
  beforeEach(() => {
    render(
      <Pagination
        {...props}
        data-test-id={paginationTestId}
        defaultCurrent={meta.page}
        total={meta.totalRecords}
        pageSize={meta.pageSize}
        showSizeChanger={true}
        showLessItems={true}
      />
    );
  });

  it('should render fine', () => {
    expect(screen.getByTestId(paginationTestId)).toBeInTheDocument();
  });

  it('should select the current page', () => {
    const li = screen.getByTitle(meta.page);
    expect(li).toHaveClass('ant-pagination-item-active');
    expect(li.classList).toHaveLength(3);
  });

  it('should not select the page', () => {
    const pageNumber = meta.page + 1;
    const li = screen.getByTitle(pageNumber);
    expect(li).toHaveClass('ant-pagination-item', `ant-pagination-item-${pageNumber}`);
    expect(li.classList).toHaveLength(2);
  });
});
