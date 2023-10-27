import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) =>{

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
        }, 5000);
    }

    return <AlertContext.Provider value={{alert, showAlert}}>
        {props.children}
    </AlertContext.Provider>
}
export default AlertState;