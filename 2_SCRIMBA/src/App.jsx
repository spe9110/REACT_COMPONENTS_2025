import React from 'react'
import { Route, Routes } from "react-router";
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
//  npm create vite@latest 2_SCRIMBA
// npm install tailwindcss @tailwindcss/vite
// npm install react-router-dom@6
// npm i react-icons