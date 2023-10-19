import React from 'react'
import  '../../styleFolder/Home.css'
import Uploads from './Uploads'
import Usersidebar from './Usersidebar'
import Peoples from './Peoples'



function Home() {
  return (
    <div id='homeDiv' className='container'>
      {/* row */}
        <div className="row d-flex justify-content-between">
          {/* 1st rows -  */}
          <div className='home-rows col-4 col-md-4 col-xl-4 ' id="homeRow1" >
            <div className='fixed-top' id='sidebar1'>
              <Peoples/>
            </div>
          </div>


          {/* 2nd row - ALL UPLOADED PHOTO */}
          <div className='mx-auto home-rows col-6 col-md-6 col-xl-6 ' id="homeRow2"> 
             <Uploads/>
          </div>

          
          {/* 3rd row - USER SIDE BAR */}
          <div className='bd-sidebar home-rows col-2 col-md-2 col-xl-2 ' id="homeRow3"> 
          <div className='fixed-top' id='sidebar2'>
              <Usersidebar/>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Home