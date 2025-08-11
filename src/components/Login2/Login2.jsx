import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login2 = () => {

    const {userLogin2} = useContext(AuthContext)

    const handleLogIn2 = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin2(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log('error', error.message)
        })

    }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <div className="card-body">
        <form onSubmit={handleLogIn2} className="fieldset">
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
          <button className="btn btn-neutral mt-4">Login2</button>
        </form>
      </div>
    </div>
  );
};

export default Login2;
