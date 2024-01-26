// import React from 'react'

// function MYassignment() {
//   return (
//     <>
//                     <div  className='main m-auto mt-5 w-50 p-4'>
//                       <input type="text" /><br/><br/>
//                       <button className='btn btn-primary'>submit</button>
//                    </div>

//    </>
//   )
// }

// export default MYassignment
import React, { useState } from 'react';

function MyAssignment() {
  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    // Create a new card with the input value
   
     const newCard = { id: Date.now(), text: inputValue };
    // Update the state to include the new card
    setCards([...cards, newCard]);
    
    // Clear the input value
    setInputValue('');
  };

  return (
    <>
      <div className='main m-auto mt-5 w-50 p-4'>
        <input  type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
        /><br/><br/>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </div>

      {/* Display created cards */}
      <div className="mt-2">
        {cards.map(card => (
          <div data={card.id} className="card">
            {card.text}
            <div className="footer">
                <button>delete</button><br/>
                <button>edite</button><br/>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyAssignment;
