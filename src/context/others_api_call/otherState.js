import React, { useContext } from "react";
import OtherContext from "./otherContext";
import axios from 'axios';
import AuthContext from "../auth/authContext";


const OtherState = (props) =>{
    const auth_context = useContext(AuthContext);
    const {getUser} = auth_context;

    // UPDATE DP FUNCTION -----------
    const updateDp = async(data) => {
        // console.log(...data);
        try {
            const response = await axios({
                method: "patch",
                url: "/api/other/updateuserdp",
                data: data
            })
            console.log(response.data);
            getUser();
            // showAlert("success", "Uloaded Photo Successfully");
        } catch (error) {
            console.log(error.response.data);
            //   showAlert("danger", "Failed To Upload Photo");
        }
    }


    return <OtherContext.Provider value={{updateDp}}>
        {props.children}
    </OtherContext.Provider>
}

export default OtherState;