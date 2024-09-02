import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, Logout_ } = useContext(AuthContext);
  // console.log("user Header: ", user?.photoURL);

  const navItems = (
    <div className="lg:flex items-center justify-center">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/categories/0"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-extrabold" : ""
          }
          to="/career"
        >
          Career
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar  h-28 mb-4 text-black mt-10">
      {/* Logo And Webpage Div Start */}
      <div className="navbar-start ">
        {/* Bar Icon Box Start */}
        <div className="dropdown">
          {/* Bar Icon Start */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* Bar Icon End */}

          {/* For Mobile Page start */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white z-10  "
          >
            {navItems}
          </ul>
          {/* For Mobile Page End */}
        </div>
        {/* Bar Icon Box End */}

        {/* Logo and Website Name Start */}
        <h1 className="hidden md:block md:text-4xl font-bold ">Dragon News</h1>
        {/* Logo and Website Name End */}
      </div>
      {/* Logo And Webpage Div End */}

      {/* For Computer Page Start */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {/* For Computer Page End */}

      {/* Right Blog Button Start */}
      <div className="navbar-end">
        {user ? (
          <>
            <img
              className="w-[35px] rounded-full mr-4"
              src={user?.photoURL}
              alt=""
            />
            <button onClick={Logout_} className="btn btn-neutral text-white ">
              {" "}
              <Link to={"/"}> Logout </Link>{" "}
            </button>
          </>
        ) : (
          <div className="flex items-center ">
            <p className="w-[35px] rounded-full ">
              <FaUser className="" />
            </p>
            <button className="btn btn-neutral text-white ">
              {" "}
              <Link to={"/login"}> Login </Link>{" "}
            </button>
          </div>
        )}
      </div>
      {/* Right Blog Button End */}
    </div>
  );
};

export default Navbar;
