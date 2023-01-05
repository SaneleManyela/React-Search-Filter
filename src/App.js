import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const items = [
    'watches', 'necklaces',
    'rings', 'earrings', 'belts', 
    'toe-ring'
  ];

  const [filterList, setFilterList] = useState(items);

  const handleSearch = (event) => {
    if(event.target.value === "") {
      setFilterList(items);
      return;
    }
 
    const filteredValues = items.filter((item) => item.toLowerCase().indexOf(
      event.target.value.toLowerCase()) !== -1);
    setFilterList(filteredValues);
  }

  return (
    <div className="App">
      <h4>Items Search</h4>
      <label>search: <input type={'text'} name={'query'} onChange={handleSearch}/></label>
      {filterList && filterList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
