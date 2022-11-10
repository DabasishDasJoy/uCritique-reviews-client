import React from "react";
import { Helmet } from "react-helmet";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { default as ServicesForHome } from "../ServicesForHome/ServicesForHome";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <About></About>
      <ServicesForHome></ServicesForHome>
      <Contact></Contact>
    </div>
  );
};

export default Home;
