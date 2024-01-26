import React, { useState } from 'react'

function MYassignment1() {
    
    let [count,setcount]= useState(0)
    
    let Submithandular=()=>{
        setcount(count+1)
    }
  return (
    <>
    <div className='main m-auto mt-5 w-50 p-4'>
   {count}<br/><br/>
    <button className='mmm' onClick={Submithandular}>dec</button>
    <button className='mmm1' >+</button>
    </div>
  
   
      </>
  )
}

export default MYassignment1