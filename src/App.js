import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/About';
import Help from './components/Help';
import Error404page from './components/Error404page';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
// import Footer from './components/Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'



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
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/help' element={<Help/>}/>
            <Route exact path='/user' element={<User/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/*' element={<Error404page/>}/>
            
        </Routes>
        {/* <Footer/> */}

    </BrowserRouter>
    </>
  );
}

export default App;
