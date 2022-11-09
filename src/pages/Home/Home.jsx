import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { default as ServicesForHome } from "./ServicesForHome/ServicesForHome";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <About></About>
      <Contact></Contact>
      <ServicesForHome></ServicesForHome>
    </div>
  );
};

export default Home;
