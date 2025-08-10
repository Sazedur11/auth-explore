import { Link } from "react-router-dom";

const SingUp2 = () => {

    const handleSingup2 = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <div className="card-body">
        <form onSubmit={handleSingup2} className="fieldset">
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
          <button className="btn btn-neutral mt-4">Singup 2</button>
        </form>
        <p className="mt-2">do you have account please, Login <Link to={'/singup'}>logIn</Link></p>
      </div>
    </div>
    );
};

export default SingUp2;