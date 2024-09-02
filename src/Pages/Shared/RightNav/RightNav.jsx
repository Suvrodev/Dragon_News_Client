import React, { useContext } from "react";
import "./RightNav.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import { AuthContext } from "../../Provider/AuthProvider";

const RightNav = () => {
  const { user, googleLogin, successfullToast } = useContext(AuthContext);
  // console.log("now User: ",user);

  const signInByGoogle = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        successfullToast("Successfully Login");
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };
  return (
    <div className="sticky top-1 ">
      <h4 className="text-xl font-bold mb-4">Login With</h4>
      <div className="buttons  p-1">
        <button
          onClick={signInByGoogle}
          className="btn btn-outline btn-info  "
          disabled={user}
        >
          <FaGoogle className="text-yellow-500" />{" "}
          <p className="text-black">Login With Google</p>
        </button>

        <button className="btn btn-outline btn-info mt-2 " disabled={user}>
          <FaGithub className="text-black" />{" "}
          <p className="text-black">Login With Github</p>
        </button>
      </div>
      <h2 className="my-4 text-xl font-bold ">Find Us on</h2>
      <div className=" border p-2 flex flex-col  gap-5 ">
        <div className="facebook flex gap-2 items-center border">
          <button className="btn btn-sm btn-circle border-none bg-slate-100 text-blue-500">
            {" "}
            <FaFacebook />
          </button>{" "}
          Facebook
        </div>
        <div className="twitter flex gap-2 items-center">
          <button className="btn btn-sm btn-circle bg-slate-100  border-none text-blue-500">
            <FaTwitter />
          </button>{" "}
          Twitter
        </div>
        <div className="instagram flex gap-2 items-center">
          <button className="btn btn-sm btn-circle bg-slate-100  border-none text-red-500">
            <FaInstagram />
          </button>{" "}
          Instagram
        </div>
      </div>

      <QZone></QZone>
    </div>
  );
};

export default RightNav;
