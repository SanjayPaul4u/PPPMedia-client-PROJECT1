import React, { useContext, useState} from "react";
import OtherContext from "./otherContext";
import axios from 'axios';
import AuthContext from "../auth/authContext";
import PhotoContext from "../photos/photoContext";
import GetCookie from '../../hooks/getCookie'
// import ProgressContext from "../progressCount/progressContext";




const OtherState = (props) =>{
    const host = "http://localhost:7000";
    // const host = "https://api.pppmedia.online"

    const photo_context = useContext(PhotoContext);
    const {getAllPhoto} = photo_context;
    const auth_context = useContext(AuthContext);
    const {getUser, getAllUser} = auth_context;

    // const progress_context = useContext(ProgressContext);
    // const {SetProgress} = progress_context; 


    // UPDATE DP FUNCTION -----------
    const updateDp = async(data) => {
        // console.log(...data);
        const token  = GetCookie("auth-token");
        try {
            const response = await axios({
                method: "patch",
                url: `${host}/api/other/updateuserdp/${token}`,
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
        const token  = GetCookie("auth-token");
        try {
            const response = await axios({
                method: "patch",
                url: `${host}/api/other/updateusernameabout/${token}`,
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
        const token  = GetCookie("auth-token");
        try {
            const response = await axios({
                method: "patch",
                url: `${host}/api/other/images/likeimg/${id}/${token}`,
            })
            console.log(response.data);
            getAllPhoto();
        } catch (error) {
            console.log(error);
        }
    }


    const getUserByEmail = async(email)=>{
        const token  = GetCookie("auth-token");
        try {
            const response = await axios({
                method: "get",
                url: `${host}/api/other/images/getuserbyemail/${email}/${token}`,
            })
            return response.data.userData;
        } catch (error) {
            console.log(error);
        }
    }


     //// getPhotosById -Api call-  FUNCTION -----------
     const [anyUserAllPhotos, setAnyUserAllPhotos] = useState([])
     const [Loading, setLoading] = useState(false)

    const getPhotosById = async(id)=>{
        const token  = GetCookie("auth-token");
        try {
            setLoading(true);
            const response = await axios({
                method: "get",
                url: `${host}/api/other/images/getphotosbyid/${id}/${token}`,
            })
            setAnyUserAllPhotos(response.data.userPhotos);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }
    return <OtherContext.Provider value={{updateDp, updateNameAbout,likePhoto, getUserByEmail, getPhotosById, anyUserAllPhotos, Loading}}>
        {props.children}
    </OtherContext.Provider>
}

export default OtherState;

