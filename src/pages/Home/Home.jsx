import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <About></About>
      <Contact></Contact>
      <Services></Services>
    </div>
  );
};

export default Home;
