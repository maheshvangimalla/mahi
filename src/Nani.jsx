import N2 from './N2'
import React,{ createContext } from 'react'
  export  const  Context= createContext()
function Nani() {
  let IsAdmin="true"
  return (
    <>
    <Context.Provider value={IsAdmin}>
      <N2></N2>
    </Context.Provider>
   
    </>
  )
}

export default Nani