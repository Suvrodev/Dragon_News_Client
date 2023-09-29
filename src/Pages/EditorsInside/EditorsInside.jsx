import React from "react";
import EditorInside1 from '../../assets/editorsInsight1.png'
import EditorInside2 from '../../assets/editorsInsight2.png'
import EditorInside3 from '../../assets/editorsInsight3.png'
import { FaCalendarDay } from "react-icons/fa6";


const EditorsInside = () => {
  return (
    <div>
      <h1 className="text-xl font-bold my-4 mx-4">Editor Inside</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
        <div className="card card-compact bg-white shadow-xl">
          <figure>
            <img
              src={EditorInside1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
            <div className="flex gap-2 items-center">
                <FaCalendarDay/>
                <p>Jan 4, 2022</p>
            </div>
           
          </div>
        </div>
        <div className="card card-compact bg-white shadow-xl">
          <figure>
            <img
              src={EditorInside2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
            <div className="flex gap-2 items-center">
                <FaCalendarDay/>
                <p>Jan 4, 2022</p>
            </div>
           
          </div>
        </div>
        <div className="card card-compact bg-white shadow-xl">
          <figure>
            <img
              src={EditorInside3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
            <div className="flex gap-2 items-center">
                <FaCalendarDay/>
                <p>Jan 4, 2022</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsInside;
