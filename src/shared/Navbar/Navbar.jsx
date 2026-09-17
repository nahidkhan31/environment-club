import React from "react";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100/75 backdrop-blur-md shadow-sm px-4 lg:px-8">
      {/* Left side: Logo */}
      <div className="navbar-start">
        <div className="flex items-center">
          <Logo />
        </div>
      </div>

      {/* Right side: Desktop menu & Mobile dropdown combined properly */}
      <div className="navbar-end">
        {/* Desktop menu (large screen) */}
        <ul className="menu menu-horizontal px-1 gap-x-4 text-sm font-semibold hidden lg:flex">
          {nav}
        </ul>

        {/* Small screen dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100/90 backdrop-blur-md rounded-2xl w-52 text-sm font-semibold border border-base-200"
          >
            {nav}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;