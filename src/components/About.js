import React, { useEffect } from 'react'
import "../styleFolder/About.css"
import { useNavigate } from 'react-router-dom';
import GetCookie from '../hooks/getCookie';


function About() {

  // use navigate hook
  const navigate = useNavigate();

  useEffect(() => {
    if(!GetCookie('auth-token')){
      navigate('/login');
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [])
  
  
  return (
    <div id='main-about-component'>
        <div id='about-component'  className='container'>
          <h1>What is PPP Media?</h1>
          <p>PPP Media - is a Social media application where you can hangout with other people, means you can watch photos of other people, you can like, comment on thier photo and you can also upload your photo - you can edit, delete your uploads."</p>

          <h1>Featurs of PPP Media?</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quasi.</li>
            <li>Lorem ipsum dolor sit amet.l</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, necessitatibus!</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, necessitatibus!</li>
          </ul>

          <h1>What Technology We Have Used?</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quasi.</li>
            <li>Lorem ipsum dolor sit amet.l</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, necessitatibus!</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, necessitatibus!</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
    
        </div>
    </div>
  )
}

export default About