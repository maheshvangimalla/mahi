import React, { useState } from 'react'

function Moment() {
  let [data,setData]=useState("")
  let [num,setNum]=useState("")
  function inputHandler(e){
    let x=e.target.value
    let y=x.length
    // if(typeof(e.target.value==Number)){
    //   setNum('username should not start with digit')
    // }
    if (!isNaN(x[0])) {
      setNum('Username should not start with a digit');
    }
    if(y<5){
      setData("length should be equal to or greater than 5")
    }
    else {
      setData('');
      setNum('');
    }
   
  }

  return (
    <div>
      <label>name:</label>
      <input type="text" required onChange={(e)=>{inputHandler(e)}} /><br></br>
      <p style={{color:"red"}}>{data}</p>
      <p style={{color:"red"}}>{num}</p>
    </div>
  )
}

export default Moment





// import React, { useState } from 'react';

//  function  Switch(){

//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div>

//       <button onClick={toggleSwitch}>  {isOn ? 'Turn on' : 'Turn Off'}  </button>
//       {isOn && <p>< img src="https://tse4.mm.bing.net/th?id=OIP.3l2nfzcHhMemSZooiH3B3AHaFj&pid=Api&P=0&h=180"></img></p>}

//     </div>
//   )
// }

// export default Switch;
