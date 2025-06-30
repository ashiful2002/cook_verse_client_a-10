import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navabar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        toast.success("User signed out successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/all-recipe">All Recipes</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/add-recipe">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/my-recipe">My Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-base-100 shadow sticky top-0 z-50">
      <div className="navbar md:w-11/12 mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-2  shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Cook<span className="text-primary -ml-2">_Verse</span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <div>
            <>
              {user && (
                <a id="clickable">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </a>
              )}

              {user ? (
                <Tooltip className="mt-3" anchorSelect="#clickable" clickable>
                  <p>{user && user.displayName}</p>
                  <button onClick={handleSignOut} className="btn btn-xs">
                    Log out
                  </button>
                </Tooltip>
              ) : (
                <Link to="signin" className="btn">
                  Sign in
                </Link>
              )}
            </>
          </div>

          <div>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
