import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = ({img, name, phone, email}) => {
  return (
    <article className='contacts-card w-[300px] h-[400px] bg-slate-200 m-auto mt-10 mb-10 p-4 rounded-lg shadow flex flex-col justify-center items-start gap-4'>
      <img className='w-full h-[250px] object-cover object-center' src={img} alt="cat" />
      <h3 className='font-bold text-xl'>{name}</h3>
      <div className='flex justify-center items-center gap-2'>
        <FaPhoneAlt />
        <p>Phone: {phone}</p>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <MdEmail />
        <p>Email: {email}</p>
      </div>
    </article>
  )
}

export default Contact
