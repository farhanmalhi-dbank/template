import { render, screen } from '@testing-library/react';
import { mockTable } from '../../../mocks';
import Table from './table';

describe('Table', () => {
  it('should render table and number with 2 precisions and in accounting format', () => {
    const columns = [
      {
        title: 'Transaction id',
        dataIndex: 'trans_id',
        key: 'trans_id',
        width: 100
      },
      {
        title: 'Date & Time Start',
        dataIndex: 'date_time_start',
        key: 'date_time_start',
        width: 150
      }
    ];

    render(<Table dataSource={mockTable} columns={columns} />);

    expect(screen.getAllByRole('columnheader').length).toBeGreaterThan(1);
    expect(screen.getAllByRole('cell').length).toBeGreaterThan(1);

    expect(screen.getAllByRole('columnheader')).toHaveLength(columns.length);
    expect(screen.getAllByRole('cell')).toHaveLength(columns.length * mockTable.length);

    columns.forEach((col) => {
      expect(screen.getByText(col.title)).toBeInTheDocument();
      expect(screen.getByText(col.title)).toBeInTheDocument();
    });
  });
});
