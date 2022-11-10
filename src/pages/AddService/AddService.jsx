import { Button } from "@material-tailwind/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AddService = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/bgn-newsletter-subscribe.jpg"
          alt=""
        />
        <div className="px-10 absolute top-[50%] bottom-[50%] left-20 font-bree">
          <p>New service arrived?</p>
          <hr className="w-[10%] border border-primary bg-primary" />
          <h1 className="text-6xl uppercase text-textPrimary my-3">
            Add <span className="text-primary">Services</span>
          </h1>
          <p className="font-merriweather">Add new service here.</p>
        </div>
      </div>
      <div>
        <section className="p-6 text-textPrimary">
          <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid  border border-primary py-5">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-sm shadow-sm">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-2xl font-bree">
                  Service Information
                </p>
                <p className="text-sm font-merriweather">
                  Add service infromation.
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="ServiceName" className="text-sm">
                    Service Name
                  </label>
                  <input
                    id="ServiceName"
                    type="text"
                    placeholder="Service name"
                    className="w-full rounded-sm  border px-2 border-gray-200 text-textPrimary"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="imgUrl" className="text-sm">
                    Img Url
                  </label>
                  <input
                    id="imgUrl"
                    type="text"
                    placeholder="Img Url"
                    className="w-full rounded-sm  border px-2 border-gray-200 text-textPrimary"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="price" className="text-sm">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    placeholder="Price"
                    className="w-full rounded-sm  border px-2 border-gray-200 text-textPrimary"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="rating" className="text-sm">
                    Ratings
                  </label>
                  <input
                    id="ratings"
                    type="text"
                    placeholder="Ratings"
                    className="w-full rounded-sm  border px-2 border-gray-200 text-textPrimary"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="description" className="text-sm">
                    Description
                  </label>
                  <input
                    id="description"
                    type="textarea"
                    placeholder="Description"
                    className="w-full rounded-sm h-20 border px-2 border-gray-200 text-textPrimary0"
                  />
                </div>
              </div>
            </fieldset>
            <Button
              size="md"
              className="bg-secondary transition-colors ease-in-out delay-75 border-2 border-secondary rounded-sm shadow-none hover:bg-white hover:text-textPrimary hover:shadow-none px-3 flex gap-1 items-center justify-center w-[20%] mx-auto my-2"
            >
              Add Service
              <FaArrowRight />
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddService;
