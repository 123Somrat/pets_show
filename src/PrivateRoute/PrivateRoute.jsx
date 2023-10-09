import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextData/AuthContextData'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
   const {User} = useContext(AuthContext);
   const location = useLocation();
   console.log(location)
   
   if(!User){
    return <Navigate to="/login" state={location.pathname}></Navigate>
   }

   return children
}
