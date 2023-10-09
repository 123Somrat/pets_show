import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextData/AuthContextData'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
   const {User,loading} = useContext(AuthContext);
   const location = useLocation();
  if(loading){
     return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto m-12"></div>
  }
   
   if(User){
    return children
   }
   return <Navigate to="/login" state={location.pathname}></Navigate>
}
