import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("https://ucritique-server.vercel.app/services?size=3");
        },
        element: <Home></Home>,
      },
    ],
  },
]);
