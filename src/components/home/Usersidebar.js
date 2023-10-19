import "../../styleFolder/Home.css"
import React from 'react'

function Usersidebar() {
  return (
    <div id='main-user-sidebar-div'>
        <a href="/setlink">
            <img id='side-bar-dp' src="https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg" alt="dpError" />
        </a>

        <a href="/setlink" style={{textDecoration: "none"}}>
            <h3 id='sidebar-user-name'>sanjay paul</h3>
        </a>
        <a href="/setlink" style={{textDecoration: "none"}}>
            <p id="sidebar-user-about">this is about section || set this section</p>
        </a>
        
        <hr />
        <a href="/setlink" className="btn sidebar-buttons">Your All Uploaded Photos</a>
        <hr />
        <a href="/setlink" className="btn sidebar-buttons">Customize Your Profile</a>

    </div>
  )
}

export default Usersidebar