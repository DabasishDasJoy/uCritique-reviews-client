import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";

const ServicesForHome = () => {
  // Services data load
  const { result: services } = useLoaderData();
  console.log(
    "🚀 ~ file: ServicesForHome.jsx ~ line 8 ~ ServicesForHome ~ services",
    services
  );

  return (
    <div className="font-bree text-center">
      <p className="font-merriweather">The Best Reference</p>
      <hr className=" mx-auto w-[10%] border border-primary bg-primary" />
      <h1 className="text-6xl uppercase text-textPrimary my-3">
        My <span className="text-primary">Services</span>
      </h1>
      <p className="font-merriweather">Meet my best services</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-24 py-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesForHome;
