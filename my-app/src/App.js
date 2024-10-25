// src/App.js
import React, { useState } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
      </header>
      <ItemForm addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;