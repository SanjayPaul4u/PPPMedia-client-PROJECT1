
import React, { useContext, useEffect} from 'react'
import  '../../styleFolder/Home.css'
import {Link, useNavigate} from 'react-router-dom'
import PhotoContext from '../../context/photos/photoContext'
import GetCookie from '../../hooks/getCookie'
import Spinner from '../Spinner'
import AuthContext from '../../context/auth/authContext'
import defaultDpImg from "../images/default.png"
import Likes from './Likes'
import FunctionContext from '../../context/functions/functionContext'



function Uploads() {
  const p_context = useContext(PhotoContext);
  const auth_context = useContext(AuthContext);
  const {getAllPhoto, allPhotos, allPhotoLoading} = p_context;
  const {getAllUser, allUserArr, getUser} = auth_context;
  const function_context = useContext(FunctionContext);
  const {UserDetailFunc} = function_context;
  // use navigate hook
  const navigate = useNavigate();
  
  useEffect(() => {
    if(GetCookie("auth-token") && allPhotos.length===0){
      getAllPhoto();
      getAllUser();
      getUser();
      
    }
    if(!GetCookie("auth-token")){
      navigate("/login");
    }
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

        {/* SPINNER */}
        {allPhotoLoading && <div className='mt-4 text-center p-2' style={{backgroundColor: 'white', borderRadius:"0.3rem"}}>
          <Spinner/>
        </div>}

        {/* FETCHING PHOTOS CARD */}
        {allPhotos.length!==0 && allPhotos.map((element)=>{
          return <div key={element._id} className="home-card my-4" id='upload-card'>
          <div className="card-body">

            
              
                {/* FETCH DP, NAME, ABOUT - FROM "allUserArr" */}
                {allUserArr.map((e)=>{
                  if(element.user === e._id){
                    return<div key={e._id} className='d-flex justify-content-between'>
                              <div className='d-flex' id='dp-div'>
                                      {/* redirect any user page by clicking dp */}
                                      <Link to="/anyuser">
                                        <img src={`${e.dpFiles.length===0?defaultDpImg:`data:${e.dpFiles[0].fileType};base64,${e.dpFiles[0].imagebase64}`}`} className="" id='dp-img' alt="err" onClick={()=>{UserDetailFunc(e)}}/>
                                      </Link>
                                      <div>
                                          <h4 id='dp-name'>{e.name}</h4>
                                          <p id='db-about'>{e.about}</p>
                                      </div>
                              </div>
                              <Link to="/anyuser"  onClick={()=>{UserDetailFunc(e)}}>
                              <i id='follow-icon' className="fa-solid fa-plus"></i>
                              </Link>
                          </div>
                  }else{
                    return "";
                  }
                })}
              
                
            <hr id='dp-line'/>

            <p className="card-text" id='upload-title'>{element.title}.</p>
            {element.files.length ===0 && <h6>No uploaded Photos to Display</h6>}
            {element.files.map((element)=>{
              return <img key={element.filePath} src={`data:${element.fileType};base64,${element.imagebase64}`} className="card-img-top" alt="err"/> 
            })}

          <Likes element={element}/>
          </div>            
        </div> 
        })}
                         
    </div>

  )
}

export default Uploads