import React from "react";
import sign from "../../../assets/sign.png";
import FeatureCards from "./FeatureCards";

const About = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed font-bree my-10"
      style={{
        backgroundImage: `url('https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/11/shutterstock_272306351.jpg')`,
      }}
    >
      <FeatureCards></FeatureCards>
      {/* About the doctor */}
      <div className="flex md:flex-row flex-col items-center pt-10 lg:px-20">
        <div className="px-10">
          <p>Dr. Jenna Wilson</p>
          <hr className="w-[5%] border border-primary bg-primary" />
          <h3 className="text-primary font-bold uppercase text-4xl my-4 leading-8">
            Your Reliable Detal Surgeon
          </h3>
          <p className="font-merriweather">
            Dr. Jenna Wilson is is dedicated to providing her patients with the
            most beautiful smile together with the best dental protection
            available nowadays. Dr Jenna non malesuada erat, id consequat nunc.
            Nulla fermentum ipsum eget tortor laoreet varius.
          </p>
          <img src={sign} alt="signature" className="mt-2" />
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
