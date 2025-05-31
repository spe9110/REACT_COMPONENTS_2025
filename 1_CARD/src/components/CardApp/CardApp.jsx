import React from 'react'
import NetworkData from '../../data/NetworkData'
import CardContent from './cardContent/CardContent';
console.log(NetworkData);

// React Props
// 1. props stands for properties.
// 2. Props are arguments passed into React components.
// 3. Props are passed to components via HTML attributes.


// Note: Props are like function arguments in JavaScript and attributes in HTML.
// To send props into a component, use the same syntax as HTML attributes:
// It's very useful if you want to build reusable component


// The component receives the argument as a props object
const CardApp = () => {
  return (
    <div className="w-[380px] bg-white flex flex-col items-center justify-center rounded-md p-6 gap-8 shadow-md mt-[24px]">
      <h2 className="w-full text-left text-2xl font-bold">Apps</h2>
      <div className="w-full flex flex-wrap items-center justify-center gap-2.5 py-6 border-t border-b border-black/10">
          {NetworkData.map((card, index) => (
            <CardContent 
              key={index}
              image={card.url} 
              name={card.appName} 
            />
          ))}
      </div>
      <button className="w-[90%] h-12 bg-[#6680ff] rounded-md border border-transparent text-white hover:bg-white hover:border-[#6680ff] hover:text-[#6680ff] transition-colors duration-400 cursor-pointer font-medium">
          ADD MORE APPS
      </button>
    </div>
  )
}

export default CardApp
