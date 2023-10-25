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
            <h1 id='signup-header'>Create Account To Use PPP Media</h1>
            {/* <hr /> */}
                  {/* login form start*/}
                  <div id='signup-form-div'>
                    <form>

                      <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name='name' onChange={onChangeFunc} value={userData.name}/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChangeFunc} value={userData.email}/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputAge1" className="form-label">Age</label>
                        <input type="Number" className="form-control" id="exampleInputAge1" aria-describedby="ageHelp" name='age' onChange={onChangeFunc} value={userData.age}/>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChangeFunc} value={userData.password}/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" name='confirmPassword' onChange={onChangeFunc} value={userData.confirmPassword}/>
                      </div>

                      <button className="btn btn-primary" onClick={onclickCreateUserFunc}>SignUp/ Create Account</button>

                        <div>
                          <h6 className="my-2">Have You Already Account? Click <Link to="/login" role="button">LogIn</Link></h6>
                        </div>
                    </form>
                  </div>
                  {/* login form end*/}
               
        </div>
    </div>
  )
}

export default Signup