import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Login from './pages/Login'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/ShopContext';
import Verify from './pages/Verify'
const App = () => {
  return (
    <ShopContextProvider>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <ToastContainer/>
       <Navbar/>
       <Searchbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<Placeorder/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/verify' element={<Verify/>}/>
       </Routes>
       <Footer/>
      </div>
    </ShopContextProvider>
  )
}

export default App