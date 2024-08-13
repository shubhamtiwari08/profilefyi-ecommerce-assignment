
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProductListing from './Pages/ProductListing'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
