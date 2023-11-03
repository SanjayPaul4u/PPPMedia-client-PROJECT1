import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../styleFolder/Anyuser.css"
import DefaultImg from '../images/default.png'
import FunctionContext from '../../context/functions/functionContext';
import OtherContext from '../../context/others_api_call/otherContext';




function MainAnyUser() {
    const function_context = useContext(FunctionContext);
    const {userDataObject} = function_context;
    const other_context = useContext(OtherContext);
    const {anyUserAllPhotos, getPhotosById} = other_context;
    const navigate = useNavigate();
    
    useEffect(() => {
        if(userDataObject ===null){
            navigate('/home');
        }
        window.scrollTo(0, 0);
        if(userDataObject){
            getPhotosById(userDataObject._id);
        }
        // eslint-disable-next-line
    }, [])
    
    
  return (
    <>
    {userDataObject !==null && <div className='container' id='any-user-main-container'>        
        <div id='any-user-sub-container'>

            {/* ANY USER'S HEAD */}
            <div id="any-user-head">
                <img src={`${userDataObject.dpFiles.length===0?DefaultImg:`data:${userDataObject.dpFiles[0].fileType};base64,${userDataObject.dpFiles[0].imagebase64}`}`} alt="imgError" />
                <h3>{userDataObject.name}</h3>
                <h6>{userDataObject.about}</h6>
                
            </div>


            {/* ANY USER'S PHOTO */}
            <div id="any-user-photos">
                <h5>{userDataObject.name}'s All Aploaded Photos</h5>
                <div className="row">
                    
                    {anyUserAllPhotos.length===0 && <p className='text-center mt-4'>No photos Uploaded by {userDataObject.name}</p> }
                    {anyUserAllPhotos.length!==0 &&
                        anyUserAllPhotos.map((e)=>{
                            return <div key={e._id} id='any-user-photo-div' className="col-12 col-md-6 col-xl-4 my-2">
                                        {/* card */}
                                        <div className="card" id='any-user-photos-card'>
                                                <div className="card-body">
                                                    <h6>Uploaded on {new Date (e.createdAt).toDateString()}</h6>
                                                    <p className="card-text">{e.title}</p>

                                                        {e.files.length ===0 && <h6>No uploaded Photos to Display</h6>}
                                                        {e.files.map((element)=>{
                                                        return <img key={element.filePath} src={`data:${element.fileType};base64,${element.imagebase64}`} id="any-user-card-img" alt="err"/> 
                                                        })}
                                                    <h6>Total Like : {e.likes.length}</h6>
                                                </div>
                                            </div>
                                        {/* card end*/}
                                    </div>
                        })
                        }

                </div>
            </div>
        </div>
        
    </div>}
    </>
    
    
  )
}

export default MainAnyUser