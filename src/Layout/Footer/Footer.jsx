import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content mt-10">
      <footer className="footer w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center py-8 gap-6">
        {/* Logo and copyright */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-2xl font-bold text-white">
            Cook<span className="text-primary">_Verse</span>
          </Link>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} Cook_Verse. All rights reserved.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col md:flex-row gap-2 text-sm items-center">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/all-recipe" className="hover:underline">
            All Recipes
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </div>

        {/* Social links */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/ashiful-mukto-b2b1a9258/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/i/flow/single_sign_on"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://github.com/ashiful2002"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
