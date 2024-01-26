// import React, { useState } from 'react'

// function Assignment2() {
//  let[UserName,SetUserName]=useState('');
//  let[PAssWord,SetPAssWord]=useState('');
//  let[ConfrompPassword,SetConfrompPassword]=useState('');


//   let[Error,setErrors]=useState({
//     UserName:"" ,
//     PAssWord:"" ,
//     ConfrompPassword:""
//   });
//  function Clickhandular(){
//     if(UserName.trim()===""){
//         setErrors((Error)=>({...Error,UserName:'enter your user name'}))
//     }
//     else if(UserName .length<=5){
//       setErrors((Error)=>({...Error,UserName:"should be give more then 5 letters"}))
//     }
//     else{
//       setErrors({...Error,UserName:''})
//     }
//     if(PAssWord.trim()===""){
//       setErrors((Error)=>({...Error,PAssWord:"enter your password "}))
//     }
//     else if(PAssWord .length<=5){
//       setErrors((Error)=>({...Error,PAssWord:"should be give more then 5 letters"}))
//     }
    
//     else{
//       setErrors({...Error,PAssWord:''})
//     }
  
//  }
//   return (
//   <>
//   <form>
//     <div>
//         <label > username:</label><br/>
//         <input type="text" placeholder='enter user name....' required  value={UserName} onChange={(e)=>{SetUserName(e.target.value)}}/>
//         <br/>
//       {Error.UserName&&<span style={{color:'red'}}>{Error.UserName}</span>}
//     </div>
//     <div>
//     <label > password:</label><br/>
//         <input type="text" placeholder='enter user  password....' required  value={PAssWord} onChange={(e)=>{SetPAssWord(e.target.value)}}/>
//         <br/>
//         {Error.PAssWord&&<span style={{color:'red'}}>{Error.PAssWord}</span>}
//     </div>
//     <div>
//     <label > confrom password:</label><br/>
//         <input type="text" placeholder='enter user  conform password...' required value={ConfrompPassword} onChange={(e)=>{SetConfrompPassword(e.target.value)}} /> 
//     </div><br/>
//     <div>
//     <button onClick={Clickhandular}>submit</button>
//     </div>
   
//   </form>
//   </>
//   )
// }

// export default Assignment2


import React, { useState } from 'react'

function Assignment2() {
  let[ user,setuser]= useState('')
  let[ pass,setpass]= useState('')
  let[ con,setcon]= useState('')


  let[error,seterror]= useState('')
  let [passError,setPassError]=useState('')

  function Handular(e){
    let value= e.target.value
    
        if(/^\d/.test(value)){
          seterror('username should not start with digit')
        }
        else if(value.length<=5){
          seterror('username should be more than 5 characters')
        }
        else{
          seterror('')
        }

        setuser(value)
    }
    function Paawordhandular(e){
      let value=e.target.value
      if(value.length<=5){
        setPassError('passwordshould contain more than 5 characters')
      }
     
      else{
        setPassError('')
      }

      setpass(value)
    }

    function submitHandler(e){
      e.preventDefault()
      if(!user &&  !pass){
        seterror('required*')
        setPassError('required*')
      }
      else{
        alert('submitted successfully')
      }
    }
  
  return (
   <>
   <form>
    <div>
        <label > username:</label><br/>
        <input type="text" placeholder='enter user name....'    onChange={Handular}/>
        <br/>
        {error && <p style={{color:"red"}}>{error}</p>}
     
    </div>
    <div>
    <label > password:</label><br/>
        <input type="text" placeholder='enter user  password....'   onChange={Paawordhandular}/>
        <br/>
        {passError && <p>{passError}</p>}
    </div>
    <div>
    <label > confrom password:</label><br/>
        <input type="text" placeholder='enter user  conform password...' /> 
    </div><br/>
    <div>
      <br />
      <button onClick={submitHandler}>submit</button>
   
    </div>
   
  </form>
   
   </>
  )
}

export default Assignment2