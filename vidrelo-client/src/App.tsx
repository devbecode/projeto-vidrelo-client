import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';



function App() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Signin/>}/>
        </Routes>
    </Router>
  )
}

export default App
