import React, { useContext } from 'react'
import "../../styleFolder/User.css"
import AlertContext from '../../context/alert/alertContext'
import PhotoContext from '../../context/photos/photoContext';



function DeleteAlert(props) {
    const alert_context = useContext(AlertContext);
    const {deleteAlertFunc} = alert_context;
    const photo_context = useContext(PhotoContext);
    const {deleteUserPhoto} = photo_context;

    // MAIN DELETE FUNCTION
    const mainDeleteFunc = () =>{
        // console.log("Delete id: "+ props.id);
        deleteUserPhoto(props.id);
    }
  return (
    <div id='deleteAlert' className="alert-danger p-1 d-flex justify-content-between" role="alert" >
        <h6>Alert: </h6>
        <div>
            <button className='btn btn-sm btn-primary mx-2' onClick={()=>{deleteAlertFunc(props.id, false)}}>Cencen</button>
            <button className='btn btn-sm btn-danger' onClick={mainDeleteFunc}>Delete</button>
        </div>        
    </div>
  )
}

export default DeleteAlert