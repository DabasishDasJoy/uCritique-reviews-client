import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const AddReview = () => {
  return (
    <div>
      <div className="flex flex-col border-2 border-primary mx-auto my-5  p-8 w-[60%] lg:p-12 text-textPrimary">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <div className="flex flex-col w-full gap-3">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none text-black border-2 "
            ></textarea>
            <input
              type="text"
              name="ratings"
              id=""
              placeholder="Your Ratings"
              className="p-4 rounded-md border-2 text-black py-2"
            />
            <Button className="py-4 bg-primary my-8 font-semibold rounded-md ">
              Leave feedback
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            rel="noopener noreferrer"
            to="#"
            className="text-sm text-gray-400"
          >
            Maybe later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
