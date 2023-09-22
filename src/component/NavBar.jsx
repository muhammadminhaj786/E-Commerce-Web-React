import React from 'react'

const NavBar = ({logoSrc}) => {
  return (
    <div className='flex border h-[100px] w-[100%] justify-between '>
      <div className="for-logo border w-[20%] mx-auto pl-5">
        <h1 className='font-bold text-[red]'>MyShoe</h1>
        <img src={logoSrc} height={'60px'} width={'70px'} alt="" />
      </div>
      <div className="for-navLink border w-[50%] mx-auto ">
        <ul className='flex justify-center mt-7 gap-8 mx-auto'>
          <li className='text-[red]' >Home</li>
          <li className='text-[red]'>About</li>
          <li className='text-[red]'>Contact Us</li>
          <li className='text-[red]'>Add Cart</li>
          <li className='text-[red]'>Products</li>

        </ul>
      </div>
    </div>
  )
}

export default NavBar