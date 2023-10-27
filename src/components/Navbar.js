import React, { useContext, useEffect, useState } from 'react'
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
    const [path, setPath] = useState(location.pathname)

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
        console.log("logout");
        setUserEmail("");
        RemoveCookie("auth-token");
        navigate('/login')
     }

   
    
const myStyle = {
    color : "#515151",
    fontWeight:"bold",
    borderBottom: "0.2rem solid #515151",
    marginBottom:"-5rem",
    // transition: "all 0.5s"
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
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    
                    {!GetCookie("auth-token")?
                        <>
                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/login"?myStyle:{}} aria-current="page" to="/login">Login</Link>
                        </li>      

                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/signup"?myStyle:{}} aria-current="page" to="/signup">Signup</Link>
                        </li>
                        </>:

                        <>
                        <li className="nav-item">
                        <Link className="nav-link active mx-1" style={path==='/home'|| path==='/'?myStyle:{}}  aria-current="page" to="/home">Home</Link>
                        </li>    

                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/user"?myStyle:{}} aria-current="page" to="/user">User</Link>
                        </li>     

                        <li className="nav-item">
                        <Link className="nav-link mx-1" style={path==="/about"?myStyle:{}} aria-current="page" to="/about">About</Link>
                        </li>  
                        <button className="btn btn-danger btn-sm" onClick={onClickLogoutFunc}>LogOut</button>
                        </>
                    }
                </ul>
                <form className="d-flex">
                    <Link className="nav-link mx-1" aria-current="page" to="/user">{emailLoading?"Loading...":userEmail}</Link>

                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar