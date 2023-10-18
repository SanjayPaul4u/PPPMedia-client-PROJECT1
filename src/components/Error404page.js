import React from 'react'
import '../styleFolder/ErrorPage.css'
import ErrImg from './images/Error-404-image.png';
import { Link } from 'react-router-dom';


function Error404page() {
  return (
    <div  className='container' id='err-container'>
      {/* row div */}
      <div id='err-div' className='row  d-flex justify-content-center'>

          {/* first row */}
          <div id="img-row" className='col-10 col-md-6 col-xl-6'>
            <img id='err-img' src={ErrImg} alt="error" />
          </div>

          {/* second row */}
          <div id="btn-row" className='col-4 col-md-6 col-xl-6 d-flex flex-column justify-content-center'>
            <div style={{borderLeft:"0.5rem solid #8a9696", paddingLeft:"1rem"}}>
              <h2>SORRY!</h2>
              <p>The Page You are Looking for <br /> Was Not Found</p>
              <Link to="/home" id='gobackBtn' className="btn btn-sm btn-success">&larr; Go Back</Link>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Error404page