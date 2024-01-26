import React, { useContext } from 'react'
import {Pranitha} from './M1'
function M3({data}) {
    let value=useContext(Pranitha)
  return (
   <>
   <h1>is admin:{value}</h1>
   </>
  )
}

export default M3