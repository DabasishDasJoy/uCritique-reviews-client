import React from "react";
import sign from "../../../assets/sign.png";
import FeatureCards from "./FeatureCards";

const About = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/11/shutterstock_272306351.jpg')`,
      }}
    >
      <FeatureCards></FeatureCards>
      <div className="flex items-center pt-10">
        <div className="px-10">
          <p>Dr. Jenna Wilson</p>
          <hr className="w-[5%] border border-primary bg-primary" />
          <h3 className="text-primary font-extrabold uppercase text-4xl my-3">
            Your Reliable Detal Surgeon
          </h3>
          <p>
            Dr. Jenna Wilson is is dedicated to providing her patients with the
            most beautiful smile together with the best dental protection
            available nowadays. Dr Jenna non malesuada erat, id consequat nunc.
            Nulla fermentum ipsum eget tortor laoreet varius.
          </p>
          <img src={sign} alt="signature" />
        </div>
        <div>
          <img
            src="https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/11/doktorka.png"
            alt="doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default About;