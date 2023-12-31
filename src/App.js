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
import UpdateModal from './components/user/UpdateModal';
import FunctionState from './context/functions/functionState';
import DpUpdateModal from './components/user/DpUpdateModal';
import OtherState from './context/others_api_call/otherState';
import NameAndAboutUpdateModal from './components/user/NameAndAboutUpdateModal';
import PeoplesofLikeModal from './components/home/PeoplesofLikeModal';
import MainAnyUser from './components/anyuser/MainAnyUser';
import ProgressState from './context/progressCount/progressState';
import Toploadingbar from './components/Toploadingbar';



function App() {
  
  return (
    <>
    <ProgressState>
    <AlertState>
    <PhotoState>
    <AuthState>
    <OtherState>
    <FunctionState>
    <BrowserRouter>
      <UpdateModal/>
      <DpUpdateModal/>
      <PeoplesofLikeModal/>
      <NameAndAboutUpdateModal/>
      <Navbar/>
      <Toploadingbar/>
      <Alert/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/user' element={<User/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/anyuser' element={<MainAnyUser/>}/>
            <Route exact path='/*' element={<Error404page/>}/>
            
        </Routes>
        {/* <Footer/> */}

    </BrowserRouter>
    </FunctionState>
    </OtherState>
    </AuthState>
    </PhotoState>
    </AlertState>
    </ProgressState>
    </>
  );
}

export default App;
