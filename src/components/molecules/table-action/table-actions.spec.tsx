import { render, screen } from '@testing-library/react';
import { mockTableActionButtons } from '../../../mocks/table';
import TableActions from './table-actions';

describe('Table actions', () => {
  it('should render buttons fine', () => {
    const buttons = mockTableActionButtons;
    render(<TableActions buttons={buttons} />);
    expect(screen.getByRole('button', { name: 'View' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });
});
