import React from 'react'
import HomeBody from './component/HomeBody'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products/Products'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import img1 from '../assets/green.png'
import HomeBody from './component/HomeBody'



const App = () => {
  return (
    <div>
      <HomeBody />
      <Routes>
        <Route path='/' element={<Home showSrc={img1}/>} />
        <Route path='about' element={<About />} />
        <Route path='constact' element={<Contact />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}

export default App
