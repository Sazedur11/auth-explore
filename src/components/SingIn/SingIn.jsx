import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const SingIn = () => {

    const {userSingin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSingin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        
        userSingin(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate('/cart')
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <div className="card-body">
        <form onSubmit={handleSingin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SingIn</button>
        </form>
      </div>
    </div>
    );
};

export default SingIn;