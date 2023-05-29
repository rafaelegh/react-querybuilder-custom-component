import { useState } from 'react'
import { QueryBuilder, RuleGroupType, formatQuery } from 'react-querybuilder';
import { fields } from './fields';
import { CustomValueEditor } from './CustomValueEditor';
import './App.css'
import 'react-querybuilder/dist/query-builder.css';

const initialQuery: RuleGroupType = {
  combinator: 'and',
  rules: [
    { field: 'firstName', operator: 'beginsWith', value: 'Stev' },
    { field: 'dropdownTreeSelect', operator: '=', value: '' },
  ],
};

function App() {
  const [query, setQuery] = useState(initialQuery);

  console.log('render comp.')
  return (
    <>
      <QueryBuilder 
        fields={fields}
        query={query}
        onQueryChange={q => setQuery(q)}
        controlElements={{ valueEditor: CustomValueEditor }}
      />
      <h4>Query</h4>
      <pre>
        <code>{formatQuery(query, 'json')}</code>
      </pre>
    </>
  )
}

export default App
