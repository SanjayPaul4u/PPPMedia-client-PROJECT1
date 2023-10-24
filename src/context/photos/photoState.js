import PhotoContext from "./photoContext"
import React, { useState } from "react"; // axios - This line is very important for 'axios'
import axios from 'axios'; // axios - Above line is very important for 'axios'
// "proxy":"http://localhost:4000", in package.json file
// const port = process.env.PORT || 7000;


const PhotoState = (props)=>{
  const photoIntials = [];
  const [allPhotos, setAllPhotos] = useState(photoIntials);

    const uploadPhoto = async(data)=>{
        // console.log(...data);
            try {
                const response = await axios({
                  method: "post",
                  url: "/api/upload/uploadimg",
                  data: data,
                  headers: {
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZjNjZjI5Zjg4ODI3ODI4ZjQ3ZGNiIn0sImlhdCI6MTY5ODA1NTQ3OH0.9N7nZYqdvG6YV4X793TZDF6gyh8jUjv3oDsmOh0LVI4'},
                })
                console.log(response.data);

              } catch (error) {
                console.log(error.response.data);;
              }
    }

    const getAllPhoto = async()=>{
      try {
        const response = await axios({
          method: "get",
          url: "/api/upload/getallimages",
          headers:{
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNzVmM2QzMWIzZDE2NDQ4MTFlYTM0In0sImlhdCI6MTY5ODEyNzY4NX0.oR3xGc1DYEFLyHzl_i9yZwTiRes-faw8OmAZmffd7Eg"
          }
        })

        setAllPhotos(response.data.all_Images);
        return response.data;
        
      } catch (error) {
        console.log(error.response.data);
      }
    }
    


    return <PhotoContext.Provider value={{uploadPhoto, getAllPhoto, allPhotos}}>
        {props.children}
    </PhotoContext.Provider>
}
export default PhotoState;