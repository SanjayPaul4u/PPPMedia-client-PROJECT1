import PhotoContext from "./photoContext"
import React, { useContext, useState } from "react";
import axios from 'axios';
import AlertContext from "../alert/alertContext";



const PhotoState = (props)=>{
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
      try {
        setAllPhotoLoading(true);

        const response = await axios({
          method: "get",
          url: "/api/upload/getallimages"
        })
        setAllPhotos(response.data.all_Images);
        setAllPhotoLoading(false);
        return response.data;
        
      } catch (error) {
        console.log(error.response.data);
      }
    }

    // GET SPECIFIC USER PHOTO
    const getUserPhotos = async () =>{
      try {
        setUserPhotoLoading(true);
        const response = await axios({
          method:"get",
          url:"/api/upload/getuserimages"
        })
        const user_data = await response.data.user_Images;
        // console.log(user_data);
        setUserPhotoLoading(false);
        setUserPhotos(user_data)
        return response.data
      } catch (error) {
        console.log(error.response.data);
      }
    }
    

    // UPLOAD USER PHOTO
    const uploadPhoto = async(data)=>{
      // console.log(...data);
          try {
              const response = await axios({
                method: "post",
                url: "/api/upload/uploadimg",
                data: data
              })
              console.log(response.data);
              getUserPhotos();
              getAllPhoto();
              showAlert("success", "Uloaded Photo Successfully");
            } catch (error) {
              console.log(error.response.data);
              showAlert("danger", "Failed To Upload Photo");
            }
  }

  // DELETE USER PHOTO
  const deleteUserPhoto = async (id) =>{
    try {
      const response = await axios({
        method: "delete",
        url: `/api/upload/getuserimages/deleteuserimg/${id}`      
      })
      console.log(response.data);
      getUserPhotos();
      getAllPhoto();
      showAlert("success", "Deleted Photo Successfully");
    } catch (error) {
      console.log(error.response.data);
      showAlert("danger", "Failed To Delete Photo");
    }
  }


    return <PhotoContext.Provider value={{uploadPhoto, getAllPhoto, allPhotos, getUserPhotos, userPhotos, allPhotoLoading, userPhotoLoading, deleteUserPhoto}}>
        {props.children}
    </PhotoContext.Provider>
}
export default PhotoState;