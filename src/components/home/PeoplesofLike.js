import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext'

function PeoplesofLike() {
    const function_context = useContext(FunctionContext);
    const {Open_n_Close_LikesCollapsRef} = function_context;
  return (
    <>
    <button className="btn btn-primary d-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" ref={Open_n_Close_LikesCollapsRef}>
        Button with data-bs-target
    </button>
    <div className="collapse" id="collapseExample">
    <div className="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
    </div>
    </>
    
  )
}

export default PeoplesofLike