import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ValidationError from "../../shared/ValidationError/ValidationError";

const AddReview = ({ service: { _id, serviceName, imgUrl } }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const { user } = useContext(AuthContext);

  const onSubmit = (d) => {
    axios({
      url: `https://ucritique-server.vercel.app/reviews?email=${user.email}`,
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        serviceName: serviceName,
        serviceImg: imgUrl,
        serviceId: _id,
        author_name: user.displayName,
        author_email: user.email,
        imgUrl: user.photoURL,
        review: d.review,
        ratings: d.ratings,
      },
    })
      .then((res) => {
        if (res.data.result.acknowledged) {
          toast.success(`Added successfully!`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) =>
        toast.error(err.message, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  return (
    <div>
      <div className="flex flex-col border-2 mx-auto my-5  p-8 w-[60%] lg:p-12 text-textPrimary">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <div className="flex flex-col w-full gap-3">
            {/* review */}
            <textarea
              rows="3"
              placeholder="Message..."
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
              id=""
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
              Leave feedback
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

export default AddReview;
