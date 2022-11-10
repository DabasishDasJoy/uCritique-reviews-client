import { Button, Dialog } from "@material-tailwind/react";
import React, { Fragment } from "react";

const ConfirmationModal = ({
  open,
  handleOpen,
  targetReview,
  handleDeleteReview,
}) => {
  console.log(
    "🚀 ~ file: ConfirmationModal.jsx ~ line 16 ~ targetReview",
    targetReview
  );
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="text-center py-10 px-5 text-2xl text-orange-900">
          Are you sure you want to delete the review?
        </div>
        <div className="py-5 text-center">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleDeleteReview(targetReview);
              handleOpen();
            }}
          >
            <span>Confirm</span>
          </Button>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default ConfirmationModal;
