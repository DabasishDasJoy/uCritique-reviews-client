import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(10);
  const [currPage, setCurrPage] = useState(0);
  const [count, setCount] = useState(0);

  const uri = `https://ucritique-server.vercel.app/services?size=${size}&page=${currPage}`;
  //  data fetch
  useEffect(() => {
    axios.get(uri).then((res) => {
      setServices(res.data.result);
      setCount(res.data.dataCount);
    });
  }, [uri]);

  //   calculate number of pages
  const pages = Math.ceil(count / size);
  return (
    <div>
      <div className="relative">
        <img
          src="https://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/bgn-newsletter-subscribe.jpg"
          alt=""
        />

        <div className="px-10 absolute top-[50%] bottom-[50%] left-20 font-bree">
          <p>What I can offer you?</p>
          <hr className="w-[10%] border border-primary bg-primary" />
          <h1 className="text-6xl uppercase text-textPrimary my-3">
            My <span className="text-primary">Services</span>
          </h1>
          <p className="font-merriweather">
            Find your service here. And feel free to let me know.
          </p>
        </div>
      </div>
      <div className="px-24 grid grid-cols-3 gap-5 py-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
