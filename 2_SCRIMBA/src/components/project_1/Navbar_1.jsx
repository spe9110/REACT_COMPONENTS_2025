import React from 'react'
import logo from '../../assets/react.svg'

const Navbar_1 = () => {
  return (
    <>
      <nav className='w-full h-12 bg-blue-950 flex items-center justify-between py-[4px]'>
        <div className='flex items-center justify-start space-x-2'>
            <img src={logo} alt="React Logo" className='w-8 h-8' />
        <h1 className='text-lg font-bold text-cyan-400'>React Facts</h1>
        </div>

      </nav>
    </>
  )
}

export default Navbar_1
