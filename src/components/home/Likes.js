import React, { useContext } from 'react'
import PhotoContext from '../../context/photos/photoContext'
import FunctionContext from '../../context/functions/functionContext';


function Likes(props) {
    const function_context = useContext(FunctionContext);
    const {mainLikeFunc} = function_context;
    const photo_context = useContext(PhotoContext);
    const {allPhotos} = photo_context;

    // console.log(allPhotos);
    return (
        <>
        <div className='mt-2 d-flex justify-content-between'>
            <div className='d-flex justify-content-between'>
                <h5 onClick={()=>{mainLikeFunc(props.element._id)}}>Like</h5>

                <a href="###" className='mx-2' style={{textDecoration:"none"}}>
                    {props.element.likes.length}
                </a>
            </div>
            <h5>Comments</h5>
        </div>
        
        </>
      )
}

export default Likes