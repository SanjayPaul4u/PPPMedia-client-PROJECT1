import React, { useRef, useState } from 'react'
import "../../styleFolder/User.css"
import Userprofile from './Userprofile'
import Userphotos from './Userphotos'




function User() {
  const modalOpenRef = useRef();
  const [filesArrForModal, setfilesArrForModal] = useState(null);
  const [titleForModal, setTitleForModal] = useState("");

  // MODAL OPEN REF FUNCTION
  const modalOpenRefFunc = () =>{
    modalOpenRef.current.click();
  }
  
  return (
    <>
    {/* MODAL STARTED */}
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={modalOpenRef} >
        Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">

        <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Check Your Photos and Upload...</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary">Upload</button>
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
            <div id='user-profile-fix-div' className='fixed-top'>
              <Userprofile modalOpenRefFunc={modalOpenRefFunc} setfilesArrForModal={setfilesArrForModal} setTitleForModal={setTitleForModal}/>                    
            </div>
          </div>


          {/* SECOND ROW - USER PHOTOS */}
          <div id='users-photos' className="com-8 col-md-8 col-xl-8">
            <Userphotos/>
          </div>
        </div>
          
      </div>
    </div>
    </>
  )
}

export default User