import PhotoContext from "./photoContext"
import React, { useContext, useState } from "react";
import axios from 'axios';
import AlertContext from "../alert/alertContext";
import GetCookie from '../../hooks/getCookie'



const PhotoState = (props)=>{
  const host = "http://localhost:7000";
  const photoIntials = [];
  const userPhotosIntials = [];

  const [allPhotos, setAllPhotos] = useState(photoIntials);
  const [userPhotos, setUserPhotos] = useState(userPhotosIntials);
  const [allPhotoLoading, setAllPhotoLoading] = useState(false)
  const [userPhotoLoading, setUserPhotoLoading] = useState(false)


  const alert_context = useContext(AlertContext);
  const {showAlert} = alert_context;
  

   
    // GET ALL USER PHOTO - FOR SHOWING HOME PAGE
    const getAllPhoto = async()=>{
      const token  = GetCookie("auth-token");
      try {
        setAllPhotoLoading(true);

        const response = await axios({
          method: "get",
          url: `${host}/api/upload/getallimages/${token}`
        })
        setAllPhotos(response.data.all_Images);
        setAllPhotoLoading(false);
        return response.data;
        
      } catch (error) {
        console.log(error);
      }
    }

    // GET SPECIFIC USER PHOTO
    const getUserPhotos = async () =>{
      const token  = GetCookie("auth-token");
      try {
        setUserPhotoLoading(true);
        const response = await axios({
          method:"get",
          url:`${host}/api/upload/getuserimages/${token}`
        })
        const user_data = await response.data.user_Images;
        // console.log(user_data);
        setUserPhotoLoading(false);
        setUserPhotos(user_data)
        return response.data
      } catch (error) {
        console.log(error);
      }
    }
    

    // UPLOAD USER PHOTO
    const uploadPhoto = async(data)=>{
      const token  = GetCookie("auth-token");
      console.log(...data);
          try {
              const response = await axios({
                method: "post",
                url: `${host}/api/upload/uploadimg/${token}`,
                data: data
              })
              console.log(response.data);
              getUserPhotos();
              getAllPhoto();
              showAlert("success", "Uloaded Photo Successfully");
            } catch (error) {
              console.log(error);
              showAlert("danger", "Failed To Upload Photo");
            }
  }

  // DELETE USER PHOTO
  const deleteUserPhoto = async (id) =>{
    const token  = GetCookie("auth-token");
    try {
      const response = await axios({
        method: "delete",
        url: `${host}/api/upload/getuserimages/deleteuserimg/${id}/${token}`      
      })
      console.log(response.data);
      getUserPhotos();
      getAllPhoto();
      showAlert("success", "Deleted Photo Successfully");
    } catch (error) {
      console.log(error);
      showAlert("danger", "Failed To Delete Photo");
    }
  }


  // UPDATE USER PHOTO'S TITLE
  const updateUserPhotoTitle = async (id, title) =>{
    const token  = GetCookie("auth-token");
    try {
      const response = await axios({
        method: "patch",
        url: `${host}/api/upload/getuserimages/updateuserimg/${id}/${token}`,
        data : {title: title},
        headers:{
          "Content-Type":"application/json"
        }      
      })
      console.log(response.data);
      getUserPhotos();
      getAllPhoto();
      showAlert("success", "Updated title Successfully");
    } catch (error) {
      console.log(error);
      showAlert("danger", "Failed To Update Title");
    }
  }



    return <PhotoContext.Provider value={{uploadPhoto, getAllPhoto, allPhotos, getUserPhotos, userPhotos, allPhotoLoading, userPhotoLoading, deleteUserPhoto, updateUserPhotoTitle,}}>
        {props.children}
    </PhotoContext.Provider>
}
export default PhotoState;