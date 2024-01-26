
import React, { useState } from 'react';
const ColorChanger = () => {

  const [color, setColor] = useState('');


  const [backgroundColor, setBackgroundColor] = useState('white');


  const handleButtonClick = () => {
    setBackgroundColor(color);
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Enter color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />


      <button onClick={handleButtonClick}>Change Color</button>


      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: backgroundColor,
          marginTop: '20px',
        }}
      >

        <p style={{ color: 'white' }}>Entered Color: {color}</p>
      </div>
    </div>
  );
};

export default ColorChanger;
