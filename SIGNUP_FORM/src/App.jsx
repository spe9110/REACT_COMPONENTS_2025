import { Routes, Route } from 'react-router-dom';
import { SignUpForm } from './components/SignUpForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  )
}

export default App

// npm create vite@latest
// npm i react-hook-form
// npm install @hookform/resolvers yup
/*
react-hook-form:

Manages the form state and handles input registration.
@hookform/resolvers/yup:

Acts as a bridge between react-hook-form and yup to handle validation.
yup:

Defines the validation rules/schema for your form fields.
*/ 