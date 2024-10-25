// src/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="App-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="App-input"
      />
      <button type="submit" className="App-button">Add Item</button>
    </form>
  );
};

export default ItemForm;