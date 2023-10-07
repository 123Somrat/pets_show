import { createContext } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../FireBaseConfig/FireBaseConfig";


export const AuthContext = createContext()

export default function AuthContextData({children}) {

// create user useing firebase
const CreateUser = (name,email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


    const authData = {
        CreateUser
    };
return(

<AuthContext.Provider value={authData}>
    {children}
</AuthContext.Provider>

)
 
}
