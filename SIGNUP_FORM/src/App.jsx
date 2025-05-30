import { Routes, Route } from 'react-router-dom';
import  SignUpForm  from './components/SignUpForm';
import  SignInForm  from './components/SignInForm';
import  Main  from './pages/Main';
import  ForgetPassword from './components/ForgetPassword';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
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

/*
The nested route should not have a leading / in the path.
Use the Outlet component from react-router-dom to render the nested routes inside SignInForm.
*/ 
