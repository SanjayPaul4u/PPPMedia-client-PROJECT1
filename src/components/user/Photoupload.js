import React, { useRef} from 'react'
import addImg from "../images/add-image.png"
import "../../styleFolder/User.css"




function Photoupload(props) {
  const chooseFileRef = useRef();
  const filesArr = [];


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
    props.setfilesArrForModal(filesArr)
  }

  // on change title input function
  const onChangeTitleFunc = (event) =>{
    console.log(event.target.value);
    props.setTitleForModal(event.target.value)
    
  }

 
  return (
    
    <>
    {/* PHOTO UPLOAD SIDEBAR************* */}
    <div id="main-photo-upload">
        <h3>Upload Photos</h3>
        <hr />
        <div>
          <form>
            {/* display none - files - input function */}
            <input type="file" className="form-control d-none" id="exampleInputFiles1" aria-describedby="filesHelp" name='files' ref={chooseFileRef}  multiple onChange={onChangeFilesFunc} accept='image/jpeg, image/png, image/jpg' onClick={props.modalOpenRefFunc}></input>

            <label htmlFor="exampleInputTitle1" className="form-label">Title: </label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="titleHelp" name='title' placeholder='Set Title Here' onChange={onChangeTitleFunc} ></input>

            <button type="submit" className="btn btn-sm btn-success mt-2">Upload Photos</button>

           
            
          </form>
        </div>
        <img src={addImg} alt="errImg" style={{width:"3rem"}} onClick={chooseFileFunc}/> <br />
    </div>

    
      </>

      )
    }

export default Photoupload