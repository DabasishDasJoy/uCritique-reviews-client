import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { NavLink } from "react-router-dom";

//load service data
const ServiceCard = ({
  service: { ratings, serviceName, price, description, _id },
}) => {
  return (
    <Card className="rounded-none w-[400px]">
      <PhotoProvider
        speed={() => 500}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div>
          <PhotoView src="https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_192351722-320x200.jpg">
            <img
              src="https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_192351722-320x200.jpg"
              alt=""
              className="w-full"
            />
          </PhotoView>
        </div>
      </PhotoProvider>
      <CardBody className="text-left px-3">
        <Typography
          variant="small"
          className=" font-merriweather flex justify-between"
        >
          <span>Teeth</span>
          <span>{ratings}</span>
        </Typography>
        <Typography
          variant="h5"
          className="font-medium font-bree text-textPrimary"
        >
          {serviceName}
        </Typography>
        <Typography variant="small" className="font-merriweather ">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex px-3 items-center py-2  justify-between">
        <Typography className="text-orange-700 font-medium text-lg font-bree">
          {price}
        </Typography>
        <Button
          size="md"
          className="bg-secondary transition-colors ease-in-out delay-75 border-2 border-secondary rounded-sm shadow-none hover:bg-white hover:text-textPrimary hover:shadow-none px-3"
        >
          <NavLink to={"/login"} className="flex gap-1 items-center">
            View Details
            <FaArrowRight />
          </NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
