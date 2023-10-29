import React, { useContext } from 'react'
import Photoupload from './Photoupload'
import AuthContext from '../../context/auth/authContext'
import dpDefaultImg from '../images/default.png'
import addDpImg from '../images/add-image.png'


function Userprofile(props) {
  const auth_context = useContext(AuthContext);
  const {authUserData} = auth_context;
  // console.log(authUserData);
  return (
    <>
    {/* USER PROFILE SIDE BAR */}
    <div id='main-userprofile'>
      {authUserData.name!==undefined && <div id='main-userprofile-body'>
       
          <img id='dp-image' src={`${authUserData.dpFiles.length===0?dpDefaultImg:"setimgLinkhere"}`} alt="imgErr-todo-updatelink" />
          <img src={addDpImg} alt="imgErr" style={{height:"2rem"}}/>
          
        <h4 className='my-2'>{authUserData.name} <i className="fa-solid fa-pen"></i></h4> 
        <h6>{authUserData.about} <i className="fa-solid fa-pen"></i></h6>
      </div>}
    </div>

    {/* PHOTO UPLOAD SIDEBAR */}
    <Photoupload modalOpenRefFunc={props.modalOpenRefFunc} setfilesArrForModal={props.setfilesArrForModal} setTitleForModal={props.setTitleForModal} modalUploadRef={props.modalUploadRef} titleForModal={props.titleForModal} resetFileInputRef={props.resetFileInputRef}/>
      </>
  )
}

export default Userprofile