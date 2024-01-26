import React from 'react'
import Santhooosh1 from './Santhooosh1'
function Santhooosh() {
    let data="this is parent message"
    let arr=['mango','graps','banana']
    let obj={name:"mahesh", age:"21" ,add:"blabla",fravire:"koko"}
  return (
    <Santhooosh1 value={data}  message={arr} obj={obj}/>
  )
}

export default Santhooosh