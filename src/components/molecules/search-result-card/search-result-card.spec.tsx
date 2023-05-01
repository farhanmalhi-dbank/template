import { render, screen } from '@testing-library/react';
import SearchResultCard from './search-result-card';

const TransactionCardTestID = 'test-transaction-card';
const mockData = [
  {
    title: 'Name',
    value: 'item?.name'
  },
  {
    title: 'Phone Number',
    value: 'item?.phone'
  },
  {
    title: 'CNIC Number',
    value: 'item?.issued_id'
  }
];

describe('Search Result Card', () => {
  it('should render Search Result Card fine', () => {
    render(<SearchResultCard list={mockData} searchStr={['sada']} onClickHandler={() => {}} />);
    expect(screen.getByTestId(TransactionCardTestID)).toBeInTheDocument();
  });
});
