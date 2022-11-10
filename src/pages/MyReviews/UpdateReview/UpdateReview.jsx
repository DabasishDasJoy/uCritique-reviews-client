import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ValidationError from "../../shared/ValidationError/ValidationError";

const UpdateReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const params = useParams();
  const [review, setReview] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://ucritique-server.vercel.app/review/${params.id}?email=${user.email}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => setReview(res.data.result));
  }, []);

  const onSubmit = (d) => {
    axios({
      method: "patch",
      url: `https://ucritique-server.vercel.app/reviews/${review._id}?email=${user?.email}`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        review: d.review,
        ratings: d.ratins,
      },
    })
      .then((res) => {
        if (res.data.result?.modifiedCount) {
          toast.success("Successfully updated");
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/bgn-newsletter-subscribe.jpg"
          alt=""
        />
        <div className="px-10 absolute top-[50%] bottom-[50%] left-20 font-bree">
          <p>Want to say more?</p>
          <hr className="w-[10%] border border-primary bg-primary" />
          <h1 className="text-6xl uppercase text-textPrimary my-3">
            Update <span className="text-primary"> Review</span>
          </h1>
          <p className="font-merriweather">
            Find your service here. And feel free to let me know.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col border-2 mx-auto my-5  p-8 w-[60%] lg:p-12 text-textPrimary"
        style={{
          backgroundImage: `url('http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/07/home-hero-image-3.jpg?id=1049')`,
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-3xl font-semibold text-center">
            Update Your Review!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <div className="flex flex-col w-full gap-3">
            {/* review */}
            <textarea
              rows="3"
              placeholder="Message..."
              defaultValue={review.review}
              className="p-4 rounded-md resize-none text-black border-2 "
              {...register("review", {
                required: "Review is required!",
              })}
            ></textarea>
            <ErrorMessage
              errors={errors}
              name="review"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />

            {/* ratings */}
            <input
              type="text"
              name="ratings"
              defaultValue={review.ratings}
              placeholder="Your Ratings"
              className="p-4 rounded-md border-2 text-black py-2"
              {...register("ratings", {
                required: "Ratings is required!",
                pattern: {
                  value: /^\d*\.?\d*$/,
                  message: "Numbers only!",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="ratings"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ValidationError
                        key={type}
                        message={message}
                      ></ValidationError>
                    ))
                  : null;
              }}
            />

            <Button
              type="submit"
              className="py-4 bg-tertiary my-8 font-semibold rounded-md "
            >
              Update feedback
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-center">
          <Link rel="noopener noreferrer" to="#" className="text-sm text-black">
            Maybe later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
