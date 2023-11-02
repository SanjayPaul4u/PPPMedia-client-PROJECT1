import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext'


function UpdateModal() {
    const function_context = useContext(FunctionContext);
    const {clickUpdateModalRef, modalTitle, modalInputOnchangeFunc, onclickUpdateFunc, updateModalCloseRef }  = function_context;
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalTwo234" ref={clickUpdateModalRef} >
        Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalTwo234" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Set titie here" value={modalTitle} onChange={modalInputOnchangeFunc} minLength={5} maxLength={100} required/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={updateModalCloseRef}>Close</button>
                <button type="button" className="btn btn-primary" onClick={onclickUpdateFunc}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UpdateModal