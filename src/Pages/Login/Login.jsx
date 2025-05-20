import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin/GoogleLogin";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    alert("this is working");
    navigate("/");
    console.log(user);
  };

  // ( Email, Password, Forget Password, Login button )

  // If the user logs in successfully, then
  // navigate them to their desired Route / Home page.
  // If not, show him an error with a toast/error message anywhere in the form.

  // There will be some other options like
  // Show the user a Link for Register so that he can go to the register page.
  // Show users a Social Login Button ( Google only ) on clicking it
  // The user authenticates with Google
  //  Navigate him to his desired Route / Home page.

  return (
    <div>
      <div className="pt-10 bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUserLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div className="flex justify-end">
                  <Link to="/signup" className="link">New user? sign up first. </Link>
                </div>
                <div>
                  {error && <p className="text-red-600">this is a error </p>}
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
              {/* google login */}
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
