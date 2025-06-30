import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const dashboardLinks = (
    <>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="my-recipe">My items</NavLink>
          </li>

          <li>
            <NavLink to="all-recipe">All items</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* dsfgag asdfg a */}
          <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar bg-base-300 w-full lg:hidden">
                <div className="flex-none ">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="mx-2 flex-1 px-2 lg:hidden">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="btn btn-ghost text-xl">
                      Cook<span className="text-primary -ml-2">_Verse</span>
                    </Link>
                    <Link to="/dashboard" className="underline text-primary">
                      Dashboard
                    </Link>
                  </div>
                </div>
                <div className="hidden flex-none  lg:hidden">
                  <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    {dashboardLinks}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {dashboardLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
