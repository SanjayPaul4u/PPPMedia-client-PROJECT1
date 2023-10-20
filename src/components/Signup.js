import React from 'react'
import "../styleFolder/Signup.css"
import {Link} from 'react-router-dom'

function Signup() {
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
                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name='name'/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputAge1" className="form-label">Age</label>
                        <input type="Number" className="form-control" id="exampleInputAge1" aria-describedby="ageHelp" name='age'/>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password'/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" name='confirmPassword'/>
                      </div>

                      <button type="submit" className="btn btn-primary">SignUp/ Create Account</button>

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