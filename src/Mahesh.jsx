// ParentComponent.jsx

import React from 'react';
import Mahesh2 from './Mahesh2';

const ParentComponent = () => {
  // Example array
  const data = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* Passing the array as a prop to the ChildComponent */}
      <Mahesh2 dataArray={data} />
    </div>
  );
};

export default ParentComponent;
