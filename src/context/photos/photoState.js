import PhotoContext from "./photoContext"
import React from "react"; // axios - This line is very important for 'axios'
import axios from 'axios'; // axios - Above line is very important for 'axios'


const PhotoState = (props)=>{

    const uploadPhoto = async(data)=>{
        console.log(...data);
            try {
                await axios({
                  method: "post",
                  url: "http://127.0.0.1:7000/api/upload/uploadimg",
                  data: data,
                  headers: {
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZjNjZjI5Zjg4ODI3ODI4ZjQ3ZGNiIn0sImlhdCI6MTY5ODA1NTQ3OH0.9N7nZYqdvG6YV4X793TZDF6gyh8jUjv3oDsmOh0LVI4'},
                }).then(()=>{
                  console.log('successfully uploaded File******************')
                })
              } catch (error) {
                throw error;
              }
    }
    


    return <PhotoContext.Provider value={{uploadPhoto}}>
        {props.children}
    </PhotoContext.Provider>
}
export default PhotoState;