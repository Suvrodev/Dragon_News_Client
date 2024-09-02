import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";

import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { FaCalendarDay } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const LeftNav = () => {
  const { baseUrl, user, signInByGoogle } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [dep, setDep] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // console.log("Categories: ",categories);

  const handleCategory = (id) => {
    console.log("Id: ", id);
  };

  return (
    <div className="sticky top-1">
      <div className=" md:hidden">
        <h4 className="text-xl font-bold mb-4">Login With</h4>
        <div className="flex gap-2">
          <button
            onClick={signInByGoogle}
            className="btn btn-outline btn-info  "
            disabled={user}
          >
            <FaGoogle className="text-yellow-500" />{" "}
            <p className="text-black "> Google</p>
          </button>

          <button className="btn btn-outline btn-info  " disabled={user}>
            <FaGithub className="text-black" />{" "}
            <p className="text-black"> Github</p>
          </button>
        </div>
      </div>

      {/* Category for desktop */}
      <div className="hidden md:block">
        <h1 className="text-xl font-bold mb-4">All Categories</h1>
        <div className=" grid grid-cols-1 gap-4 ">
          {categories.map((category) => (
            <Title
              category={category}
              key={category.id}
              handleCategory={handleCategory}
            ></Title>
          ))}
        </div>
      </div>

      {/* Category For Mobile  */}
      <div
        className="md:hidden collapse collapse-arrow "
        onClick={() => setDep(!dep)}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-bold mb-4">
          All Categories
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-0">
            {categories.map((category, idx) => (
              <Title
                category={category}
                key={idx}
                handleCategory={handleCategory}
                onClick={() => setDep(!dep)}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Image Start */}
        <div className="hidden md:grid grid-cols-1 gap-4  p-4 ">
          <div className="card card-compact bg-white shadow-xl">
            <figure>
              <img src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h2>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Sports</p>
                <FaCalendarDay />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-white shadow-xl ">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h2>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Sports</p>
                <FaCalendarDay />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-white shadow-xl">
            <figure>
              <img src={img3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h2>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Sports</p>
                <FaCalendarDay />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
