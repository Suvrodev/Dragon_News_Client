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
        <div className="flex gap-2 md:gap-4">
          <button className="btn outline-none border-none rounded-none bg-[#D72050] hover:bg-[#D72050 ] text-white">
            Latest
          </button>
          <Marquee speed={100} className="text-[ #403F3F] font-bold">
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
