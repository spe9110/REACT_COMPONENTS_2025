import React from 'react'
import logo from '../../assets/react.svg'
function MainContent() {
  return (
    <div className='mt-[100px] px-[64px]'>
      <p className='mt-6 text-5xl font-bold'>Fun Facts about React!</p>
      <ol className='mt-6 text-lg list-disc list-inside marker:text-[#61DAFB]'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including</li>
      </ol>
        <img src={logo} alt="logo image" className='absolute w-[400px] h-[400px] top-1/9 right-[8%] p-[24px] text-neutral-700' style={{ filter: 'grayscale(100%) brightness(30%)' }}/>
    </div>
  )
}

export default MainContent
