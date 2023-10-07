import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './Router/Router';
import './index.css'
import AuthContextData from './AuthContextData/AuthContextData';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextData>
   <RouterProvider router={router} />  
  </AuthContextData>
  </React.StrictMode>,
)
