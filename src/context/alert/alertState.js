import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) =>{

    //_____________________________________________________________

    //FOR ALL COMPONENT ALERT
    //_____________________________________________________________
    // ALERT STATE
    const [alert, setAlert] = useState(null);

    // SHOW ALERT FUNCTION
    const showAlert = (type, msg)=>{
        setAlert({
            type : type,
            message: msg
        })

        setTimeout(() => {
            setAlert(null)
        }, 4000);
    }
    //_____________________________________________________________

    //FOR USER IMAGES DELETE ALERT
    //_____________________________________________________________
    const [deleteStatus, setDeleteStatus] = useState({id: "", isDelete: false});

    const deleteAlertFunc = (id, isDelete)=>{
        setDeleteStatus({id: id, isDelete: isDelete});
    }

    return <AlertContext.Provider value={{alert, showAlert, deleteStatus, deleteAlertFunc}}>
        {props.children}
    </AlertContext.Provider>
}
export default AlertState;