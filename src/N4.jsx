
import { useContext } from 'react'
import{Context} from'./Nani'

function N4({data}) {
  let value=useContext(Context)
  return (
    <>
    <h1>is admin:{value}</h1>
    </>
  )
}

export default N4