import React from 'react'
import { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-toastify'
import {useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({firstname:"", lastname:"", email:"", password:"", confirmPassword:""})

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");


    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData , [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData, accountType
        }

        console.log("printing the final account data collected");
        console.log(finalData);
        navigate("/dashboard");
    }

    return (
        <div>
            
            {/* student - Instructor tab */}
            <div className="flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button 
                className = { `${accountType === "student" ? 
                "bg-gray-900 text-white" : 
                "bg-transparent text-gray-500"} py-2 px-5 rounded-full transition-all duration-200` }
                onClick={ () => setAccountType("student")}>
                    Student
                </button>
                <button 
                className = { `${accountType === "instructor" ? 
                "bg-gray-900 text-white" : 
                "bg-transparent text-gray-500"} py-2 px-5 rounded-full transition-all duration-200` }
                onClick = { () => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} 
            className = "flex flex-col w-full gap-y-4 mt-6">
                {/* first name and last name div */}
                <div className="flex justify-between flex-wrap"> 
                    <label>
                        <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem] ">
                            First Name 
                            <sup className="text-pink-500">*</sup>
                        </p>
                        <input
                            required
                            type = "text"
                            name = "firstname"
                            onChange = {changeHandler}
                            placeholder = "Enter first Name"
                            value = {formData.firstname}
                            className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                        />
                    </label>
                    <label>
                        <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem]">
                            Last Name 
                            <sup className="text-pink-500">*</sup>
                        </p>
                        <input
                            required
                            type = "text"
                            name = "lastname"
                            onChange = {changeHandler}
                            placeholder = "Enter Last Name"
                            value = {formData.lastname}
                            className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                        />
                    </label>
                </div>

                {/* email address */}
                <label>
                    <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem]">
                        Email Address 
                        <sup className="text-pink-500">*</sup>
                    </p>
                    <input
                        required
                        type = "email"
                        name = "email"
                        onChange = {changeHandler}
                        placeholder = "Enter email Address"
                        value = {formData.email}
                        className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                    />
                </label>

                {/* createPassword and Confirm Password */}
                <div className="flex justify-between flex-wrap">
                    <label className="relative">
                        <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem]">
                            Create Password
                            <sup className="text-pink-500">*</sup>
                        </p>
                        <input
                            required
                            type = {showPassword ? ("text") : ("password")}
                            name = "password"
                            onChange = {changeHandler}
                            placeholder = "Enter Password"
                            value = {formData.password}
                            className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick = { () => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>
                    </label>

                    <label className="relative">
                        <p className="text-[0.875rem] text-gray-300 mb-1 leading-[1.175rem]">
                            Confirm Password
                            <sup  className="text-pink-500">*</sup>
                        </p>
                        <input
                            required
                            type = {showConfirmPassword ? ("text") : ("password")}
                            name = "confirmPassword"
                            onChange = {changeHandler}
                            placeholder = "Confirm Password"
                            value = {formData.confirmPassword}
                            className="bg-gray-800 rounded-[0.5rem] text-gray-500 w-full p-[12px] hover:border border-b-2 border-gray-500"
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick = { () => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>
                    </label>
                </div>

                <button className="bg-yellow-500 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-6">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm;