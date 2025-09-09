import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
    const navigate = useNavigate();
  return (
    <div>
       {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-18 left-20 p-2 rounded-xl bg-slate-400 text-slate-950 hover:bg-slate-500 transition cursor-pointer"
      >
        <IoMdArrowBack className="text-2xl" />
      </button>
    </div>
  )
}

export default GoBackButton
