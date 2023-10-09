import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthContextData/AuthContextData';
import toast, { Toaster } from 'react-hot-toast';
import {  Link, useNavigate } from "react-router-dom"
export default function Register() {
 const {CreateUser}= useContext(AuthContext)
 const navigate = useNavigate();
  const [nameError,setNameError] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passwordError,setPasswordError] = useState("")
 const handleSubmit = (e)=>{
      
  e.preventDefault()
    
  // empty the error 
    setNameError("")
    setEmailError("")
    setPasswordError("");
   console.log()  
   // e.target.email.value=""
   // e.target.password.value=""
    let form = new FormData(e.currentTarget)
    
    let  name = form.get("username");
    let email = form.get("email");
    let password =  form.get("password");
    let regex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
      
      if(name.length<=5 || name===""){
        return setNameError("name mustbe 6 cherecter long and not empty")
      }

      if(email==="" || email.test(regex)){
        return setEmailError("email can not be empty or email must have letter and special cherecter")
      }
      
      if(password.length<=6){
        return setPasswordError("Password must be longer then 6 cherecter")
      }


     CreateUser(name,email,password)
     .then(()=>{
      // clear the form field after submitting the form
      e.target.username.value=""
      e.target.email.value=""
      e.target.password.value=""

      return toast.success("user Created Successfully");
      //navigate("/login")
      
     }
  )
     .catch(error=>{
      // clear the form field
      e.target.username.value=""
      e.target.email.value=""
      e.target.password.value=""
     return  toast.error("user Already exeist")
    })
      
 }
 

  return (
    <div className=" mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-700 dark:text-gray-100 items-center my-20">
    <div className="mb-8 text-center">
      <h1 className="my-3 text-4xl font-bold">Register</h1>
      <p className="text-sm dark:text-gray-400">Register in to access your account</p>
    </div>
    <form noValidate="" onSubmit={handleSubmit} className="space-y-12">
      <div className="space-y-4">
      <div className="space-y-1 text-sm">
        <label htmlFor="username" className="block dark:text-gray-400">Username</label>
        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
      </div>
        {nameError && <p className='text-red-700'>{nameError}</p> }
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
          <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
        </div>
        {emailError && <p className='text-red-700'>{emailError}</p>}
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
          </div>
          <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
        </div>
      </div>
      {passwordError && <p className='text-red-700'>{passwordError}</p>}
      <div className="space-y-2">
        <div>
          <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
          <a rel="noopener noreferrer" href="/login" className="hover:underline dark:text-violet-400">Login</a>.
        </p>
      </div>
    </form>
    <Toaster/>
  </div>
  )
}
