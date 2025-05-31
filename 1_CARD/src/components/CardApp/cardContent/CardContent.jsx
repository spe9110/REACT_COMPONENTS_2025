import React from 'react'

const CardContent = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-[100px] h-[100px] flex flex-col items-center justify-center group gap-1.5 transition-shadow hover:shadow-md cursor-pointer hover:transition hover:duration-50">
      <img src={props.image} className="w-12" alt={props.name} />
      <p className="group-hover:hidden transition-all">{props.name}</p>
      <button className="rounded px-5 py-1.5 text-white bg-[#7ed321] border-0 hidden group-hover:block transition-all cursor-pointer">
        +ADD
      </button>
    </div>
  )
}

export default CardContent;