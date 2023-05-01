import { render, screen } from '@testing-library/react';
import LabelValue from './label-value';

const LabelTestID = 'test-labelValue-label';
const HighlighterTestID = 'test-labelValue-textHighlighter';

const simpleData = {
  title: 'IBFT',
  value: 'ibft'
};

const highlightData = {
  title: 'IBFT',
  value: 'test value',
  searchText: ['test']
};

describe('LabelValue', () => {
  it('should render Label Value with text highlighter', () => {
    render(<LabelValue {...highlightData} />);

    expect(screen.getByTestId(LabelTestID)).toBeInTheDocument();
    expect(screen.getByTestId(HighlighterTestID)).toBeInTheDocument();
    expect(screen.getByText(highlightData.searchText[0])).toHaveClass('highlight');
  });

  it('should render Label and Value without text highlighter', () => {
    render(<LabelValue {...simpleData} />);

    expect(screen.getByTestId(LabelTestID)).toBeInTheDocument();
    expect(screen.getByTestId(HighlighterTestID)).toBeInTheDocument();
  });
});
