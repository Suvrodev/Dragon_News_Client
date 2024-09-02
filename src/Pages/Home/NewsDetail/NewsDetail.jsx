import React, { useContext, useEffect, useState } from "react";
import "./NewsDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import EditorsInside from "../../EditorsInside/EditorsInside";
import titleAndGoUp from "../../../JSFile/titleAndGoUp";
import { AuthContext } from "../../Provider/AuthProvider";

const NewsDetail = () => {
  const { baseUrl } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  titleAndGoUp(id);

  const [news, setNews] = useState("");
  useEffect(() => {
    fetch(`${baseUrl}/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  console.log("kuchupu: ", news);

  const backToHome = (category_id) => {
    console.log("Go Home: ", category_id);
    navigate(`/categories/${category_id}`);
  };

  const { category_id, image_url, details, title } = news;

  return (
    <div>
      <div className="m-5">
        <img src={image_url} alt="" />
        <h1 className="text-xl font-bold my-2">{title}</h1>
        <p> {details} </p>
        <button
          onClick={() => backToHome(category_id)}
          className="flex items-center gap-2 bg-red-500 text-white p-3 mt-4"
        >
          {" "}
          <FaLongArrowAltLeft /> All news in this Category{" "}
        </button>
      </div>

      <EditorsInside></EditorsInside>
    </div>
  );
};

export default NewsDetail;
