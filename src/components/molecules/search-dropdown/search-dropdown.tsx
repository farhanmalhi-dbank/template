import React from 'react';
import { Button, Card, Field, QueryBuilder, RuleGroupType } from '../../atoms';

export interface SearchDropDownProp {
  fields: Field[];
  query: RuleGroupType;
  // eslint-disable-next-line no-unused-vars
  onQueryChange: (query: RuleGroupType) => void;
  handleApplyFilter: () => void;
  clickHandler: () => void;
}

const SearchDropDown: React.FC<SearchDropDownProp> = ({
  fields,
  query,
  onQueryChange,
  handleApplyFilter,
  clickHandler
}: SearchDropDownProp) => (
  <Card
    actions={[
      <div className="dropdown-footer" key="actions-1">
        <Button key="apply-filter-1" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
        <Button key="cancel-filter-2" onClick={clickHandler} type="ghost">
          Cancel
        </Button>
      </div>
    ]}>
    <QueryBuilder fields={fields} query={query} onQueryChange={onQueryChange} />
  </Card>
);

export default SearchDropDown;
