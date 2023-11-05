import React, { useContext, useState } from 'react'
import "../styleFolder/Login.css"
import LoginImg from './images/log-in.png'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../context/auth/authContext'




function Login() {
  const a_context = useContext(AuthContext);
  const {LogIn} = a_context;
  const [userData, setUserData] = useState({email: "", password: ""})
  // use navigae for redirect
  const navigate = useNavigate();


  // ON CLICK LOGIN FUNCTION
  const onSubmitLoginFunc = async(event) =>{
    event.preventDefault();
    const loginData = await LogIn(userData);
    setUserData({email: "", password: ""});

    console.log(loginData);
    // redirect
    if(loginData.success===true){
      console.log("LoggedIn successfully");
      navigate("/home");
    }else{
      console.log("Invalid Credentials");
    }
  }

  // INPUT ON CHANGE FUNCTION
  const onChangeFunc = (event) =>{
    setUserData({...userData, [event.target.name]: event.target.value})
  }
  return (
    <div id='main-login-component' className='container'>
        <div id='login-component'>

            <div className="row">
                <div id="login-img-div" className="col-6 col-md-6 col-xl-6 text-center">
                  <img src={LoginImg} alt="imgError" />
                </div>
                <div id="login-form-div" className="col-6 col-md-6 col-xl-6">
                    <h1>Login In</h1>

                  {/* login form start*/}
                    <form onSubmit={onSubmitLoginFunc}>
                      <div className="mb-3 position-relative">

                        <label htmlFor="login-email-input" className="form-label position-absolute">
                          <i className="fa-solid fa-user"></i>
                        </label>
                        <input type="email" className="" id="login-email-input" aria-describedby="emailHelp" name='email' onChange={onChangeFunc} value={userData.email} autoComplete="user-email" placeholder='Your Email'/>

                      </div>
                      <div className="mb-3 position-relative">

                        <label htmlFor="login-password-input" className="form-label position-absolute">
                          <i className="fa-solid fa-lock"></i>
                        </label>
                        <input type="password" className="" id="login-password-input" name='password' onChange={onChangeFunc} value={userData.password} autoComplete="current-password" placeholder='Password' minLength={5} maxLength={15} required/>

                      </div>
                      <button type="submit" >Login</button>

                        <div>
                          <h6 className="my-2">If You Don't Have Account Then <Link to="/signup" role="button">SignUp</Link></h6>
                        </div>
                    </form>

                  {/* login form end*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login