// ChildComponent.jsx

import React from 'react';

const ChildComponent = (props) => {
  // Access the array from props
  const { dataArray } = props;

  return (
    <div>
      <h2>Array received from props:</h2>
      <ul>
        {/* Display each element of the array */}
        {dataArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
