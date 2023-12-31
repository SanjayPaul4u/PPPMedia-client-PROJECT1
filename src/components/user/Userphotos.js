import React, { useContext, useEffect} from 'react'
import "../../styleFolder/User.css"
import PhotoContext from '../../context/photos/photoContext'
import GetCookie from '../../hooks/getCookie';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import DeleteAlert from '../alerts/DeleteAlert';
import AlertContext from '../../context/alert/alertContext';
import FunctionContext from '../../context/functions/functionContext';



function Userphotos() {
    const p_context = useContext(PhotoContext);
    const alert_context = useContext(AlertContext);
    const function_context = useContext(FunctionContext);
    const {onClickOpenUpdateModalFunc} = function_context;

    const {getUserPhotos, userPhotos, userPhotoLoading} = p_context;    
    const {deleteStatus, deleteAlertFunc} = alert_context;

    // use navigate hook
    const navigate = useNavigate();
    
    useEffect(() => {
        if(GetCookie("auth-token") && userPhotos.length===0){
            getUserPhotos(); 
        }
        if(!GetCookie("auth-token")){
            navigate('/login');
        }
      // eslint-disable-next-line
    }, [])
    
    // ON CLICK DELETE FUNCTION
    const onClickdeleteFunc = (id, isDelete) =>{
        deleteAlertFunc(id, isDelete)
    }
  return (
    <div id='main-user-photos'>
        {/* header */}
        <div>
            <h2 id='main-user-photos-heading'>Your All Photos</h2>
        </div>

        {/* SPINNER */}
        {userPhotoLoading && <div className='mt-4 text-center p-2' style={{backgroundColor: 'white', borderRadius:"0.3rem", margin:"1rem 0 1rem 0"}}>
                <Spinner/>
            </div>}

        <div className="row">  
            {userPhotos.length===0 && !userPhotoLoading && <p>No Photos Uploaded</p>}
            {userPhotos.map((element)=>{

                return <div key={element._id} className="col-12 col-md-6 col-xl-4 my-2">
                <div className="card" style={{border:"none"}}>
                    {/* card */}
                    {deleteStatus.id ===element._id && deleteStatus.isDelete===true && <DeleteAlert id ={element._id}/>}

                    <div className='card-body' id="user-photos-card-body">
                        <div className={`d-flex justify-content-end `}>
                            <i className="fa-solid fa-pen-to-square mb-2 mx-4" onClick={()=>{onClickOpenUpdateModalFunc(element._id, element.title)}}></i>
                            <i className="fa-solid fa-trash-can mb-2" onClick={()=>{onClickdeleteFunc(element._id, true)}}></i>
                        </div>                    
                        <div id='title-div'>
                            <p className="user-photos-card-title">{element.title}</p>
                        </div>
                        <div id="image-div">

                            {element.files.length===0 && <h6>No Uploaded Photo to Display</h6>}
                            {element.files.map((element)=>{
                                return<img key={element.filePath} src={`data:${element.fileType};base64,${element.imagebase64}`} className="card-img-top" alt="imgErr"/>                            
                            })}

                            <h6>Total like {element.likes.length}</h6>
                            <h6>Uploaded on {new Date (element.createdAt).toDateString()}</h6>
                        </div>
                    </div>
                </div>
                 {/* card - end*/}
            </div>
            
            })}

        </div>
    </div>
  )
}

export default Userphotos