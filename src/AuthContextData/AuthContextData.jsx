import { createContext } from "react";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import auth from "../FireBaseConfig/FireBaseConfig";


export const AuthContext = createContext()

export default function AuthContextData({children}) {

// create user useing firebase
const CreateUser = (name,email,password)=>{
    console.log(name,email,password)
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login user useing Firebase

const LoginUser = (email,password)=>{
     return  signInWithEmailAndPassword(auth,email,password)
}



    const authData = {
        CreateUser,
        LoginUser
    };
return(

<AuthContext.Provider value={authData}>
    {children}
</AuthContext.Provider>

)
 
}
