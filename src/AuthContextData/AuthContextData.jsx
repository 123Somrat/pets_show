import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "../FireBaseConfig/FireBaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextData({ children }) {
  const [User, setUser] = useState(null);
  // create user useing firebase
  const CreateUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user useing Firebase

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observe user status useing FireBase onAuthStateChanged utility method
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      // set login user in state for useing in AuthContext
      if (user) {
        setUser(user);
      } else {
        console.log("sign out successfull");
      }
    });

    // clear the listener
    return () => {
      unSubscribe();
    };
  }, []);

  // create signOut method for signout user
  const SignOut = () => {
    // signOut user useing firebase
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("SignOut Successfully")
        return <Navigate to="/login"></Navigate>;
      })
      .catch((error) => {
        return toast.error("SomeThing went Wrong");
      });
  };

  const authData = {
    CreateUser,
    LoginUser,
    User,
    SignOut,
  };
  return (
    <div>
      <Toaster />
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
}
