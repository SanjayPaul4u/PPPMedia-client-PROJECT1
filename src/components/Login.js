import React from 'react'
import "../styleFolder/Login.css"
import LoginImg from './images/log-in.png'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div id='main-login-component' className='container'>
        <div id='login-component'>
            <h1 id='login-header'>Login To Use PPP Media</h1>
            <hr />

            <div className="row">
                <div id="login-img-div" className="col-6 col-md-6 col-xl-6 text-center">
                  <img src={LoginImg} alt="imgError" />
                </div>
                <div id="login-form-div" className="col-6 col-md-6 col-xl-6">
                  {/* login form start*/}

                    <form>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password'/>
                      </div>
                      <button type="submit" className="btn btn-primary">Login</button>

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