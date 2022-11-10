import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import AddReview from "../AddReview/AddReview";
import Review from "../Review/Review";
const ServiceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  console.log(
    "🚀 ~ file: ServiceDetails.jsx ~ line 20 ~ ServiceDetails ~ reviews",
    reviews
  );
  const {
    data: {
      result: { serviceName, description, imgUrl, price, ratings, _id },
    },
  } = useLoaderData();

  //   Load service
  const uri = "https://ucritique-server.vercel.app/services?size=10";
  //  service data fetch
  useEffect(() => {
    axios.get(uri).then((res) => {
      setServices(res.data.result);
    });
  }, []);

  //   review data fetch

  useEffect(() => {
    axios
      .get(`https://ucritique-server.vercel.app/reviews/${_id}`)
      .then((res) => setReviews(res.data.result));
  }, []);

  //login and reloate to the same route
  const handleLoginToAddReview = () => {
    navigate("/login", { state: { from: location } });
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/bgn-newsletter-subscribe.jpg"
          alt=""
        />
        {/* Banner */}
        <div className="px-10 absolute top-[50%] bottom-[50%] left-20 font-bree">
          <p>More about</p>
          <hr className="w-[10%] border border-primary bg-primary" />
          <h1 className="text-6xl uppercase text-textPrimary my-3">
            <span className="text-primary">{serviceName}</span>
          </h1>
          <p className="font-merriweather">
            Find your service here. And feel free to let me know.
          </p>
        </div>
      </div>

      {/* Details */}
      <div
        className="flex gap-10 py-5"
        style={{
          backgroundImage: `url('http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/07/home-hero-image-3.jpg?id=1049')`,
        }}
      >
        {/* Details about service */}
        <div className="w-2/3">
          <div className="w-[80%] mx-auto bg-white p-10">
            <img src={imgUrl} alt="" className="w-full" />
            <p className="font-merriweather my-3">{description}</p>
            <div className="flex justify-between items-center">
              <p className="font-bree font-medium text-2xl text-orange-700">
                {price}
              </p>
              <p className="text-orange-700">{ratings}</p>
            </div>
          </div>
        </div>

        {/* Other info */}
        <div className="w-1/3 ">
          <div className="w-[80%] bg-white py-5">
            <h4 className="text-3xl text-center text-secondary">
              Other Services
            </h4>
            <hr className="w-[20%] border border-primary bg-primary mx-auto my-2" />
            <div className="px-10 ">
              {services.map((service) => (
                <Link
                  key={service._id}
                  className="border-b-2 mt-2 flex items-center gap-4 hover:text-primary transition delay-75 text-textPrimary font-merriweather"
                >
                  <BsFillArrowRightCircleFill />
                  {service.serviceName}
                </Link>
              ))}
              <div>
                <Button
                  size="md"
                  className="w-full bg-secondary mx-auto transition-colors ease-in-out delay-75 border-2 border-secondary rounded-sm shadow-none hover:bg-white hover:text-textPrimary hover:shadow-none px-5 py-2 mt-5"
                >
                  <Link
                    to={"/services"}
                    className="flex gap-1 items-center justify-center"
                  >
                    Go back to services
                    <FaArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className="font-bree text-center my-5">
        <p className="font-merriweather">Reviews</p>
        <hr className=" mx-auto w-[10%] border border-primary bg-primary" />
        <h1 className="text-4xl uppercase text-textPrimary my-3">
          What they say
        </h1>

        {/* review */}
        <div className="">
          {reviews.length ? (
            reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))
          ) : (
            <p>No reviews</p>
          )}

          {/* add review on conditional */}
          {user && user.uid ? (
            <AddReview></AddReview>
          ) : (
            <div className="bg-orange-100 w-[50%] mx-auto py-5">
              <p>
                Please{" "}
                <button
                  onClick={handleLoginToAddReview}
                  className="text-primary underline"
                >
                  Log In{" "}
                </button>{" "}
                to add a feedback
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
