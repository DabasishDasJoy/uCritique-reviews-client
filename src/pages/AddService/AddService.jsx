import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ValidationError from "../shared/ValidationError/ValidationError";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (d) => {
    axios({
      url: `https://ucritique-server.vercel.app/service?email=${user.email}`,
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        imgUrl: d.imgUrl,
        serviceName: d.name,
        description: d.description,
        price: d.price,
        ratings: d.ratings,
      },
    })
      .then((res) => {
        if (res.data.result.acknowledged) {
          toast.success("Succesfully added", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) =>
        toast.error(err.message, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  return (
    <div>
      <Helmet>
        <title>Add Service</title>
      </Helmet>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid  border-2 py-5"
            style={{
              backgroundImage: `url('http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2015/07/home-hero-image-3.jpg?id=1049')`,
            }}
          >
            <div className="grid grid-cols-4 border-none gap-6 p-6 rounded-sm ">
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
                    className="w-full rounded-smp-2 border p-2 border-gray-200 text-textPrimary"
                    {...register("name", {
                      required: "Service Name is required!",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <ValidationError
                              key={type}
                              message={message}
                            ></ValidationError>
                          ))
                        : null;
                    }}
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
                    className="w-full rounded-sm border p-2 border-gray-200 text-textPrimary"
                    {...register("imgUrl", {
                      required: "Image url is required!",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="imgUrl"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <ValidationError
                              key={type}
                              message={message}
                            ></ValidationError>
                          ))
                        : null;
                    }}
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
                    className="w-full rounded-sm  border p-2 border-gray-200 text-textPrimary"
                    {...register("price", {
                      required: "Price url is required!",
                      pattern: {
                        value: /^\d*\.?\d*$/,
                        message: "Numbers only!",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="price"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <ValidationError
                              key={type}
                              message={message}
                            ></ValidationError>
                          ))
                        : null;
                    }}
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
                    className="w-full rounded-sm  border p-2 border-gray-200 text-textPrimary"
                    {...register("ratings", {
                      required: "Ratings url is required!",
                      pattern: {
                        value: /^\d*\.?\d*$/,
                        message: "Numbers only!",
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="ratings"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <ValidationError
                              key={type}
                              message={message}
                            ></ValidationError>
                          ))
                        : null;
                    }}
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
                    className="w-full rounded-sm h-20 border p-2 border-gray-200 text-textPrimary0"
                    {...register("description", {
                      required: "Description is required!",
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="description"
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <ValidationError
                              key={type}
                              message={message}
                            ></ValidationError>
                          ))
                        : null;
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              size="md"
              type="submit"
              className="bg-tertiary transition-colors ease-in-out delay-75 border-2 border-tertiary rounded-sm shadow-none hover:bg-white hover:text-textPrimary hover:shadow-none px-3 flex gap-1 items-center justify-center w-[20%] mx-auto my-2"
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
