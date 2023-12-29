import axios from "axios";
import AuthContext from "./authContext";
import React, { useContext, useState } from "react";
import RemoveCookie from "../../hooks/removeCookie";
import SetCookie from "../../hooks/setCookie";
import AlertContext from "../alert/alertContext";
// import PhotoContext from "../photos/photoContext";
import GetCookie from '../../hooks/getCookie'
import ProgressContext from "../progressCount/progressContext";




// ,{withCredentials: true} in axios request
const AuthState = (props)=>{
    // const host = "http://localhost:7000";
    const host = "https://api.pppmedia.online"

    // const photo_context = useContext(PhotoContext);
    // const {} = photo_context;
    
    const alert_context = useContext(AlertContext);
    const {showAlert} = alert_context;

    const progress_context = useContext(ProgressContext);
    const {SetProgress} = progress_context;


    // USER EMAIL STATE CREATE
    const [userEmail, setUserEmail] = useState("");
    const [emailLoading, setEmailLoading] = useState(false);
    const [allUserArr, setAllUserArr] = useState([]);
    const [authUserData, setAuthUserData] = useState({})

    // GETUSER API CALL - BY AXIOS 
    const getUser = async()=>{
        SetProgress(10);
        const token  = GetCookie("auth-token");

        try {
            setEmailLoading(true);
            SetProgress(40);
            const response = await axios({
                method: "get",
                url: `${host}/api/auth/getuser/${token}`
            })
            SetProgress(80);
            // console.log(response.data);
            setEmailLoading(false);
            setUserEmail(response.data.userData.email);
            setAuthUserData(response.data.userData) ;
            SetProgress(100);
        } catch (error) {
            console.log(error);
        }
    }
    // GETUSER API CALL - BY AXIOS 
    const getAllUser = async()=>{
        const token  = GetCookie("auth-token");
        
        try {
            const response = await axios({
                method: "get",
                url: `${host}/api/auth/getalluser/${token}`
            })
            setAllUserArr(response.data.allUserData);

        } catch (error) {
            console.log(error);
        }
    }

    // SIGNUP API CALL - BY AXIOS
    const SignUp = async(userData) =>{
        SetProgress(10);
        try {
            SetProgress(40);
            const response = await axios({
                method:"post",
                url:`${host}/api/auth/signup`,
                data:JSON.stringify(userData),
                headers:{
                    "Content-Type": "application/json" //important
                }
            })
            SetProgress(80);
            // console.log(response.data); 
            RemoveCookie('auth-token'); // first remove cookie
            SetCookie('auth-token', response.data.token) // then set cookie
            
            getUser(); 
            showAlert("success", "Account Created Successfully");
            SetProgress(100);      
            return response.data;   
        } catch (error) {
            console.log(error);
            if(error.response.data.message){
                showAlert("danger", error.response.data.message);                
            }else{
                showAlert("danger", "Account Creation Failed due to Invalid Credential");
            }
            return error;
        }
        
    }

    // LOGIN API CALL - BY AXIOS
    const LogIn = async (userData)=>{
        SetProgress(10);
        try {
            SetProgress(40);
            const response = await axios({
                method: "post",
                url:`${host}/api/auth/login`,
                data: JSON.stringify(userData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            SetProgress(80);
            // console.log(response.data.token);
            RemoveCookie('auth-token'); // first remove cookie
            SetCookie('auth-token', response.data.token) // then set cookie                       
            getUser();
            getAllUser();
            showAlert("success", "Loged In Successfully");
            SetProgress(100);
            return response.data;
        } catch (error) {
            console.log(error);
            showAlert("danger", "Login Failed due to Invalid Credential");
            return error;
        
        }
    }
    // LOGOUT API CALL - BY AXIOS
    const LogOut = async ()=>{
        SetProgress(10);
        const token  = GetCookie("auth-token");
        try {
            SetProgress(40);
            const response = await axios({
                method: "get",
                url:`${host}/api/auth/logout/${token}`,
            })
            SetProgress(80);
            console.log(response.data);
            showAlert("success", "LogOut Successfully");
            SetProgress(100);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        
        }
    }

    
    return <AuthContext.Provider value={{SignUp, LogIn, getUser, userEmail, setUserEmail, LogOut, emailLoading, getAllUser, allUserArr, authUserData}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;
