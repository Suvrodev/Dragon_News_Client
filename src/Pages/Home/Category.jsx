import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsLayout from "./NewsLayout";
import titleAndGoUp from "../../JSFile/titleAndGoUp";
import { AuthContext } from "../Provider/AuthProvider";

const Category = () => {
  const { baseUrl } = useContext(AuthContext);
  titleAndGoUp("Home");
  let { id } = useParams();

  if (!id) {
    id = 0;
  }

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [id]);
  // console.log("Total News: ",news);

  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-4">Dragon News Home </h1>
      <div className="flex flex-col gap-4 ">
        {news.map((nws) => (
          <NewsLayout key={nws._id} nws={nws}></NewsLayout>
        ))}
      </div>
    </div>
  );
};

export default Category;
