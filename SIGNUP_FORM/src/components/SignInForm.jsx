import { useState } from "react";
import { useFormik } from "formik"; 
import * as Yup from 'yup'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { Outlet, Link } from 'react-router-dom';


const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
                    .min(6, 'Password must be at least 6 characters')
                    .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
  return (
    <div className='w-full flex min-h-screen flex flex-col flex-1 justify-start items-center bg-slate-200 px-6 py-12 lg:px-8 sm:px-4'>
        <div className="w-full mx-auto max-w-lg">
            {/* form header */}
            <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
            />
            <h2 className="text-3xl text-center font-bold tracking-tight mt-10 text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-10 lg:w-2/5 h-auto sm:mx-auto sm:w-full bg-white rounded-lg shadow-xl">
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col p-6 space-y-2">
            <div className="input-wrapper flex flex-col">
                <label htmlFor="email" className="block text-sm/6 text-gray-900 font-medium">Email Address</label>
                <div className="mt-1 relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={`w-full rounded-md bg-white px-3 py-1.5 text-sm/6 text-gray-900 outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:outline-offset-2 sm:text-sm/6 ${formik.errors.email ? 'outline-red-500' : 'outline-gray-300'}`} 
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ? 
                (<div className="text-xs italic text-red-500 mt-1">{formik.errors.email}</div>) 
                : null}
            </div>
            <div className="input-wrapper flex flex-col">
                <label htmlFor="password" className="block text-sm/6 text-gray-900 font-medium">Password</label>
                <div className="mt-1 relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        className={`w-full rounded-md bg-white px-3 py-1.5 text-sm/6 text-gray-900 outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:outline-offset-2 sm:text-sm/6 ${formik.errors.password ? 'outline-red-500' : 'outline-gray-300'}`} 
                        {...formik.getFieldProps('password')}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                {formik.touched.password && formik.errors.password ? 
                (<div className="text-xs italic text-red-500 mt-1">{formik.errors.password}</div>) 
                : null}
            </div>
            <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                    <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm/6 text-gray-900">Remember me</label>
                </div>
                <Link to={"/forgetpassword"} className="text-sm/6 text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
            </div>
        
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </form>
        </div>
        
        {/* <Outlet /> */}
    </div>
  )
}
export default SignInForm;

// npm i formik