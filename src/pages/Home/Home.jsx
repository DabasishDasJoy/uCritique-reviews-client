import React from "react";
import About from "./About/About";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      {/* about */}
      <About></About>
    </div>
  );
};

export default Home;
