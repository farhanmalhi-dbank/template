import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Field, QueryBuilderProps } from 'react-querybuilder';
import QueryBuilder from './query-builder';

const fields: Field[] = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' }
];

describe('Query-Builder', () => {
  /**
   * Since rule or group can be defined in rules array, we are initiating with one rule by default and no group
   * Since onQueryChange fires up every time we change rule/query, we will be rerendering the component in test cases with updated props (i.e updated rule or group in rules array])
   */
  let rules = [{ field: 'firstName', operator: 'beginsWith', value: 'Stev' }];
  const props: QueryBuilderProps = {
    fields: fields,
    query: {
      combinator: 'and',
      rules: rules
    },
    onQueryChange: () => {}
  };
  it('should render fine', () => {
    render(<QueryBuilder {...props}>I am a Button</QueryBuilder>);
    expect(screen.getByText('+Rule')).toBeInTheDocument();
    expect(screen.getByText('+Group')).toBeInTheDocument();
  });

  it('should remove rule on x', async () => {
    const { rerender } = render(<QueryBuilder {...props}>I am a Button</QueryBuilder>);
    expect(screen.getByText('+Rule')).toBeInTheDocument();
    expect(screen.getByText('+Group')).toBeInTheDocument();

    expect(screen.getByText('x')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'x' }));
    const newProps = { ...props, query: { ...props.query, rules: [] } };
    rerender(<QueryBuilder {...newProps}>I am a button</QueryBuilder>);

    expect(screen.queryByRole('button', { name: 'x' })).not.toBeInTheDocument();
  });

  it('should add rule', async () => {
    const { rerender } = render(<QueryBuilder {...props}>I am a Button</QueryBuilder>);
    expect(screen.getByText('+Rule')).toBeInTheDocument();
    expect(screen.getByText('+Group')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: '+Rule' }));

    const newProps = {
      ...props,
      query: {
        ...props.query,
        rules: [
          { id: 'random-key-rule-1', field: 'firstName', operator: 'beginsWith', value: 'Stev' },
          { id: 'random-key-rule-2', field: 'lastName', operator: 'in', value: 'Vai,Vaughan' }
        ]
      }
    };
    rerender(<QueryBuilder {...newProps}>I am a button</QueryBuilder>);

    expect(screen.getAllByText('x')).toHaveLength(2);
  });

  it('should add group', async () => {
    const { rerender } = render(<QueryBuilder {...props}>I am a Button</QueryBuilder>);
    expect(screen.getByText('+Rule')).toBeInTheDocument();
    expect(screen.getByText('+Group')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '+Group' }));

    const newProps = {
      ...props,
      query: {
        ...props.query,
        rules: [
          {
            id: 'random-key-group',
            rules: [],
            combinator: 'and',
            not: false
          }
        ]
      }
    };
    rerender(<QueryBuilder {...newProps}>I am a button</QueryBuilder>);

    expect(screen.getByText('x')).toBeInTheDocument();
    expect(screen.getAllByText('x')).toHaveLength(1);
  });
});
