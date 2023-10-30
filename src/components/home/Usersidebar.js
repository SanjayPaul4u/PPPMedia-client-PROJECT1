import "../../styleFolder/Home.css"
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from "../../context/auth/authContext";
import dpDefaultImg from '../images/default.png'


function Usersidebar() {
  const auth_context = useContext(AuthContext);
  const {authUserData} = auth_context;
  return (
  <>{
    authUserData.name!==undefined && <div id='main-user-sidebar-div'>
        <Link to="/user">
            <img id='side-bar-dp' src={`${authUserData.dpFiles.length===0?dpDefaultImg:`data:${authUserData.dpFiles[0].fileType};base64,${authUserData.dpFiles[0].imagebase64}`}`} alt="dpError" />
        </Link>

        <Link to="/user" style={{textDecoration: "none"}}>
            <h3 id='sidebar-user-name'>{authUserData.name}</h3>
        </Link>
        <Link to="/user" style={{textDecoration: "none"}}>
            <p id="sidebar-user-about">{authUserData.about}</p>
        </Link>
        
        <hr />
        <Link to="/user" className="btn sidebar-buttons">Your All Uploaded Photos</Link>
        <hr />
        <Link to="/user" className="btn sidebar-buttons">Customize Your Profile</Link>

    </div>
    }
  </>
  )
}

export default Usersidebar