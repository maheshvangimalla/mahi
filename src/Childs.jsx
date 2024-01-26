
import React from 'react'

function Childs(props) {
  let {name, age,address,color}=props.mydata
  return (
   <>
    <div>Childs</div>
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
    </div>
   </>
    
  )
}

export default Childs