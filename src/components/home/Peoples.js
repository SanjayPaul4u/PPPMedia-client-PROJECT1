import React from 'react'

function Peoples() {
  return (
    <>
    {/* main-peoples-div */}
    <div id='main-peoples-div'>
        <h2 id='peoples-heading'>Peoples</h2>

        {/* carousel - start */}
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    

                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className='d-flex justify-content-between align-items-center peoples-carousel-div'>
                            <div className='d-flex'>
                                <img src="https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg" className="d-block peoples-carousel-img" alt="imgError"/>
                                <div id='carousel-user'>
                                    <h4>sanjay paul</h4>
                                    <p>PPP Media</p>
                                </div>
                            </div>
                            <div className='text-primary'>
                                <i className="fa-solid fa-plus pe-1 text-primary"><br /></i>
                                Follow
                            </div>                            
                        </div>              
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='d-flex justify-content-between align-items-center peoples-carousel-div'>
                            <div className='d-flex'>
                                <img src="https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg" className="d-block peoples-carousel-img" alt="imgError"/>
                                <div id='carousel-user'>
                                    <h4>Raju SuTRAdhar</h4>
                                    <p>kjasdflkasd asdfa asdf a</p>
                                </div>
                            </div>
                            <div className='text-primary'>
                                <i className="fa-solid fa-plus pe-1 text-primary"><br /></i>
                                Follow
                            </div>                            
                        </div>              
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='d-flex justify-content-between align-items-center peoples-carousel-div'>
                            <div className='d-flex '>
                                <img src="https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg" className="d-block peoples-carousel-img" alt="imgError"/>
                                <div id='carousel-user'>
                                    <h4>Kali</h4>
                                    <p>asdfa sdfasdf</p>
                                </div>
                            </div>
                            <div className='text-primary'>
                                <i className="fa-solid fa-plus pe-1 text-primary"><br /></i>
                                Follow
                            </div>                            
                        </div>              
                    </div>

                    

                              
                    


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
        <h2 id='project-description-heading'>project-description***</h2>
        <ul className='mx-2'>
            <p>TODO styling</p>
            <li className='my-1'>PPP Media is  my full stack(mern) website project.</li>
            <li className='my-1'>i get styling idia from "linkedIn" website for my project "PPP Media"</li>
            <li className='my-1'>i have done practice many tutorial of mern project and after that i make my own "full stack  social media mern project" (PPP Media) </li>
            
        </ul>
    </div>
    </>
  )
}

export default Peoples