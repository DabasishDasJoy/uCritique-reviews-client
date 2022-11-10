import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ThreeCircles
        height="100"
        width="100"
        color="#005b88"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default LoaderSpinner;
