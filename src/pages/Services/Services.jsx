import axios from "axios";
import React, { useEffect, useState } from "react";

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
      {services.map((service) => (
        <h1>Card</h1>
      ))}
    </div>
  );
};

export default Services;
