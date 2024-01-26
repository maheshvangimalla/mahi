import React from 'react'

function DisplayCard({ arr,deleteHandler,editHandler }) {

    
    if (arr.length === 0) {
        return <div className="row">
            <div className="col text-center text-white">
                <h2>No Data Found...</h2>
            </div>
        </div>
    }
    else {
        return (
          <>
                {
                    arr.map((item, i) => {
                        return (
                            <div className="col-md-3 m-5" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button className='btn bg-success' onClick={()=>{editHandler(item.id)}}>Edit</button>
                                        <button className='btn bg-danger' onClick={()=>{deleteHandler(item.id)}}>Del</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </>
        )
    }


}

export default DisplayCard