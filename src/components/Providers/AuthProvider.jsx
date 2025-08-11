import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email,password)
  };
  const userLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const userLogin2 = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  };
  const userSingin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  };

  const singOut = () =>{
    return signOut(auth)
  }
 
  useEffect(() => {
    const connection = onAuthStateChanged(auth, activeUser =>{
        if(activeUser){
            console.log('see active user', activeUser);
            setUser(activeUser)
        }
        else{
            console.log('no active user')
            setUser(null)
        }
    })
    return () =>{
        connection()
    }
  },[])

  const authInfo = {
    name: "SingUp",
    user,
    createUser,
    userLogin,
    userLogin2,
    userSingin,
    singOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
