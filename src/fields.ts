import { Field } from 'react-querybuilder';

export const fields: Field[] = [
  {
    name: 'name',
    label: 'Name',
    operators: [
      { name: '=', label: 'is' },
      { name: 'beginsWith', label: 'begins with' },
    ],
  },
  {
    name: 'dropdownTreeSelect',
    label: 'dropdown tree select',
    operators: [{ name: '=', label: 'is' }],
    datatype: 'dropdownTreeSelect',
  },
];