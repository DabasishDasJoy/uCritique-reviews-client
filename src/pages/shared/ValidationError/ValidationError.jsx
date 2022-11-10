import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const ValidationError = ({ message }) => {
  return (
    <span className="flex gap-1 items-center text-red-500 mt-2 text-xs">
      <BiErrorCircle className="w-5" />
      {message}
    </span>
  );
};

export default ValidationError;
