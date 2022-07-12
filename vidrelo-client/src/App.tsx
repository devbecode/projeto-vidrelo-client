import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signin from './pages/signin/Signin';
import DetailProduct from './pages/detailProduct/DetailProduct';


function App() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Signin/>}/>
            <Route path="/Detalhes-produto" element={<DetailProduct/>}/>
        </Routes>
    </Router>
  )
}

export default App
