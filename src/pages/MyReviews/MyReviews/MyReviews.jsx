import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import MyReviewsCard from "../MyReviesCard/MyReviewsCard";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios({
      url: `https://ucritique-server.vercel.app/myreviews?email=${user.email}`,
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => setReviews(res.data.result))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteReview = (id) => {
    axios({
      method: "delete",
      url: `https://ucritique-server.vercel.app/reviews/${id}?email=${user.email}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.data.result.deletedCount) {
          toast.success(`Welcome! You are logged in!`, {
            position: toast.POSITION.TOP_CENTER,
          });

          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        }
      })
      .catch((err) => console.error(err));
  };
  const handleEditReview = (id) => {};
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
      <div
        className="grid grid-cols-3 gap-5 py-10 px-24"
        style={{
          backgroundImage: `url('http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/07/home-hero-image-3.jpg?id=1049')`,
        }}
      >
        {reviews.map((review) => (
          <MyReviewsCard
            key={review._id}
            review={review}
            handleDeleteReview={handleDeleteReview}
            handleEditReview={handleEditReview}
          ></MyReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
