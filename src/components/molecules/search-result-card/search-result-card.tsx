import { Card } from '../../atoms';
import { LabelValue } from '../label-value';

export interface SearchResultCardProps {
  list: Array<{ title: string; value: string }>;
  searchStr: Array<string>;
  onClickHandler?: () => void;
}

const SearchResultCard = ({ list, searchStr, onClickHandler }: SearchResultCardProps) => {
  return (
    <Card data-test-id="test-transaction-card" onClick={onClickHandler} hoverable={true}>
      {list.map((x) => {
        return <LabelValue key={x.title} title={x.title} value={x.value} searchText={searchStr} />;
      })}
    </Card>
  );
};

export default SearchResultCard;
