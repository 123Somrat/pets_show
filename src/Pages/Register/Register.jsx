import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthContextData/AuthContextData';
import toast, { Toaster } from 'react-hot-toast';
import {  Link, useNavigate } from "react-router-dom"
export default function Register() {
 const {CreateUser}= useContext(AuthContext)
 const navigate = useNavigate();
 const [error,setError] = useState({
     name :"",
     email : "",
     password : "",
 })
 const handleSubmit = (e)=>{

  e.preventDefault()
    let form = new FormData(e.currentTarget)
    let  name = form.get("name");
    let email = form.get("email");
    let password =  form.get("password");
    let regex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
      

 

     CreateUser(name,email,password)
     .then(()=>{
      toast.success("user Created Successfully");
      navigate("/login")
     }
  )
     .catch(error=>toast.error("user Already exeist"))
      
 }


  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
     
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
        <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" placeholder="name" name="name" className="input input-bordered" />
          </div>
          {error.name && <h1 className='text-red-700'>{error.name}</h1> }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" name="email" className="input input-bordered" />
          </div>
          {error.email && <h1 className='text-red-700'>{error.email}</h1> }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password (min. 8 char)</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" />
            {error.password && <h1 className='text-red-700'>{error.password}</h1> }
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">Already Have an Account?</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
    <Toaster/>
  </div>
  )
}
