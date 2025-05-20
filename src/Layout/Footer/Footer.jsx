import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="footer sm:footer-horizontal w-11/12 mx-auto  items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <a href="#" className="link">Cook_Verse</a>
          </p>
        </aside>
        Contact information.

        <nav className="grid-flow-col text-2xl gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/ashiful-mukto-b2b1a9258/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://x.com/i/flow/single_sign_on" target="_blank">
            <FaSquareXTwitter />
          </a>
          <a href="https://github.com/ashiful2002" target="_blank">
            <FaGithub />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
