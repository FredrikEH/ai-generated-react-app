// src/ItemList.js
import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul className="App-list">
      {items.map((item, index) => (
        <li key={index} className="App-list-item">{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;