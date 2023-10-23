import React from 'react'
import "../../styleFolder/User.css"


function Userphotos() {
    
  return (
    <div id='main-user-photos'>
        {/* header */}
        <div>
            <h2 id='main-user-photos-heading'>Your All Photos</h2>
        </div>

        <div className="row">
            <div className="col-4 col-md-4 col-xl-4 my-2">
                {/* card */}
                <div className="card" style={{border:"none"}}>
                    <div className='card-body' id="user-photos-card-body">
                        <div id='title-div'>
                            <p className="user-photos-card-title">Card title Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div id="image-div">
                            <img src="https://cdn.pixabay.com/photo/2023/09/09/08/31/woman-8242672_1280.jpg" className="card-img-top" alt="imgErr"/>
                            <h6>Total like 2023</h6>
                            <h6>Total comment 500</h6>
                            <h6>Uploaded on 15 oct - 2023</h6>
                        </div>
                    </div>
                </div>
                 {/* card - end*/}
            </div>
        </div>
    </div>
  )
}

export default Userphotos