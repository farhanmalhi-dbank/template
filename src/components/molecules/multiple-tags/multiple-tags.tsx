import React from 'react';
import { generateUniqueId } from '../../../utils/generate-unique-id/generate-unique-id';
import { Tag } from '../../atoms';

const MultipleTags = ({ tags }: { tags: Array<string> }) => (
  <>
    {tags.map((tag, i) => {
      return (
        <Tag key={generateUniqueId()} data-test-id={`tag-test-${i}`}>
          {tag}
        </Tag>
      );
    })}
  </>
);

export default MultipleTags;
