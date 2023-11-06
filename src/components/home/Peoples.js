import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import DefaultDpImg from '../images/default.png'
import { Link } from 'react-router-dom';
import FunctionContext from '../../context/functions/functionContext';



function Peoples() {
    const auth_context = useContext(AuthContext);
    const {allUserArr} = auth_context;
    const function_context = useContext(FunctionContext);
    const {UserDetailFunc} = function_context;
  return (
    <>
    {/* main-peoples-div */}
    <div id='main-peoples-div'>
        <h2 id='peoples-heading'>Peoples</h2>

        {/* carousel - start */}
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {allUserArr.length!==0 &&  allUserArr.map((e, index)=>{

                         return  <div key={e._id} className={`carousel-item ${index===0?"active":""}`} data-bs-interval="2000">
                                    <div className='d-flex justify-content-between align-items-center peoples-carousel-div'>
                                        <div className='d-flex'>
                                            {/* navigate to user page */}
                                            <Link to="/anyuser">
                                            <img src={`${e.dpFiles.length===0?DefaultDpImg:`data:${e.dpFiles[0].fileType};base64,${e.dpFiles[0].imagebase64}` }`} className="d-block peoples-carousel-img" alt="imgError" onClick={()=>{UserDetailFunc(e)}}/>
                                            </Link>

                                            <div id='carousel-user'>
                                                <h4>{e.name}</h4>
                                                <p>{e.about}</p>
                                            </div>
                                        </div>
                                        <div className='text-primary'>
                                        <Link to="/anyuser"  onClick={()=>{UserDetailFunc(e)}}>
                                            <i className="fa-solid fa-plus pe-1 text-primary"><br /></i>
                                            Follow
                                        </Link>                         
                                        </div>
                                    </div>              
                                </div>

                    })}

                    

                    

                              
                    


                </div>
                <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon carousel-btn" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon carousel-btn" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* carousel - end */}

    </div>


    {/* project-description */}
    <div id='project-description'>
        <h2 id='project-description-heading'>project-description*</h2>
        <ul className='mx-2'>
            <li className='my-2'>PPP Media is  my full stack(mern) website project.</li>
            <li className='my-2'>i got styling idia from "linkedIn" website for my project "PPP Media"</li>
            <li className='my-2'>i have done practice many tutorial of mern project and after that i make my own "full stack  social media mern project" (PPP Media) </li>
            
        </ul>
    </div>
    </>
  )
}

export default Peoples