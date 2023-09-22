import React, { useState, useEffect } from 'react'

import Products from '../Products/Products'
const Home = ({showSrc}) => {


  return (
    <div>
          <div className=' mx-auto w-[100%] h-[500px]'>
      <div className='w-[60%] border flex'>
        <div className='w-[25%] border'>
        <h1 className='text-center font-bold text-4xl mt-[220px]'>MyShow</h1>
        </div>
        <div className='w-[75%] border'>
          <img className='w-[100%] border h-[100%]' src={showSrc} alt="" />
        </div>
      </div>
    </div>
      <div>
        <Products />
      </div>
    </div>
  )
}

export default Home