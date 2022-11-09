import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ServiceCard = () => {
  return (
    <Card className="rounded-none w-[300px]">
      <div>
        <img
          src="https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_192351722-320x200.jpg"
          alt=""
        />
      </div>
      <CardBody className="text-left p-2">
        <Typography
          variant="small"
          className=" font-merriweather flex justify-between"
        >
          <span>Teeth</span>
          <span>Rating</span>
        </Typography>
        <Typography
          variant="h5"
          className="font-medium font-bree text-textPrimary"
        >
          Dental Service
        </Typography>
        <Typography variant="small" className="font-merriweather ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          sagittis mi faucibus risus auctor scelerisque.
        </Typography>
      </CardBody>
      <CardFooter className="flex px-2 items-center py-2  justify-between">
        <Typography className="text-orange-700 font-medium font-bree">
          BDT 3000
        </Typography>
        <Button size="md" className="bg-secondary rounded-sm px-3">
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
