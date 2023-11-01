import React, { useContext } from 'react'
import FunctionContext from '../../context/functions/functionContext';
import AuthContext from '../../context/auth/authContext';
import PeoplesofLike from './PeoplesofLike';


function Likes(props) {
    const function_context = useContext(FunctionContext);
    const {mainLikeFunc, onclickLikeNumber} = function_context;
    const auth_context = useContext(AuthContext);
    const {userEmail} = auth_context;

    // ON CLICK LIKE FUNCION
    const onClickLickFunc = ()=>{
        mainLikeFunc(props.element._id);
    }
    return (
        <>
        <div className='mt-2 d-flex justify-content-between'>
            <div className='d-flex justify-content-between'>

            {/*------- main Logic ------  */}
            <i className={`fa-regular fa-thumbs-up`} onClick={onClickLickFunc}></i>
            {props.element.likes.map((e)=>{
                if(e===userEmail){
                    return <i key={e} id='solid-liked-icon' className={`fa-solid fa-thumbs-up`} onClick={onClickLickFunc}></i>
                }else{
                    return "";
                }
            })}
                <a id='totalLike' href="###" className='mx-2'onClick={onclickLikeNumber}>
                    {props.element.likes.length}
                </a>
            </div>
            <h5>Comments</h5>
        </div>
        <PeoplesofLike/>        
        </>
      )
}

export default Likes