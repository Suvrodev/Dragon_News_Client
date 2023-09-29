import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({to,children}) => {
  return (
    <>
      <NavLink
        to={`${to}`}
        className={({ isActive }) =>
          `text-lg mt-2 ms-0 cursor-pointer px-10 py-2 w-full ${isActive?'text-blue-500 font-bold ':''} `
        }
      >
        {children}
      </NavLink>
    </>
  );
};

export default ActiveRoute;
