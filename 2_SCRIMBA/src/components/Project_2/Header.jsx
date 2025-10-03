import React from 'react'
import { FaGlobeAfrica } from "react-icons/fa";
// import globe from '../../assets/globe.png'

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-[55px] p-4 bg-[#f55a5a] text-white space-x-2">
      {/* <img src={globe} width={20} height={20} alt="globe icon" className='text-white' /> */}
      <FaGlobeAfrica className="text-white" size={25} />
        <h1 className='text-lg font-bold'>My Travel Journal</h1>
    </header>
  )
}

export default Header
