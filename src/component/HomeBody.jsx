import React from 'react'
import NavBar from './NavBar'
import logo from '../assets//logo.jpg'
import Home from '../pages/Home/Home'
import img1 from '../assets/showw3.avif'
const HomeBody = () => {
  return (
    <div>
      <NavBar logoSrc={logo}/>
      <Home showSrc={img1}/>
    </div>
  )
}

export default HomeBody