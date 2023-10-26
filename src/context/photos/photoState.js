import PhotoContext from "./photoContext"
import React, { useState } from "react";
import axios from 'axios';


const PhotoState = (props)=>{
  const photoIntials = [];
  const userPhotosIntials = [];

  const [allPhotos, setAllPhotos] = useState(photoIntials);
  const [userPhotos, setUserPhotos] = useState(userPhotosIntials);

   
    // GET ALL USER PHOTO - FOR SHOWING HOME PAGE
    const getAllPhoto = async()=>{
      try {
        const response = await axios({
          method: "get",
          url: "/api/upload/getallimages"
        })

        setAllPhotos(response.data.all_Images);
        return response.data;
        
      } catch (error) {
        console.log(error.response.data);
      }
    }

    // GET SPECIFIC USER PHOTO
    const getUserPhotos = async () =>{
      try {
        const response = await axios({
          method:"get",
          url:"/api/upload/getuserimages"
        })
        const user_data = await response.data.user_Images;
        // console.log(user_data);
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

            } catch (error) {
              console.log(error.response.data);;
            }
  }


    return <PhotoContext.Provider value={{uploadPhoto, getAllPhoto, allPhotos, getUserPhotos, userPhotos}}>
        {props.children}
    </PhotoContext.Provider>
}
export default PhotoState;