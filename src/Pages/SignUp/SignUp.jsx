import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "../Login/GoogleLogin/GoogleLogin";

const SignUp = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUserSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    alert("this is working");
    navigate("/");
    console.log(user);
  };

  return (
    <div>
      <div className="pt-10 bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUserSignUp} className="fieldset">
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
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <div className="flex justify-end">
                  <Link to="/signin" className="link">
                    Already have an account? log in
                  </Link>
                </div>
                <div>
                  {error && <p className="text-red-600">this is a error </p>}
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
