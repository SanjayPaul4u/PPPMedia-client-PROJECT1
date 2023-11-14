import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import '../styleFolder/Navbar.css'
import socialMediaImg from './images/letter.png'
import AuthContext from '../context/auth/authContext';
import GetCookie from '../hooks/getCookie';
import RemoveCookie from '../hooks/removeCookie';


function Navbar() {
    const a_context = useContext(AuthContext);
    const {getUser, userEmail, setUserEmail, LogOut, emailLoading} = a_context;

    const location = useLocation();
    const [path, setPath] = useState(location.pathname);

    const close_responsive_nav_ref = useRef();


    // USE NAVIGATE
    const navigate = useNavigate();

    useEffect(() => {
        setPath(location.pathname);
        if(GetCookie("auth-token")){
            getUser();
        }else{
            setUserEmail("");
        }
        // eslint-disable-next-line
    }, [location])
    // console.log(path);

    // ON CLICK LOGOUT FUNCTION
    const onClickLogoutFunc = ()=>{
        LogOut();
        closeRespnsiveNavFunc();
        console.log("logout");
        setUserEmail("");
        RemoveCookie("auth-token");
        navigate('/login');
     }

    // Close Respnsive Navbar
    const closeRespnsiveNavFunc =()=>{
        if(window.innerWidth < 992){
            close_responsive_nav_ref.current.click();
        }
    }

    // ADDED STYLE
    let myStyle = {color : "red",};
    if(window.innerWidth > 992){ // for responsive navbar
      myStyle = {
        color : "#515151",
        fontWeight:"bold",
        borderBottom: "0.2rem solid #515151",
        marginBottom:"-5rem",
        // transition: "all 0.5s"
        }
    }
  return (
    <div >
        <nav id='mainNavbar'  className="container navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarContainer">
            <   img id='nav-img'  src={socialMediaImg} alt="error" />
                <Link className="navbar-brand" to="/">
                PP Media
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span ref={close_responsive_nav_ref} className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    
                    {!GetCookie("auth-token")?
                        <>
                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/login"?myStyle:{}} aria-current="page" to="/login" onClick={closeRespnsiveNavFunc} >Login</Link>
                        </li>      

                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/signup"?myStyle:{}} aria-current="page" to="/signup" onClick={closeRespnsiveNavFunc}>Signup</Link>
                        </li>
                        </>:

                        <>
                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==='/home'|| path==='/'?myStyle:{}}  aria-current="page" to="/home" onClick={closeRespnsiveNavFunc}>Home</Link>
                        </li>    

                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/user"?myStyle:{}} aria-current="page" to="/user" onClick={closeRespnsiveNavFunc}>User</Link>
                        </li>     

                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/about"?myStyle:{}} aria-current="page" to="/about" onClick={closeRespnsiveNavFunc}>About</Link>
                        </li>  
                        <button className="btn btn-danger btn-sm" onClick={onClickLogoutFunc}>LogOut</button>
                        </>
                    }
                </ul>
                <form className="d-flex">
                    <Link onClick={closeRespnsiveNavFunc} className="nav-link mx-1" aria-current="page" to="/user">{emailLoading && userEmail===""? "Loading...":userEmail}  </Link>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar