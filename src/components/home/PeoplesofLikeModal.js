import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext'
// import OtherContext from '../../context/others_api_call/otherContext';


function PeoplesofLikeModal() {
    const function_context = useContext(FunctionContext);
    const {OpenLikesModalRef, LikesArr} = function_context;
    // const other_context = useContext(OtherContext);
    // const {getUserByEmail} = other_context;


    const getUserFunc = (email)=>{
        console.log(email);
    }
    
  return (
    <div>        
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCheckLikes" ref={OpenLikesModalRef}>
        Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalCheckLikes" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">People, Who had Liked This Photo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {LikesArr.length!==0 && LikesArr.map((e)=>{
                    return <div key={e}>
                                <h6 onClick={getUserFunc(e)}>{e}</h6>
                        </div> 
                })}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PeoplesofLikeModal