import { Button } from "@material-tailwind/react";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-secondary text-white flex justify-between items-center p-10 mt-10">
      <div>
        <p>Interested?</p>
        <h4 className="font-bold text-2xl">Contact and Schedule Your Visit</h4>
      </div>
      <Button className="bg-white text-textPrimary rounded-none">
        Contact Us
      </Button>
    </div>
  );
};

export default Contact;
