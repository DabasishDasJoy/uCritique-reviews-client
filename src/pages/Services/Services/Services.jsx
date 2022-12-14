import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LoaderSpinner from "../../shared/LoaderSpinner/LoaderSpinner";

import ServiceCard from "../../shared/ServiceCard/ServiceCard";
const Services = () => {
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(10);
  const [currPage, setCurrPage] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const uri = `https://ucritique-server.vercel.app/services?size=${size}&page=${currPage}`;
  //  data fetch
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        setLoading(true);
        setServices(res.data.result);
        setCount(res.data.dataCount);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [uri]);

  //   calculate number of pages
  const pages = Math.ceil(count / size);
  return (
    <>
      {loading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div>
          <Helmet>
            <title>Service</title>
          </Helmet>
          <div className="relative">
            <img
              src="https://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/bgn-newsletter-subscribe.jpg"
              alt=""
              className="object-cover lg:h-full h-[400px]"
            />
            <div className="lg:px-10 absolute top-[50%] bottom-[50%] left-20 font-bree">
              <p>What I can offer you?</p>
              <hr className="w-[10%] border border-primary bg-primary" />
              <h1 className="lg:text-6xl text-2xl uppercase text-textPrimary my-3">
                My <span className="text-primary">Services</span>
              </h1>
              <p className="font-merriweather">
                Find your service here. And feel free to let me know.
              </p>
            </div>
          </div>
          <div
            className="bg-no-repeat bg-cover bg-center py-5"
            style={{
              backgroundImage: `url('http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/07/home-hero-image-3.jpg?id=1049')`,
            }}
          >
            <div className="lg:px-24 px-2 text-center grid lg:grid-cols-3 grid-cols-1 gap-10 py-10">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </div>

            {/* pagination */}
            <div className="flex justify-center space-x-1 text-white">
              <button
                onClick={() => setCurrPage(currPage - 1)}
                title="previous"
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-secondary border-secondary"
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              {[...Array(pages).keys()].map((idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setCurrPage(idx)}
                  className={`${
                    currPage == idx
                      ? "bg-white text-textPrimary"
                      : "bg-secondary text-white "
                  } inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md  hover:bg-white hover:text-textPrimary border-secondary`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrPage(currPage + 1)}
                title="next"
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-secondary border-secondary"
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Dropdown to select page size */}
              <div>
                <select
                  onChange={(e) => setSize(e.target.value)}
                  className="bg-white text-textPrimary rounded-md border border-secondary h-8"
                >
                  <option value="5">5</option>
                  <option value="10" defaultChecked>
                    10
                  </option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
