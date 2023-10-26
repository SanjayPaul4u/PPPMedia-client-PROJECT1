import React, { useContext, useEffect } from 'react'
import  '../../styleFolder/Home.css'
import {Link} from 'react-router-dom'
import PhotoContext from '../../context/photos/photoContext'




function Uploads() {
  const p_context = useContext(PhotoContext);
  const {getAllPhoto, allPhotos} = p_context;

  // use navigate hook

  useEffect(() => {
      getAllPhoto();
    
    // eslint-disable-next-line
  }, [])

  return (
    <div>
        {/* PHOTO UPLOAD CARD */}
        <div className="home-card" style={{borderRadius:"0.2rem"}}>
            <div className="card-body">
            <h4 className="card-title" id='uploadTitle'>Upload Your Photo</h4>            
            <Link id='cameraIcon' to="/user"><i className="fa-solid fa-camera"></i></Link>
            <hr style={{height:"0.2rem", margin:"-0.2rem"}}/>
            </div>
        </div>

        {/* FETCHING PHOTOS CARD */}
        {allPhotos.length!==0 && allPhotos.map((element)=>{
          return <div key={element._id} className="home-card my-4" id='upload-card'>
          <div className="card-body">

            <div className='d-flex justify-content-between'>
              <div className='d-flex' id='dp-div'>
                <img src="https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg" className="" id='dp-img' alt="err"/>
                <div>
                  <h4 id='dp-name'>Sanjay Pual</h4>
                  <p id='db-about'>Set you about section</p>
                </div>
              </div>
              <i id='follow-icon' className="fa-solid fa-plus"></i>
            </div>  
            <hr id='dp-line'/>

            <p className="card-text" id='upload-title'>{element.title}.</p>
            {element.files.length ===0 && <h6>No uploaded Photos to Display</h6>}
            {element.files.map((element)=>{
              return <img key={element.filePath} src={`data:${element.fileType};base64,${element.imagebase64}`} className="card-img-top" alt="err"/> 
            })}

          </div>            
        </div> 
        })}
                         
    </div>

  )
}

export default Uploads