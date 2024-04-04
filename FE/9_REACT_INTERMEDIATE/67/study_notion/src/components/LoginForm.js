import React from 'react'
import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({email:"", password:""})
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData , [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("hi");
        navigate("/dashboard");
        console.log("hi");
    } 

    return (
        <form onSubmit = {submitHandler}
        className = "flex flex-col w-full gap-y-4 mt-6" >
            <label className="w-full">
                <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem]">
                    Email Address
                    <sup className="text-pink-500">*</sup>
                </p>
                <input 
                    required
                    type = "text"
                    value = {FormData.email}
                    onChange = {changeHandler}
                    placeholder = "Enter email address"
                    name = "email"
                    className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                 />    
            </label>

            <label className="w-full relative">
                <p  className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem]">
                    Password
                    <sup className="text-pink-500">*</sup>
                </p>
                <input 
                    required
                    type = {showPassword ? ("text") : ("password")}
                    value = {FormData.password}
                    onChange = {changeHandler}
                    placeholder = "Enter Password"
                    name = "password"
                    className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                    
                 />    

                 <span onClick = { () => setShowPassword((prev) => !prev)}
                 className="absolute right-3 top-[38px] cursor-pointer">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                 </span>

                 <Link to = "#">
                    <p  className="text-xs mt-1 text-blue-500 w-max ml-auto">
                        Forgot Password
                    </p>
                 </Link>
            </label>

            <button className="bg-yellow-500 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-6">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm;