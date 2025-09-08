import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
        <header className="flex items-center justify-between p-4 bg-gray-200">
        <h1 className='text-lg font-bold'>Scrimba 8 Projects</h1>
        <nav className="space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/first"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black"
            }
          >
            Project 1
          </NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header