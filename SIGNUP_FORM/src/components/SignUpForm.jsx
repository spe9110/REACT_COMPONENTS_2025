import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
    firstName: yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Required"),
    lastName: yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Required"), 
    type: yup.string().required("Required"), 
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string()
                        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
                        .min(6, 'Password must be at least 6 characters')
                        .required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Required"),
    terms: yup.bool().oneOf([true], 'You must accept the terms and conditions').required("Required"),
}).required();

const SignUpForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const onSubmit = data => console.log(data);
    return (
        <div className="w-full flex min-h-[100vh] flex-1 flex-col items-center justify-start bg-slate-200 px-6 py-12 lg:px-8 m-0 sm:px-4">
            {/* form header */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">
                    Create an account
                </h2>
            </div>
            {/* form */}
            <div className="mt-10 lg:w-2/5 h-auto sm:mx-auto sm:w-full bg-white rounded-lg shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col p-6 space-y-2">
                    {/* first name */}
                    <div className="input-wrapper flex flex-col">
                        <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">First Name</label>
                        <div className="mt-2">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="firstName"
                                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.firstName ? 'outline-red-500' : 'outline-gray-300'}`}
                                {...register('firstName')}
                            />
                        </div>
                        {errors.firstName && (<p className="text-xs italic text-red-500">{errors.firstName.message}</p>)}
                    </div>
                    {/* last name */}
                    <div className="input-wrapper flex flex-col">
                        <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">Last Name</label>
                        <div className="mt-2">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="lastName"
                                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.lastName ? 'outline-red-500' : 'outline-gray-300'}`}
                                {...register('lastName')}
                            />
                        </div>
                        {errors.lastName && (<p className="text-xs italic text-red-500">{errors.lastName.message}</p>)}
                    </div>                    
                    {/* email */}
                    <div className="input-wrapper flex flex-col">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.email ? 'outline-red-500' : 'outline-gray-300'}`}
                                {...register('email')}
                            />
                        </div>
                        {errors.email && (<p className="text-xs italic text-red-500">{errors.email.message}</p>)}
                    </div>
                    {/* password */}
                    <div className="input-wrapper flex flex-col">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.password ? 'outline-red-500' : 'outline-gray-300'}`}
                                {...register('password')}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        {errors.password && (<p className="text-xs italic text-red-500">{errors.password.message}</p>)}
                    </div>
                    {/* confirm password */}
                    <div className="input-wrapper flex flex-col">
                        <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">Confirm Password</label>
                        <div className="mt-2 relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                autoComplete="current-password"
                                className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 ${errors.confirmPassword ? 'outline-red-500' : 'outline-gray-300'}`}
                                {...register('confirmPassword')}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        {errors.confirmPassword && (<p className="text-xs italic text-red-500">{errors.confirmPassword.message}</p>)}
                    </div>
                    {/* terms and conditions */}
                    <div className="input-wrapper flex flex-col">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${errors.terms ? 'border-red-500' : ''}`}
                                    {...register('terms')}
                                />
                            </div>
                            <div className="ml-2 text-sm">
                                <label htmlFor="terms" className="font-medium text-gray-700">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                        </div>
                        {errors.terms && (<p className="text-xs italic text-red-500">{errors.terms.message}</p>)}
                    </div>
                    {/* button */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="mb-4 text-center text-sm text-gray-500">
                    Do you have an account?{' '}
                    <Link to={"/signin"} className="font-semibold text-blue-600 hover:text-blue-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;