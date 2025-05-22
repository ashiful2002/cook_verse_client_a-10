import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import { Helmet } from "react-helmet";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(false);
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    navigate("/");
    loginUser(email, password);
  };

  return (
    <div>
      <Helmet>
        <title>Log In | Cook_verse</title>
      </Helmet>
      <div className="pt-10 bg-base-200 min-h-[80vh]">
        <div className="flex items-center justify-center flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl my-5 font-bold">Login now!</h1>
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
                  required
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <span>
                    <a className="link link-hover">Forgot password?</a>
                  </span>
                </div>
                <div className="flex justify-end">
                  <Link to="/signup" className="link">
                    New user? sign up first.{" "}
                  </Link>
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
