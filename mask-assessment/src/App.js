import React from 'react';
import CheckBoxTree from './CheckBoxTree';

const data = [
  {name: "Furniture", children: [
    {name: "TablesChairs", children: [
      {name: "specialtable1", children: [
        {name: "4thlevel1", children: []}
      ]},
      {name: "specialtable2", children: []}
    ]},
    {name: "Sofas", children: []},
    {name: "OccasionalFurniture", children: [
      {name: "occ1", children: []},
      {name: "occ2", children: []}
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
