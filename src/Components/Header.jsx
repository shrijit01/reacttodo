import React from 'react'

function Header({user}) {
  return (
    <div className='bg-custom-green  px-5 py-5 flex items-center justify-between w-screen'>
      <div className="left ">
        <h1 className='text-white text-bold text-xl'>{user}</h1>
      </div>
      <div className="left  flex items-center justify-between w-2/4">
        <a className='text-white text-bold text-xl'>About Us</a>
        <a className='text-white text-bold text-xl'>Services</a>
        <a className='text-white text-bold text-xl'>Support</a>
        <a className='text-white text-bold text-xl'>Locate us</a>
        <a className='text-white text-bold text-xl'>Login</a>
        <a className='text-white text-bold text-xl'>Signup</a>
      </div>
    </div>
  )
}

export default Header
