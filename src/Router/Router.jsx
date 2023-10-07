import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOuts from "../MainLayouts.jsx/MainLayOuts";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOuts/>,
      children :[
        {
             path:"/",
             element:<Home/>
        }

      ]
    },
  ]);


  export default router;