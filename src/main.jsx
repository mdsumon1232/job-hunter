import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applied from "./Components/Applied/Applied.jsx";
import AppliedJobDetails from "./Components/AppliedJobDetails/AppliedJobDetails.jsx";
import Error404 from "./Components/Error404/Error404.jsx";
import Home from "./Components/Home/Home.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import Main from "./Components/Layout/Main.jsx";
import appliedJob from "./Components/Loader/Job.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:JobId",
        element: <JobDetails />,
        loader: () => fetch("/featured.json"),
      },
      {
        path: "/applied",
        element: <Applied />,
        loader: appliedJob,
      },
      {
        path: "/applied/jobs/detail/:id",
        element: <AppliedJobDetails />,
        loader: () => fetch("/public/featured.json"),
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
