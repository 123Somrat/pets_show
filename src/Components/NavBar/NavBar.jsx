import { Link, NavLink } from "react-router-dom";
import   "../../index.css"
import icon from "../../assets/Images/pets-3715733_640.ico"
import { useContext } from "react";
import { AuthContext } from "../../AuthContextData/AuthContextData";

export default function NavBar() {
   const {User,SignOut,userLogedIn} = useContext(AuthContext)
     console.log(User)

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li >
                <NavLink to="/voulentier">Become a Voulentier</NavLink>
              </li>
              <li>
                <NavLink to="/register">Donation</NavLink>
              </li>
              <li>
                <NavLink to="/register">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/"className="normal-case text-xl">Pets Show</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-2">
                <NavLink to="/voulentier">Become a Voulentier</NavLink>
              </li>
              <li className="mr-2">
                <NavLink to="/donation">Donation</NavLink>
              </li>
              <li className="mr-2">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end  h-22">
          <div className="flex flex-col justify-center items-center">
          {User?.photoURL && userLogedIn &&
          <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src={""
          } />
          }
          {User?.email && userLogedIn && <span>{User.email}</span>}
          </div>

         {User?.email && userLogedIn ?
          <Link onClick={SignOut}className="btn ml-4">SignOut</Link>
      
         : <Link to="/login" className="btn">Login</Link>} 
        </div>
      </div>
    </div>
  );
}
