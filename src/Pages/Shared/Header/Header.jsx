import React from "react";
import logo from "../../../assets/Logo/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <div className="text-center ">
        <img className="mx-auto" src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

     <div className="bg-slate-300 p-1 mt-5">
        <div className="flex gap-10">
            <button className="btn btn-error text-white">Latest</button>
            <Marquee speed={100} className="text-red-500">
            I can be a React component, multiple React components, or just some
            text.
            </Marquee>
        </div>
     </div>

     <Navbar></Navbar>
    </div>
  );
};

export default Header;
