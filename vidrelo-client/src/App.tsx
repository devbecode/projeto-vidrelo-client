import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from './pages/Login';
import Signin from './pages/Signin';


function App() {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signin" element={<Signin/>}/>
        </Routes>
    </Router>
  )
}

export default App;
