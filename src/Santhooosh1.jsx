import React from 'react'

function Santhooosh1(props) {
  return (
    <>
    
    <div>message:{props.value}</div>
    <p>my arr:{props.message[1]}</p>
    <p>{props.message[2]}</p>
    <h1>my details:{props.obj.name}</h1>
    
    </>
  )
}

export default Santhooosh1