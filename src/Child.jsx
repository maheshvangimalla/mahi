// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {
  // Accessing the array passed as props
  const items = props.items;

  return (
    <div>
      <h2>Items in the array:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
