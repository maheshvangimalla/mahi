import { useState } from "react"

function Toggler() {
    //state to track the toggle
    let [isToggled, setToggled] = useState(false)
    //state to track the form
    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')
    let [price,setPrice]=useState('')

    //state to handle error
    let [userError,setUserError]=useState('')
    let [passError,setPassError]=useState('')
    let [priceError,setPriceError]=useState('')
    let handleToggle = () => {
        setToggled(!isToggled)
    }
    let cancelHandler=()=>{
        setToggled(false)
        setUsername('')
        setPassword('')
        setPrice('')
    }

    let submitHandler=()=>{

    }
    let handleUsername=(e)=>{
        let value=e.target.value
        if(/^\d/.test(value)){
            setUserError('username should not start with digit')
        }
        else if(value.length<=5){
            setUserError('username should be more than 5 characters')
        }
        else{
            setUserError('')
        }

        setUsername(value)
    }

   function handlePassword(e){
        let pass=e.target.value
        if(pass.length<=5){
            setPassError('Password should greater than 5 letters')
        }
        else{
            setPassError('')
        }

        setPassword(pass)
   }

   function handlePrice(e){
      let price=e.target.value
      if(price<0){
        setPriceError('price should be in positive')
      }
      else{
        setPriceError('')
      }
      setPrice(price)
   }
    return (
        <div className="border w-50 mt-5 m-auto p-5">
            <button className=" m-auto mt-4 d-flex justify-content-center" onClick={handleToggle}>{isToggled ? 'ON' : 'OFF'}</button>
            {isToggled && <form>
                <div className="border mt-5 form w-75">
                    Username:<input type='text' className="mt-3 m-auto" required placeholder="Enter usename" onChange={handleUsername} />
                    {userError && <p style={{color: 'red'}}>{userError}</p>}
                    <br></br>
                    <br />
                    Password:<input type='password' placeholder="Enter password" required onChange={handlePassword}/>
                    {passError && <p style={{color:'red'}}>{passError}</p>}
                    <br /><br />
                    Price:<input type='number' required onChange={handlePrice}/>
                    {priceError && <p style={{color:'red'}}>{priceError}</p>}
                    <div className="d-flex mt-4 justify-content-between">
                        <button className="btn bg-danger" onClick={cancelHandler}>Cancel</button>
                        <button className="btn bg-success" onClick={submitHandler}>OK</button>
                    </div>
                    
                </div>
                

                </form>}
               
        </div>
    )

}
export default Toggler