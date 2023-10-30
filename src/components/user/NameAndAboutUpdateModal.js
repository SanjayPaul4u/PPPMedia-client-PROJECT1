import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext'

function NameAndAboutUpdateModal() {
    const function_context = useContext(FunctionContext);
    const {Name_n_AboutUpdateModalRef, userData123, NameAboutInputOnchangeFunc, mainUpdateFunc, Name_n_AboutCloseModalRef} = function_context;
  return (
    <>
    {/* <!-- Button trigger modal --> */}
    <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleName_n_AboutUpdateModal" ref={Name_n_AboutUpdateModalRef}>
            Launch demo modal
            </button>
    
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleName_n_AboutUpdateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Name and About Section Updating</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={Name_n_AboutCloseModalRef}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Name : </label>
                            <input value={userData123.name} type="text" name='name' className="form-control" id="exampleInputName1" onChange={NameAboutInputOnchangeFunc}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputAbout1" className="form-label">About : </label>
                            <input value={userData123.about} type="text" name='about' className="form-control" id="exampleInputAbout1" onChange={NameAboutInputOnchangeFunc} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={mainUpdateFunc}>Update</button>
                </div>
                </div>
            </div>
            </div>
         </>
  )
}

export default NameAndAboutUpdateModal