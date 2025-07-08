import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import ServiceDetailPage from "./Pages/Services/ServiceDetail"; // Adjust the import path as necessary

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:slug", // ✅ dynamic route for service details
        element: <ServiceDetailPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//commit
