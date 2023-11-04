import React, { useContext, useState } from 'react'
import "../styleFolder/Signup.css"
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../context/auth/authContext'


function Signup() {
  // navigate for redirect
  const navigate = useNavigate();

  const a_context = useContext(AuthContext);
  const {SignUp} = a_context;
  const [userData, setUserData] = useState({    
      name: "",
      email:"",
      age: "",
      password:"",
      confirmPassword: ""  
  })

  // ONCLICK Create User FUNCTION
  const onclickCreateUserFunc = async(event)=>{
    event.preventDefault()
    const signupData = await SignUp(userData);
    setUserData({name: "",email:"",age: "",password:"",confirmPassword: ""});

    // redirect
    // console.log(signupData.success);
    if(signupData.success===true){
      console.log("Account Created successfully");
      navigate("/home");
    }else{
      console.log("Invalid Credentials");
    }
  }
  // ALL INPUT ONCHANGE FUNCTION
  const onChangeFunc = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }
  return (
    <div id='main-signup-component' className='container'>
        <div id='signup-component'>
                  {/* login form start*/}
                  <div id='signup-form-div'>
                    <h1 id='signup-header'>Sign Up</h1>
                    <h6 id='signup-header-h6'>Create Account To Use PPP Media *</h6>
                    <form>

                      <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputName123" className="form-label position-absolute">
                          <i className="fa-solid fa-user"></i>
                        </label>
                        <input type="text"  id="exampleInputName123" aria-describedby="nameHelp" name='name' onChange={onChangeFunc} value={userData.name} autoComplete="username" placeholder='Your Name'/>
                      </div>

                      <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputEmail1" className="form-label position-absolute">
                          <i className="fa-solid fa-envelope"></i>
                        </label>
                        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChangeFunc} value={userData.email} autoComplete="useremail" placeholder='Your Email'/>
                      </div>

                      <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputAge1" className="form-label position-absolute">
                          <i className="fa-solid fa-hourglass-start"></i>
                        </label>
                        <input type="Number" id="exampleInputAge1" aria-describedby="ageHelp" name='age' onChange={onChangeFunc} value={userData.age} placeholder='Your Age'/>
                      </div>
                      
                      <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputPassword1" className="form-label position-absolute">
                            <i className="fa-solid fa-key"></i>
                        </label>
                        <input type="password" id="exampleInputPassword1" name='password' onChange={onChangeFunc} value={userData.password} autoComplete="new-password" placeholder='Set Password'/>
                      </div>

                      <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputConfirmPassword1" className="form-label position-absolute">
                          <i className="fa-solid fa-key"></i>
                        </label>
                        <input type="password" id="exampleInputConfirmPassword1" name='confirmPassword' onChange={onChangeFunc} value={userData.confirmPassword} autoComplete="new-password" placeholder='Confirm - Password'/>
                      </div>

                      <button  onClick={onclickCreateUserFunc}>Submit</button>

                        <div>
                          <h6 id='signup-footer-h6' className="my-2">Have You Already Account? Click <Link to="/login" role="button">LogIn</Link></h6>
                        </div>
                    </form>
                  </div>
                  {/* login form end*/}
               
        </div>
    </div>
  )
}

export default Signup