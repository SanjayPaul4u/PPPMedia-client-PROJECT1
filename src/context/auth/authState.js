import axios from "axios";
import AuthContext from "./authContext";
import React, { useContext, useState } from "react";
import RemoveCookie from "../../hooks/removeCookie";
import SetCookie from "../../hooks/setCookie";
import AlertContext from "../alert/alertContext";


const AuthState = (props)=>{
    const alert_context = useContext(AlertContext);
    const {showAlert} = alert_context;


    // USER EMAIL STATE CREATE
    const [userEmail, setUserEmail] = useState("");

    // GETUSER API CALL - BY AXIOS 
    const getUser = async()=>{
        try {
            const response = await axios({
                method: "get",
                url: "/api/auth/getuser"
            })
            // console.log(response.data);
            setUserEmail(response.data.userData.email);                   
        } catch (error) {
            console.log(error.response.data);
        }
    }

    // SIGNUP API CALL - BY AXIOS
    const SignUp = async(userData) =>{
        try {
            const response = await axios({
                method:"post",
                url:"/api/auth/signup",
                data:JSON.stringify(userData),
                headers:{
                    "Content-Type": "application/json" //important
                },
            })
            // console.log(response.data); 
            RemoveCookie('auth-token'); // first remove cookie
            SetCookie('auth-token', response.data.token) // then set cookie
            
            getUser(); 
            showAlert("success", "Account Created Successfully");
            return response.data;         
        } catch (error) {
            console.log(error.response.data);
            showAlert("danger", "Account Creation Failed due to Invalid Credential");
            return error.response.data;
        }
        
    }

    // LOGIN API CALL - BY AXIOS
    const LogIn = async (userData)=>{
        try {
            const response = await axios({
                method: "post",
                url:"/api/auth/login",
                data: JSON.stringify(userData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            // console.log(response.data.token);
            RemoveCookie('auth-token'); // first remove cookie
            SetCookie('auth-token', response.data.token) // then set cookie                       
            getUser();
            showAlert("success", "Loged In Successfully");
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            showAlert("danger", "Login Failed due to Invalid Credential");
            return error.response.data;
        
        }
    }
    // LOGOUT API CALL - BY AXIOS
    const LogOut = async ()=>{
        try {
            const response = await axios({
                method: "get",
                url:"/api/auth/logout",
            })
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return error.response.data;
        
        }
    }

    
    return <AuthContext.Provider value={{SignUp, LogIn, getUser, userEmail, setUserEmail, LogOut}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;