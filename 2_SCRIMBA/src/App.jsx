import React from "react";
import { Route, Routes } from "react-router-dom"; // ✅ FIXED
import Home from "./pages/Home";
import FirstProject from "./pages/Project_1";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        {/* Parent route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes will render inside <Outlet /> */}
          <Route index element={<Home />} /> 
          <Route path="first" element={<FirstProject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
//  npm create vite@latest 2_SCRIMBA
// npm install tailwindcss @tailwindcss/vite
// npm install react-router-dom@6
// npm i react-icons