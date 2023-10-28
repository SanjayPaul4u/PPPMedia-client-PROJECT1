import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/About';
import Error404page from './components/Error404page';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/user/User';
// import Footer from './components/Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PhotoState from './context/photos/photoState';
import AuthState from './context/auth/authState';
import AlertState from './context/alert/alertState';
import Alert from './components/alerts/Alert';







/*
<Home/>
    <About/>
    <Help/>
    <User/>
    <Login/>
    <Signup/>
    <Error404page/>
*/

function App() {
  
  return (
    <>
    <AlertState>
    <AuthState>
    <PhotoState>
    <BrowserRouter>
      <Navbar/>
      <Alert/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/user' element={<User/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/*' element={<Error404page/>}/>
            
        </Routes>
        {/* <Footer/> */}

    </BrowserRouter>
    </PhotoState>
    </AuthState>
    </AlertState>
    </>
  );
}

export default App;
