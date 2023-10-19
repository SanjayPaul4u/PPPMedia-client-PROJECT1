import React from 'react'
import  '../../styleFolder/Home.css'
import {Link} from 'react-router-dom'

function Uploads() {
  return (
    <div>
        {/* PHOTO UPLOAD CARD */}
        <div className="home-card" style={{borderRadius:"0.2rem"}}>
            <div className="card-body">
            <h4 className="card-title" id='uploadTitle'>Upload Your Photo</h4>            
            <Link id='cameraIcon' to="/asdfasdfad"><i className="fa-solid fa-camera"></i></Link>
            <hr style={{height:"0.2rem", margin:"-0.2rem"}}/>
            </div>
        </div>

         {/* FETCHING PHOTOS CARD */}
         <div className="home-card my-4" id='upload-card'>
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

              <p className="card-text" id='upload-title'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <img src="https://cdn.pixabay.com/photo/2023/09/18/20/01/woman-8261342_1280.jpg" className="card-img-top" alt="err"/>
            
            </div>
            
          </div>                 
    </div>

  )
}

export default Uploads