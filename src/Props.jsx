// ParentComponent.jsx
import React from 'react';
import User from './User';

function ParentComponent() {
  const numbers = [1, 2, 3, 4, 5];
  const colors = ['red', 'green', 'blue'];

  return (
    <div>
      <User title="Number List" numbers={numbers} />
      <User  title="Color List"colors={colors} />
    </div>
  );
}
export default ParentComponent
