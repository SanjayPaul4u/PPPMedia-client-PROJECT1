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
          <h1>What is PPP Media? </h1>
          <p>PPP Media - is a Social media application where you can hangout with other people, means you can watch photos of other people, you can like, comment on thier photo and you can also upload your photo - you can edit, delete your uploads."</p>

          <h1>Featurs of PPP Media?</h1>
            <div id='about-feature-content'>
                My web application is like socialmedia application. <br />
                1. Upload your Photos with Title.	<br />
                2. Upload your Dp <br />
                3. Update your Name and About section<br />
                4. Customizing your Profile properly<br />
                5. You can Delete your Photo<br />
                6. You can Update your title<br />

                7. Watching other people's photo<br />
                8. You can Like other people's photo<br />
                9. You can watch other people's Profile :
                      - how many photo they are uploaded,
                      - how much like they are got<br />
                10. showing alert <br />
                11. Login feature<br />
                12. Signup feature<br />
                13. Proper Authentication<br />
            </div>

          <h1>What Technology We Have Used?</h1>
            <div id='about-technologies-content'>
             <h5 className='mt-4'>(i) FRONTEND</h5> 
              1. React JS<br />
                - Function Base Component,
                - React Router,
                - React Hooks,
                - Api Calling by Axios,
                - Props,
                - React-Top-Loading-Bar,
                - etc<br />
              2. Bootstrap<br />
              3. Fontawesome<br />
              4. Html<br />
              5. CSS<br />
              6. JavaScript<br />
              7. Google Font<br />
              8. js-cookie<br />

              <h5 className='mt-4'>(ii) BACKEND</h5> 
              1. Node JS<br />
              2. Express JS<br />
              3. MongoDB<br />
                - Full CRUD Operation<br />
              4. Mongoose<br />
                - Connection create,
                - Mongoose Schema,
                - Mongoose Model,
                - Mongoose Queries<br />
              5. NPM packages<br />
              6. REST Api create<br />
              7. Password hashing use Bcrypt JS (npm)<br />
              8. Token Create using JWT (jsonwebtoken, npm)<br />
              9. Cookie<br />
              10. .DOTENV environment variable<br />


              <h5 className='mt-4'>(iii)  DEPLOYMENT (Hosting)</h5> 
              1. Hostinger VPS Server<br />
              2. Used Nginx<br />

              <h5 className='mt-4'>(iii)  OTHERS</h5> 
              1. GitHub<br />
              2. MongoDB Compass<br />
              3. PostMan<br />

            </div>
        </div>
    </div>
  )
}

export default About