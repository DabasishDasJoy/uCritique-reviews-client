import { Button } from "@material-tailwind/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";

const ServicesForHome = () => {
  // Services data load
  const {
    data: { result: services },
  } = useLoaderData();

  return (
    <div className="font-bree text-center">
      <p className="font-merriweather">The Best Reference</p>
      <hr className=" mx-auto w-[10%] border border-primary bg-primary" />
      <h1 className="text-6xl uppercase text-textPrimary my-3">
        My <span className="text-primary">Services</span>
      </h1>
      <p className="font-merriweather">Meet my best services</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-24 py-10">
        {/* service card on home */}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      {/* see all button */}
      <Button
        size="md"
        className="bg-secondary transition-colors ease-in-out delay-75 border-2 border-secondary rounded-sm shadow-none hover:bg-white hover:text-textPrimary hover:shadow-none px-5 py-2"
      >
        <NavLink to={"/services"} className="flex gap-1 items-center">
          See all
          <FaArrowRight />
        </NavLink>
      </Button>
    </div>
  );
};

export default ServicesForHome;
