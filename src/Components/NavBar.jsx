import { Link, NavLink } from "react-router-dom";
import   "../index.css"


export default function NavBar() {
  return (
    <div>
      <div className="navbar">
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
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/register">Registe </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/"className="normal-case text-xl">Pets Show</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events </NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
}
