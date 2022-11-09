import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import ServiceDetails from "../../pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => {
          return axios.get(
            "https://ucritique-server.vercel.app/services?size=3"
          );
        },
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) => {
          return axios.get(
            `https://ucritique-server.vercel.app/services/${params.id}`
          );
        },
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);
