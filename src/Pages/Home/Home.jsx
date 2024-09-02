import React, { useEffect } from "react";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/categories/0");
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home || Dragon News</title>
      </Helmet>

      {/* <Category></Category> */}
    </div>
  );
};

export default Home;
