import { render, screen } from '@testing-library/react';
import { Field } from '../../atoms';
import SearchDropDown, { SearchDropDownProp } from './search-dropdown';

const fields: Field[] = [
  { name: 'name', label: 'Name' },
  { name: 'cnic', label: 'CNIC' },
  {
    name: 'phone_number',
    label: 'Phone Number',
    operators: [
      { name: '=', label: '=' },
      { name: 'beginsWith', label: 'begins with' }
    ]
  }
];
describe('SearchDropDown', () => {
  it('should render Search dropdown', () => {
    const props: SearchDropDownProp = {
      fields: fields,
      query: {
        combinator: '',
        rules: []
      },
      onQueryChange: () => {},
      handleApplyFilter: () => {},
      clickHandler: () => {}
    };
    render(<SearchDropDown {...props} />);
    expect(screen.getByText('Apply Filter')).toBeInTheDocument();
  });
});
