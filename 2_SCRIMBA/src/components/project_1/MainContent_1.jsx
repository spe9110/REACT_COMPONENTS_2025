import React from 'react'

function MainContent() {
  return (
    <div className='mt-[100px] px-[64px]'>
      <p className='mt-6 text-5xl font-bold'>Fun Facts about React!</p>
      <ol className='mt-6 text-lg list-decimal list-inside'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including</li>
      </ol>
    </div>
  )
}

export default MainContent
