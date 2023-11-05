import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext'
import "../../styleFolder/modalStyle/NameAndAboutUpdateModal.css"

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
                    <h5 className="modal-title" id="exampleModalLabel">Update Name and About</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={Name_n_AboutCloseModalRef}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3 position-relative">
                            <label htmlFor="exampleInputName1" className="form-label position-absolute">Name : </label>
                            <input value={userData123.name} type="text" name='name'  id="exampleInputName1" onChange={NameAboutInputOnchangeFunc} minLength={3} maxLength={25} required/>

                            <div className='warning-msg-div'>                                
                                {userData123.name.length>=1 && userData123.name.length<3 && <p id='error-paragraph'>Name Must be Between 3 to 25 Characters</p>}
                            </div>
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="exampleInputAbout1" className="form-label position-absolute">About : </label>
                            <input value={userData123.about} type="text" name='about'  id="exampleInputAbout1" onChange={NameAboutInputOnchangeFunc} minLength={5} maxLength={50} required/>

                            <div className='warning-msg-div'>
                                {userData123.about.length>=1 && userData123.about.length<5 &&<p id='error-paragraph'>About Must be Between 5 to 100 Characters</p>}
                            </div>

                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" disabled={userData123.name.length<3 || userData123.about.length<5? true: false} className="btn btn-primary" onClick={mainUpdateFunc}>Update</button>
                </div>
                </div>
            </div>
            </div>
         </>
  )
}

export default NameAndAboutUpdateModal