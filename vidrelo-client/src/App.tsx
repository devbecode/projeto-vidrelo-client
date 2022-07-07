import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './components/SingleProduct'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
      </Routes>
    </Router>
  )
}

export default App
