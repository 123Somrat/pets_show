import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOuts from "../MainLayOuts/MainLayOuts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Events from "../Components/Events/Events";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Voulentiers from "../Pages/Voulentiers/Voulentiers";
import Donation from "../Pages/Donation/Donation";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOuts/>,
      children :[
        {
             path:"/",
             element:<Home/>,
             loader : ()=>fetch("resources.json"),
            
        },
        {
           path:"/register",
           element:<Register/>
        },
        {
             path:"/login",
             element:<Login/>
        },
        {
          path:"/viewDetails/:id",
          element:<PrivateRoute><ViewDetails/>,</PrivateRoute>,
          loader:()=>fetch("resources.json")
        },
        {
           path:"/voulentier",
           element :<PrivateRoute><Voulentiers/></PrivateRoute>
        },
        {
          path:"/donation",
          element :<PrivateRoute><Donation/></PrivateRoute>
        },
        {
          path:"/contact",
          element : <Contact/>
        },
        {
          path:"/*",
          element:<ErrorPage/>
        }

      ]
    },
  ]);


  export default router;