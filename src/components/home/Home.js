import React, { useEffect } from 'react'
import  '../../styleFolder/Home.css'
import Uploads from './Uploads'
import Usersidebar from './Usersidebar'
import Peoples from './Peoples'



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div id='homeDiv' className='container'>
      {/* row */}
        <div className="row d-flex justify-content-between">
          {/* 1st rows -  */}
          <div className='home-rows col-4 col-md-6 col-xl-4 ' id="homeRow1" >
            <div className='' id='sidebar1'>  {/* fix top change */}
              <Peoples/>
            </div>
          </div>


          {/* 2nd row - ALL UPLOADED PHOTO */}
          <div className='mx-auto home-rows col-12 col-md-6 col-xl-6 ' id="homeRow2"> 
             <Uploads/>
          </div>

          
          {/* 3rd row - USER SIDE BAR */}
          <div className='bd-sidebar home-rows col-2 col-md-2 col-xl-2 ' id="homeRow3"> 
          <div className='' id='sidebar2'> {/* fix top change */}
              <Usersidebar/>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Home