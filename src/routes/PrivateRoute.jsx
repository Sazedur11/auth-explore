import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-accent"></span>
    }

    if(user){
        return children
    }
    return (
        <Navigate to={'/singup'}></Navigate>
    );
};

export default PrivateRoute;