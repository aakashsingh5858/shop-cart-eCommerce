import React from "react";
import "./home.css";
import Banner from "../components/banner/Banner";
import HomeCategory from "../components/home-category/HomeCategory";

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <HomeCategory />
    </div>
  );
};

export default Home;
