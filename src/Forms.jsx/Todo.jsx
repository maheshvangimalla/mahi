import React, { useState } from 'react'
import DisplayCard from './DisplayCard'

function Todo() {
    let [input,setInput]=useState('')
    let [arr,setArr]=useState([])
    let [edit,setEdit]=useState('')
    
    function inputHandler(e){
        let value=e.target.value
        setInput(value)
    }
    function submitHandler(){
        if(!input){
            alert('must fill data')
        }
        else{
            if(edit){
                setArr((pre)=>{
                    return pre.map((item)=>{
                        if(item.id===edit.id){
                            return {...item,input}
                        }
                        else{
                            return item
                        }
                    })
                })
                setEdit('')
            }
            else{
                let data={
                    id:Math.trunc(Math.random()*100),
                    name:input
                }
                setArr((pre)=>{
                    return [...pre,data]
                })
            }
            
           
        }
        setInput('')

    }
    function deleteHandler(id){
        return(
            <>
            {
                setArr(arr.filter((e)=>{
                    return e.id!== id
                }))
            }
            </>
        )
    }
    function editHandler(id){
        let findData=arr.find((item)=>{
            return item.id===id
        })
        setEdit(findData)
        setInput(findData.name)
    }
  return (
    <div className="container-fluid">
        <div className="row bg-info">
            <div className="col text-center">
                <h1 className='display-5'>TODO</h1>
            </div>
        </div>
        <div className="row bg-dark">
            <div className="col m-5">
                <input type="text" className='form form-control' onChange={inputHandler}/>
                
            </div>
            <div className='d-flex justify-content-between align-items-end'>
             <button className='btn bg-success' onClick={submitHandler}>Add</button>
                <button className='btn bg-danger'>ClearAll</button>
            </div>
            <DisplayCard arr={arr} deleteHandler={deleteHandler} editHandler={editHandler} />
        </div>
     
    </div>
  )
}

export default Todo