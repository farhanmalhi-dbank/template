import React from 'react';
import Highlighter from 'react-highlight-words';

export interface TextHighlighterProps {
  highlightClassName?: string;
  searchWords: Array<string>;
  autoEscape?: boolean;
  textToHighlight: string;
}

const TextHighlighter: React.FC<TextHighlighterProps> = (props: TextHighlighterProps) => <Highlighter {...props} />;

export default TextHighlighter;
