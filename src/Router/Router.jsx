import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOuts from "../MainLayouts.jsx/MainLayOuts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOuts/>,
      children :[
        {
             path:"/",
             element:<Home/>,
             loader : ()=>fetch("../../public/resources.json")
        },
        {
           path:"/register",
           element:<Register/>
        },
        {
             path:"/login",
             element:<Login/>
        }

      ]
    },
  ]);


  export default router;