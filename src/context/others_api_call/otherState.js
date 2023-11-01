import React, { useContext} from "react";
import OtherContext from "./otherContext";
import axios from 'axios';
import AuthContext from "../auth/authContext";
import PhotoContext from "../photos/photoContext";



const OtherState = (props) =>{
    const photo_context = useContext(PhotoContext);
    const {getAllPhoto} = photo_context;
    const auth_context = useContext(AuthContext);
    const {getUser, getAllUser} = auth_context;


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
            getAllUser();
            // showAlert("success", "Uloaded Photo Successfully");
        } catch (error) {
            console.log(error);
            //   showAlert("danger", "Failed To Upload Photo");
        }
    }
    // UPDATE DP FUNCTION -----------
    const updateNameAbout = async(data) => {
        // console.log(...data);
        try {
            const response = await axios({
                method: "patch",
                url: "/api/other/updateusernameabout",
                data: data
            })
            console.log(response.data);
            getUser();
            getAllUser();
            // showAlert("success", "Uloaded Photo Successfully");
        } catch (error) {
            console.log(error);
            //   showAlert("danger", "Failed To Upload Photo");
        }
    }

    //// Like -Api call-  FUNCTION -----------
    const likePhoto = async(id) => {
        // console.log(...data);
        try {
            const response = await axios({
                method: "patch",
                url: `/api/other/images/likeimg/${id}`,
            })
            console.log(response.data);
            getAllPhoto();
        } catch (error) {
            console.log(error);
        }
    }

    return <OtherContext.Provider value={{updateDp, updateNameAbout,likePhoto}}>
        {props.children}
    </OtherContext.Provider>
}

export default OtherState;