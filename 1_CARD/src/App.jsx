import React from "react"
// import NetworkData from "./data/NetworkData"
import CardApp from "./components/CardApp/CardApp";
// console.log(NetworkData);


function App() {
  return (
    <div className="bg-gradient-to-l from-[#806cb1] via-[#806cb1] to-[#424f81] min-h-screen flex flex-col items-center justify-center px-2">
      <h1 className="text-3xl font-bold text-center text-white">
          Card App with React and Tailwind CSS <br />
          <span className="text-4xl text-blue-700">#Icodethis Challenge</span>
      </h1>
      <CardApp />
    </div>
  )
}

export default App

//  npm create vite@latest