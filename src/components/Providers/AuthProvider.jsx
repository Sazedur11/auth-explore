import { createContext } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email,password)
  };
  const userLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const userLogin2 = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  }

  const authInfo = {
    name: "SingUp",
    createUser,
    userLogin,
    userLogin2
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
