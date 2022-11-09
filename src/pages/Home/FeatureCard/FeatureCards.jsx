import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { TbDental } from "react-icons/tb";
const FeatureCards = () => {
  return (
    <div className="flex md:flex-row flex-col lg:p-0 py-5 lg:gap-0 gap-10 justify-center">
      <Card className="md:w-[400px] w-full h-[250px] relative rounded-none bg-primary text-white py-5">
        <div className="rounded-[50%] bg-secondary absolute left-5 top-[-40px] z-10 w-16 h-16 flex items-center justify-center">
          <TbDental className="w-[80%] h-[80%]" />
        </div>
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" className="mb-2">
            Best Dental Surgeon
          </Typography>
          <Typography variant="small">
            Best dental surgeon in the town. Most reliable for you dental care.
          </Typography>
          <Button className="bg-white rounded-none text-textPrimary w-[50%]">
            Read More
          </Button>
        </CardBody>
      </Card>
      <Card className="md:w-[400px] w-full h-[250px] relative rounded-none bg-tertiary text-white py-5">
        <div className="rounded-[50%] bg-secondary absolute left-5 top-[-40px] z-10 w-16 h-16 flex items-center justify-center">
          <TbDental className="w-[80%] h-[80%]" />
        </div>
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" className="mb-2">
            Painless Procedure
          </Typography>
          <Typography variant="small">
            I always follow the most painless and secure procedure.
          </Typography>
          <Button className="bg-white rounded-none text-textPrimary w-[50%]">
            Read More
          </Button>
        </CardBody>
      </Card>
      <Card className="md:w-[400px] w-full h-[250px] relative rounded-none bg-secondary text-white py-5">
        <div className="rounded-[50%] bg-secondary absolute left-5 top-[-40px] z-10 w-16 h-16 flex items-center justify-center">
          <TbDental className="w-[80%] h-[80%]" />
        </div>
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" className="mb-2">
            Most Secure Equipment
          </Typography>
          <Typography variant="small">
            I ensure the most secure and modern equipment.
          </Typography>
          <Button className="bg-white rounded-none text-textPrimary w-[50%]">
            Read More
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeatureCards;
