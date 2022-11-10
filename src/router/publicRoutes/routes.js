import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews/MyReviews";
import UpdateReview from "../../pages/MyReviews/UpdateReview/UpdateReview";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services/Services";
import PrivateRoute from "../privateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => {
          return axios.get(
            //could be fetched using first url also
            // "https://ucritique-server.vercel.app/services?size=3"
            "https://ucritique-server.vercel.app/homeservices"
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/update/:id",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
