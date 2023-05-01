import { render, screen } from '@testing-library/react';
import TextHighlighter from './text-highlighter';

const TextHighlighterTestId = 'test-text-highlight';

describe('TextHighlighter', () => {
  it('should render fine', () => {
    render(<TextHighlighter searchWords={[]} textToHighlight="I am a highlighter" data-test-id={TextHighlighterTestId} />);

    expect(screen.getByText('I am a highlighter')).toBeInTheDocument();
    expect(screen.getByTestId(TextHighlighterTestId)).toBeInTheDocument();
  });

  it('should highlight text using highlight class', () => {
    render(<TextHighlighter highlightClassName="highlight" searchWords={['I am a highlighter']} textToHighlight="I am a highlighter" />);

    expect(screen.getByText('I am a highlighter')).toHaveClass('highlight');
  });
});
