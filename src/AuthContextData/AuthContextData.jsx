import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import auth from "../FireBaseConfig/FireBaseConfig";


export const AuthContext = createContext()

export default function AuthContextData({children}) {
  const [User,setUser] = useState(null)
// create user useing firebase
const CreateUser = (name,email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

// Login user useing Firebase

const LoginUser = (email,password)=>{
     return  signInWithEmailAndPassword(auth,email,password)
}

// observe user status useing FireBase onAuthStateChanged utility method
     useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (user) => {
            // set login user in state for useing in AuthContext
            if (user) {
               setUser(user)
            } else {
               console.log("sign out successfull")
            }
          });

          // clear the listener
          return ()=>{
             unSubscribe()

          }

     },[])

   console.log(User)

    const authData = {
        CreateUser,
        LoginUser,
        User
    };
return(

<AuthContext.Provider value={authData}>
    {children}
</AuthContext.Provider>

)
 
}
