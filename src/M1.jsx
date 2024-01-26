import React, { createContext } from 'react'
import M2 from "./M2"
  export let Pranitha = createContext()
function M1() {
   
    let IsAdmin="false"
  return (
    <>
    < Pranitha.Provider value={IsAdmin}>
    <M2></M2>
    </Pranitha.Provider>
    
    </>
  )
}

export default M1