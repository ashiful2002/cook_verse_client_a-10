import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../Login/GoogleLogin/GoogleLogin";

const SignUp = () => {
  // most important
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUserSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    // if (password.length < 6) {
    //   setError(" Password must be at least 6 characters long.");
    //   return;
    // } else if (!/[a-z]/.test(password)) {
    //   setError(" Password must be at least one lowercase letter.");
    //   return;
    // } else if (!/[A-Z]/.test(password)) {
    //   setError(" Password must be at least one Uppercase letter.");
    //   return;
    // } else if (!/[0-9]/.test(password)) {
    //   setError(" Password must be at least a number");
    //   return;
    // }

    const newUser = { name, email, password, photo };
    // firebase
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("firebse user created", user);
        // db
        // i send user data in mongodb datasbse . but cant accecc from mongodb and use in navbar
        fetch("http://https://a10-book-server-app.vercel.app/:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User saved to db", data);
            navigate("/")
            if (data.insertedId) {
              Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Users data stored in databse",
                showConfirmButton: false,
                timer: 1000,
              });
              e.target.reset();
            }
            //  navigate("/")
          })
          .catch((err) => {
            console.log("db error :", err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up | Cook_verse</title>
      </Helmet>
      <div className="pt-10 bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUserSignUp} className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="User name"
                  required
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {/* photo url */}
                <label className="label">Photo url</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Paste you photo url"
                />

                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <div className="flex justify-end">
                  <>
                    Already have an account?
                    <Link to="/signin" className="link">
                      log in
                    </Link>
                  </>
                </div>
                <div>{error && <p className="text-red-500">{error}</p>}</div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Sign Up
                </button>
              </form>
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
