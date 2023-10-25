import "../../styleFolder/Home.css"
import React from 'react'
import {Link} from 'react-router-dom'

function Usersidebar() {
  return (
    <div id='main-user-sidebar-div'>
        <Link to="/user">
            <img id='side-bar-dp' src="https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg" alt="dpError" />
        </Link>

        <Link to="/user" style={{textDecoration: "none"}}>
            <h3 id='sidebar-user-name'>sanjay paul</h3>
        </Link>
        <Link to="/user" style={{textDecoration: "none"}}>
            <p id="sidebar-user-about">this is about section || set this section</p>
        </Link>
        
        <hr />
        <Link to="/user" className="btn sidebar-buttons">Your All Uploaded Photos</Link>
        <hr />
        <Link to="/user" className="btn sidebar-buttons">Customize Your Profile</Link>

    </div>
  )
}

export default Usersidebar