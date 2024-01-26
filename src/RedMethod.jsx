import React, { useReducer } from 'react'
import './Normal.css'

function CountHandular(state,input){
    console.log(state,input)
    return state+input

}
function RedMethod() {
   let [ count,dispatch]= useReducer(CountHandular,0)
  return (
    <div className='normal'>
        <button onClick={()=>{dispatch(-1)}}>-</button>
        <br/><br/>
        <p>count:{count}</p>
        <button onClick={()=>{dispatch(1)}}>+</button>
    </div>
  )
}

export default RedMethod
////////////////////////////////////


