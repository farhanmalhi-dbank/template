import { QueryBuilderAntD } from '@react-querybuilder/antd';
import React from 'react';
import { Field as ReactQueryField, RuleGroupType as ReactQueryRuleGroupType } from 'react-querybuilder';
import { defaultValidator, QueryBuilder as ReactQueryBuilder, QueryBuilderProps } from 'react-querybuilder';

export interface Field extends ReactQueryField {}
export interface RuleGroupType extends ReactQueryRuleGroupType {}
const QueryBuilder: React.FC<any> = ({ fields, query, onQueryChange }: QueryBuilderProps) => (
  <QueryBuilderAntD>
    <ReactQueryBuilder
      fields={fields}
      query={query}
      onQueryChange={onQueryChange}
      addRuleToNewGroups={true}
      showNotToggle={true}
      validator={defaultValidator}
    />
  </QueryBuilderAntD>
);

export default QueryBuilder;
