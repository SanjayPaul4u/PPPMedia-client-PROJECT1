import PhotoContext from "./photoContext"
import React, { useContext, useState } from "react";
import axios from 'axios';
import AlertContext from "../alert/alertContext";
import GetCookie from '../../hooks/getCookie'
import ProgressContext from "../progressCount/progressContext";


const PhotoState = (props)=>{
  // const host = "http://localhost:7000";
  const host = "https://api.pppmedia.online"
  const photoIntials = [];
  const userPhotosIntials = [];
  
  const [allPhotos, setAllPhotos] = useState(photoIntials);
  const [allPhotosImpObj, setAllPhotosImpObj] = useState({
    page: 1,
    contentSize: 1,
    totalResult:0
  });



  const [userPhotos, setUserPhotos] = useState(userPhotosIntials);
  const [allPhotoLoading, setAllPhotoLoading] = useState(false)
  const [userPhotoLoading, setUserPhotoLoading] = useState(false)


  const alert_context = useContext(AlertContext);
  const {showAlert} = alert_context;

  const progress_context = useContext(ProgressContext);
  const {SetProgress} = progress_context;

  
    //_________________________________________________________________________________
   
    // GET ALL USER PHOTO - FOR SHOWING HOME PAGE
    const getAllPhoto = async()=>{
      SetProgress(10);
      const token  = GetCookie("auth-token");
      try {
        setAllPhotoLoading(true);
        SetProgress(40);

        const response = await axios({
          method: "get",
          url: `${host}/api/upload/getallimages/${token}?page=1&contentSize=${allPhotosImpObj.contentSize}`
        })
        SetProgress(80);
        setAllPhotos(response.data.all_Images);
        setAllPhotoLoading(false);
        SetProgress(100);

        setAllPhotosImpObj({
          ...allPhotosImpObj,
          page: 1,
          totalResult: response.data.totalResult
        });
        return response.data;
        
      } catch (error) {
        console.log(error);
      }
    }
    // GET ALL USER PHOTO - By Infinite Scrolling 📌📌📌
    const getAllPhotoByScrolling = async()=>{
      const token  = GetCookie("auth-token");
      try {
        const response = await axios({
          method: "get",
          url: `${host}/api/upload/getallimages/${token}?page=${allPhotosImpObj.page+1}&contentSize=${allPhotosImpObj.contentSize}`
        })
        setAllPhotosImpObj({
          ...allPhotosImpObj,
          page: allPhotosImpObj.page+1
        });

        setAllPhotos(allPhotos.concat(response.data.all_Images));
        return response.data;
        
      } catch (error) {
        console.log(error);
      }
    }
    //_________________________________________________________________________________
   

    // GET SPECIFIC USER PHOTO
    const getUserPhotos = async () =>{
      SetProgress(10);
      const token  = GetCookie("auth-token");
      try {
        setUserPhotoLoading(true);
        SetProgress(40);

        const response = await axios({
          method:"get",
          url:`${host}/api/upload/getuserimages/${token}`
        })
        SetProgress(80);
        const user_data = await response.data.user_Images;
        // console.log(user_data);
        setUserPhotoLoading(false);
        setUserPhotos(user_data)
        SetProgress(100);
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



    return <PhotoContext.Provider value={{uploadPhoto, getAllPhoto, getAllPhotoByScrolling, allPhotosImpObj, allPhotos, getUserPhotos, userPhotos, allPhotoLoading, userPhotoLoading, deleteUserPhoto, updateUserPhotoTitle,}}>
        {props.children}
    </PhotoContext.Provider>
}
export default PhotoState;
