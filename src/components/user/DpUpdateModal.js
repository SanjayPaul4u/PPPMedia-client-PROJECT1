import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext';



function DpUpdateModal() {
    const  function_context = useContext(FunctionContext);
    const {dpUpdateModalRef, blobUrl, modalCancelNCloseFunc, mainDpUpdateFunc,dpModalCloseRef} = function_context;
    return (
        <>
        {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleDpUpdateModal" ref={dpUpdateModalRef}>
            Launch demo modal
            </button>
    
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleDpUpdateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">This Photo Going to be Your DP</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={modalCancelNCloseFunc}></button>
                </div>
                <div className="modal-body">
                    { blobUrl!==null && 
                        <img src={blobUrl} alt="" style={{width:"100%"}} />}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={modalCancelNCloseFunc}  ref={dpModalCloseRef}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={mainDpUpdateFunc}>Set Dp</button>
                </div>
                </div>
            </div>
            </div>
         </>
      )
}

export default DpUpdateModal