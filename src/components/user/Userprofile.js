import React, { useContext } from 'react'
import Photoupload from './Photoupload'
import AuthContext from '../../context/auth/authContext'
import dpDefaultImg from '../images/default.png'
import addDpImg from '../images/add-image.png'
import FunctionContext from '../../context/functions/functionContext'



function Userprofile(props) {
  const auth_context = useContext(AuthContext);
  const {authUserData} = auth_context;

  const function_context = useContext(FunctionContext);
  const {fileInputRef, onCLickImage, dpInputOnchangeFunc, onCLickPenIcon} = function_context;
  // console.log(authUserData);
  return (
    <>
    {/* USER PROFILE SIDE BAR */}
    <div id='main-userprofile'>
      {authUserData.name!==undefined && <div id='main-userprofile-body'>
        
          <img id='dp-image' src={`${authUserData.dpFiles.length===0?dpDefaultImg:`data:${authUserData.dpFiles[0].fileType};base64,${authUserData.dpFiles[0].imagebase64}`}`} alt="imgErr-todo-updatelink" />

          {/* choose file by click on this image */}
          <img src={addDpImg} id='add-image-icon' alt="imgErr" style={{height:"2rem"}} onClick={onCLickImage}/>
          {/* display none FILE input */}
          <input type="file" className="form-control d-none" id="exampleFormControlInput1" placeholder="choose file for dp" accept='image/jpeg, image/png, image/jpg' ref={fileInputRef} onChange={dpInputOnchangeFunc}/>

          
        <h4 id='name-h4' className='my-2' onClick={()=>{onCLickPenIcon(authUserData.name, authUserData.about)}}>{authUserData.name} <i className="fa-solid fa-pen"></i></h4> 
        <h6 id='about-h6'>{authUserData.about}</h6>
      </div>}
    </div>

    {/* PHOTO UPLOAD SIDEBAR */}
    <Photoupload  setfilesArrForModal={props.setfilesArrForModal} setTitleForModal={props.setTitleForModal} modalUploadRef={props.modalUploadRef} titleForModal={props.titleForModal} resetFileInputRef={props.resetFileInputRef}/>
      </>
  )
}

export default Userprofile