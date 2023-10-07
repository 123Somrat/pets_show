import { createContext } from "react";



const AuthContext = createContext()

export default function AuthContextData() {

    const authData = {};
    
    <AuthContext.Provider value={authData}>

    </AuthContext.Provider>
   
}
