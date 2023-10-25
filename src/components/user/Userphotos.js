import React, { useContext, useEffect } from 'react'
import "../../styleFolder/User.css"
import PhotoContext from '../../context/photos/photoContext'



function Userphotos() {
    const p_context = useContext(PhotoContext);
    const {getUserPhotos, userPhotos} = p_context;
    
    useEffect(() => {
      getUserPhotos();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div id='main-user-photos'>
        {/* header */}
        <div>
            <h2 id='main-user-photos-heading'>Your All Photos</h2>
        </div>

        <div className="row">    

            {userPhotos.length===0 && <p>No Photos Uploaded</p>}
            {userPhotos.map((element)=>{

                return <div key={element._id} className="col-4 col-md-4 col-xl-4 my-2">
                {/* card */}
                <div className="card" style={{border:"none"}}>
                    <div className='card-body' id="user-photos-card-body">
                        <div id='title-div'>
                            <p className="user-photos-card-title">{element.title}</p>
                        </div>
                        <div id="image-div">

                            {element.files.length===0 && <h6>No Uploaded Photo to Display</h6>}
                            {element.files.map((element)=>{
                                return<img key={element.filePath} src={`data:${element.fileType};base64,${element.imagebase64}`} className="card-img-top" alt="imgErr"/>                            
                            })}

                            <h6>Total like 2023</h6>
                            <h6>Total comment 500</h6>
                            <h6>Uploaded on 15 oct - 2023</h6>
                        </div>
                    </div>
                </div>
                 {/* card - end*/}
            </div>
            
            })}

        </div>
    </div>
  )
}

export default Userphotos