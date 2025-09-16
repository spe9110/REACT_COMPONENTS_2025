import React from 'react'
import logo from '../../assets/react.svg'

const Navbar_1 = () => {
  return (
    <>
      <nav className='w-full h-12 bg-blue-950 flex items-center justify-between py-[4px] px-[64px]'>
        <div className='flex items-center justify-start space-x-2 shadow-lg'>
            <img src={logo} alt="React Logo" className='w-8 h-8' />
        <h1 className='text-lg font-bold text-cyan-400'>React Facts</h1>
        </div>
          <ul className='nav-list flex flex-row justify-center items-center gap-4 '>
            <li className='nav-list text-md font-medium cursor-pointer'>Pricing</li>
            <li className='nav-list text-md font-medium cursor-pointer'>About</li>
            <li className='nav-list text-md font-medium cursor-pointer'>Contact</li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar_1
