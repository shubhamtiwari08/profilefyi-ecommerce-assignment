
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProductListing from './Pages/ProductListing'
import Cart from './Pages/Cart'
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
