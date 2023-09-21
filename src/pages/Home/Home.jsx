import React from 'react'
import axios from 'axios'
const Home = ({showSrc}) => {
  return (
    <div className='flex mx-auto w-[100%] h-[500px]'>
      <div className='w-[20%] border'>
        <h1 className='font-bold  text-4xl mt-5'>
          MyShoe
        </h1>
      </div>
      <div className='w-[50%] border'>
        <img src={showSrc} alt="" />
      </div>
    </div>
  )
}

export default Home