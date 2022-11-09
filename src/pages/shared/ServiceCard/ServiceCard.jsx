import {
  Card,
  CardBody,
  CardFooter,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const ServiceCard = () => {
  return (
    <Card className="rounded-none w-[300px]">
      <div>
        <img
          src="https://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/shutterstock_192351722-320x200.jpg"
          alt=""
        />
      </div>
      <CardBody className="text-left ">
        <Typography variant="small" className=" font-merriweather ">
          Teeth
        </Typography>
        <Typography
          variant="h5"
          className="font-medium font-bree text-textPrimary"
        >
          Dental Service
        </Typography>
        <Typography
          variant="small"
          className="font-merriweather text-textPrimary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          sagittis mi faucibus risus auctor scelerisque.
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
