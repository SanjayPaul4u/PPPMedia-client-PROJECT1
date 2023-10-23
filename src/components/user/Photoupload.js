import React, { useContext, useRef, useState} from 'react'
import addImg from "../images/add-image.png"
import "../../styleFolder/User.css"
import PhotoContext from '../../context/photos/photoContext';


function Photoupload(props) {
  const chooseFileRef = useRef();
  const filesArr = [];
  const p_context = useContext(PhotoContext);
  const {uploadPhoto} = p_context;
  const [title, setTitle] = useState("")
  const [files, setFiles] = useState("")


  // choose files function***
  const chooseFileFunc = ()=>{
    chooseFileRef.current.click();
  }
  // onchnage files input function****
  const onChangeFilesFunc = async(event) =>{
    const filesObj = event.target.files;

    for (let index = 0; index < filesObj.length; index++) {
      const element =URL.createObjectURL(filesObj[index]);
      filesArr.push(element);      
    }
    // console.log(filesArr);
    props.setfilesArrForModal(filesArr);
    setFiles(filesObj);
  }

  // on change title input function
  const onChangeTitleFunc = (event) =>{
    console.log(event.target.value);
    props.setTitleForModal(event.target.value);
    setTitle(event.target.value);
    
  }

  // onClickUpload function
  const onClickUploadPhoto = async() =>{
    // e.preventDefault();// if submit button
    const formData = new FormData();
    formData.append("title", title);
    for (let index = 0; index < files.length; index++) {
      formData.append("files", files[index])      
    }
    // console.log(data);
    await uploadPhoto(formData);    
  }

 
  return (
    
    <>
    {/* PHOTO UPLOAD SIDEBAR************* */}
    <div id="main-photo-upload">
        <h3>Upload Photos</h3>
        <hr />
        <div>
            {/* display none - files - input function */}
            <input type="file" className="form-control d-none" id="exampleInputFiles1" aria-describedby="filesHelp" name='files' ref={chooseFileRef}  multiple onChange={onChangeFilesFunc} accept='image/jpeg, image/png, image/jpg' onClick={props.modalOpenRefFunc}></input>

            <label htmlFor="exampleInputTitle1" className="form-label">Title: </label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="titleHelp" name='title' placeholder='Set Title Here' onChange={onChangeTitleFunc} ></input>

            <button  className="btn btn-sm btn-success mt-2" onClick={onClickUploadPhoto}>Upload Photos</button>
        </div>
        <img src={addImg} alt="errImg" style={{width:"3rem"}} onClick={chooseFileFunc}/> <br />
    </div>

    
      </>

      )
    }

export default Photoupload