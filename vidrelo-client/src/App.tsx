import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';
import MyProfile from './pages/myprofile/MyProfile';



function App() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Signin/>}/>
            <Route path="/Perfil" element={<MyProfile/>}/>
        </Routes>
    </Router>
  )
}

export default App;
