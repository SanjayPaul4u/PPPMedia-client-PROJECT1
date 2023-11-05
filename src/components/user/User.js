import React, { useEffect, useRef, useState } from 'react'
import "../../styleFolder/User.css"
import "../../styleFolder/modalStyle/PhotoUploadModal.css"
import Userprofile from './Userprofile'
import Userphotos from './Userphotos'




function User() {
  const modalOpenRef = useRef();
  const modalUploadRef = useRef();
  const modalCloseRef = useRef();
  const resetFileInputRef = useRef()

  const [filesArrForModal, setfilesArrForModal] = useState(null);
  const [titleForModal, setTitleForModal] = useState("");

  // console.log(filesArrForModal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  // MODAL OPEN REF FUNCTION
  const modalOpenRefFunc = () =>{
    modalOpenRef.current.click();
  }

   // filesArrForModal is not null then open modal
   if(filesArrForModal){
    modalOpenRefFunc();
  }

  // MODAL UPLOAS REF FUNCTION
  const modalUploadRefFunc = ()=>{
    modalUploadRef.current.click();
    modalCloseRef.current.click();
    setTitleForModal("");
    setfilesArrForModal(null);
  }

   // ON CLICK CHANGE FUNCTION FOR INPUT
  const onClickChangeTitleForInput = () =>{
    setTitleForModal("");
    setfilesArrForModal(null);

    // RESET FILE INPUT - BY THIS ref "reset FileInputRef"
    resetFileInputRef.current.click();
    
  }
  
  return (
    <>
    {/* MODAL STARTED */}
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#examplePhotoUploadModal" ref={modalOpenRef} >
        Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="examplePhotoUploadModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">

        <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ready to Upload</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={modalCloseRef} onClick={onClickChangeTitleForInput}></button>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClickChangeTitleForInput}>Cancel</button>
                  <button type="button" onClick={modalUploadRefFunc} className="btn btn-primary">Upload</button>
              </div>
              <div className="modal-body">
                  <div className="row">
                  <p>{titleForModal}</p>
                    {filesArrForModal!==null && filesArrForModal.map((element)=>{
                      return <div key={element} className="col-12 col-md-12 col-xl-12 mb-4">
                      <img src={element} alt="imgErr" style={{width:"100%"}}/>
                    </div>
                    })}
                  </div>
              </div>
            
            </div>
        </div>
        </div>
    </div>
    {/* MODAL END */}


    <div id='main-user-component'>
      <div id='user-component'className='container'>

        <div id='user-row' className="row">
          {/* FIRST ROW - USER PROFILE */}
          <div id='user-profile' className="com-4 col-md-4 col-xl-4">
            <div id='user-profile-fix-div' className=''> {/* updated : created non fix div */}
              <Userprofile setfilesArrForModal={setfilesArrForModal} setTitleForModal={setTitleForModal} modalUploadRef={modalUploadRef} titleForModal={titleForModal} resetFileInputRef={resetFileInputRef}/>                    
            </div>
          </div>


          {/* SECOND ROW - USER PHOTOS */}
          <div id='users-photos' className="col-12 col-md-8 col-xl-8">
            <Userphotos/>
          </div>
        </div>
          
      </div>
    </div>
    </>
  )
}

export default User