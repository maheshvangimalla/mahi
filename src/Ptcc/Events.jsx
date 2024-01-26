import React, { useState } from 'react'

function Events() {
    let [ input,setinput]=useState("")
    let [email,setemail]=useState("")
    let [ pass,setpass]=useState("")
    let [confrom,setconfrom]=useState("")

 let[Error,setError]=useState("")
 let[Error1,setError1]=useState("")

 let inputhandular=(e)=>{
let value=e.target.value
if(/^\d/.test(value)){
    setError('username should not start with digit')
  }
  else if(value.length<=5){
    setError('username should be more than 5 characters')
  }
  else{
    setError('')
  }
  setinput(value)
 }

 let mailhandular=(e)=>{
    let value=e.target.value
     }
     let Passwordhandular=(e)=>{
        let value=e.target.value
         }
         let confromhandular=(e)=>{
            let value=e.target.value
             }
             function submitHandler(e){
                e.preventDefault()
                if(!input &&  !email){
                    setError('required*')
                    setError1('required*')
                }
                else{
                  alert('submitted successfully')
                }
              }
  return (
    <div className='btn m-auto mt-5 w-50' >
        <label>name:</label><br/>
        <input type="text"  onChange={inputhandular} />
       {Error && <p>{Error}</p>}
        <br/>

        <label>email:</label><br/>
        <input type="email"  onChange={ mailhandular}/><br/>

        <label>password:</label><br/>
        <input type="password" onChange={Passwordhandular} /><br/>

        <label>conformpassword:</label><br/>
        <input type="confrompassword"  onChange={ confromhandular}/><br/>

        <br/>
        <button onClick={submitHandler}>submit</button>
    </div>
  )
}

export default Events