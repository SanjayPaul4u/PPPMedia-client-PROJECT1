import React from 'react'
import "../../styleFolder/User.css"
import Userprofile from './Userprofile'
import Userphotos from './Userphotos'



function User() {
  
  return (
    <div id='main-user-component'>
      <div id='user-component'className='container'>

        <div id='user-row' className="row">
          {/* FIRST ROW - USER PROFILE */}
          <div id='user-profile' className="com-4 col-md-4 col-xl-4">
            <div id='user-profile-fix-div' className='fixed-top'>
              <Userprofile/>                    
            </div>
          </div>


          {/* SECOND ROW - USER PHOTOS */}
          <div id='users-photos' className="com-8 col-md-8 col-xl-8">
            <Userphotos/>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default User