import { useRef, useState } from "react"

function Forms() {
    
const[Email,setEmail]=useState()
const Pws= useRef()

  return (
    <>
    <div className='border  w-25 mt-5 m-auto p-4'>
        <h2 className=' text-primary text-center '>login</h2>
   
    <div className='mt-3 '>
        <label>Email</label>
        <input type='email' className='form-control' value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <br/>
    <div className='mt-3'>
        <label>Password</label>
        <input type='password'  className='form-control' ref={Pws} />
    </div>
    <br/>
    <button className='btn btn-danger w-100 ' onClick={()=>{console.log("EMAIL:",Email)
   console.log("Pass:",Pws.current.value)}}>log</button>
     </div>
    </>
 
  )
}

export default Forms