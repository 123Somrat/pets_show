import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOuts from "../MainLayouts.jsx/MainLayOuts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Events from "../Components/Events/Events";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Voulentiers from "../Pages/Voulentiers/Voulentiers";
import Donation from "../Pages/Donation/Donation";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOuts/>,
      children :[
        {
             path:"/",
             element:<Home/>,
             loader : ()=>fetch("../../public/resources.json"),
            
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
          element:<ViewDetails/>,
          loader:()=>fetch("../../public/resources.json")
        },
        {
           path:"/voulentier",
           element : <Voulentiers/>
        },
        {
          path:"/donation",
          element :<Donation/>
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