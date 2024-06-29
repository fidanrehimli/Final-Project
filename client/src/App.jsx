import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Header from './layout/Header'
import About from './pages/About'
import Shop from './pages/Shop'
import MENU from './pages/Menu'
import Blog from './pages/Blog'
import Footer from './layout/Footer'


function App() {
  // const currentPath = window.location.pathname;
  // const hideNavbar = currentPath === '/login' || currentPath === '/register';

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<MENU />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>  
      <Footer/>
    </> 
  )
}

export default App
