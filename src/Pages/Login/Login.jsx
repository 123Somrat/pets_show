import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContextData/AuthContextData';
export default function Login() {
    const {LoginUser} = useContext(AuthContext);
    const navigate = useNavigate()
   const handleSubmit = (e)=> {
         let email = e.target.email.value;
         let password = e.target.password.value;




         // useing Loginuser fuction from AuthContect
          LoginUser(email,password)
          .then(()=>{
          
              toast.success("Login succesfully")
              // after successfully login then navigate to home page
               navigate("/")
              
          })
          .catch((error)=>toast.error("Invalid Login Credetial"))


        e.preventDefault()
   }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
     
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" />
            <label className="label justify-normal mr-1">
             <span className='text-xs mr-1'>Don't have an account? </span> <Link to="/register" className="link text-grey-700">Join</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
    <Toaster/>
  </div>
  )
}
