import { useContext,useState} from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContextData/AuthContextData";
export default function Login() {
  const { LoginUser,User} = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    // preventing by default  form submitting behaviour
    e.preventDefault();
    
    // clear error state 
    setEmailError("")
    setPasswordError("")

   


    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email === "") {
      return setEmailError("Credential does'nt match");
    }
    if (password === "") {
      return setPasswordError("Credential does'nt matches ");
    }

    // useing Loginuser fuction from AuthContect
    LoginUser(email, password)
      .then((user) => {
        
        toast.success("Login succesfully");


        e.target.email.value="";
        e.target.password.value=""

        // after successfully login then navigate to home page
        navigate("/");
      })
      .catch((error) =>{
        e.target.email.value="";
        e.target.password.value=""
        return toast.error(error.message)

      });

console.log("i am from login",User)   
  };
  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 my-20">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form noValidate="" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
        {emailError && <p className="text-red-700">{emailError}</p>}
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
          {passwordError && <p className="text-red-700">{passwordError}</p>}
          <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
       <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
         Log in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with Google accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account yet?
        <Link
          rel="noopener noreferrer"
          to="/register"
          className="underline dark:text-gray-100"
        >
          Register
        </Link>
      </p>
      <Toaster/>
    </div>
  );
}
