import React from "react";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";

const ServicesForHome = () => {
  return (
    <div className="font-bree text-center">
      <p className="font-merriweather">The Best Reference</p>
      <hr className=" mx-auto w-[10%] border border-primary bg-primary" />
      <h1 className="text-6xl uppercase text-textPrimary">
        My <span className="text-primary">Services</span>
      </h1>
      <p className="font-merriweather">Meet my best services.</p>
      <div>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default ServicesForHome;
