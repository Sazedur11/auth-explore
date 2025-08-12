import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SingUp = () => {

  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()
  

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        //create user
        createUser(email, password)
        .then(result => {
          console.log(result.user)
          e.target.reset()
          navigate('/')
        })
        .catch(error =>{
          console.log('error', error.message)
        })
    }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email"
          name="email"
          className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"
          name="password"
          className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className="mt-2">New here please? Singup <Link to={'/singup2'}>Singup2</Link></p>
      </div>
    </div>
  );
};

export default SingUp;
