import React from 'react'
import Photoupload from './Photoupload'

function Userprofile(props) {
  return (
    <>
    {/* USER PROFILE SIDE BAR */}
    <div id='main-userprofile'>
      <div id='main-userprofile-body'>
        <img id='dp-image' src="https://cdn.pixabay.com/photo/2023/04/19/19/46/gosling-7938451_1280.jpg" alt="imgErr" />
        <h4 className='my-2'>Sanjay Paul</h4>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing.</h6>
      </div>
    </div>

    {/* PHOTO UPLOAD SIDEBAR */}
    <Photoupload modalOpenRefFunc={props.modalOpenRefFunc} setfilesArrForModal={props.setfilesArrForModal} setTitleForModal={props.setTitleForModal} modalUploadRef={props.modalUploadRef} titleForModal={props.titleForModal} resetFileInputRef={props.resetFileInputRef}/>
      </>
  )
}

export default Userprofile