import React from 'react';
import CheckBoxTree from './CheckBoxTree';

const data = [
  {name: "Furniture", children: [
    {name: "Tables & Chairs", children: [
      {name: "specialtable1", children: [
        {name: "4thlevel1", children: []}
      ]},
      {name: "specialtable2", children: []}
    ]},
    {name: "Sofas", children: []},
    {name: "Occasional Furniture", children: [
      {name: "occ 1", children: []},
      {name: "occ 2", children: []}
    ]}
  ] }
];

function App() {
  return (
    <div className="App">
      <CheckBoxTree nodes={data} />
    </div>
  );
}

export default App;
