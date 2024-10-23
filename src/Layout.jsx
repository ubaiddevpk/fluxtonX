import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainLoader from "./Components/Loaders/MainLoader";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
const Layout = () => {
  const [loading, setLoading] = useState(true);
  let isMount = false;
  useEffect(() => {
    if (!isMount) {
      setInterval(() => {
        isMount = true;
        setLoading(false);
      }, 4000);
    }
  }, []);

  return loading ? (
    // <Loader />
    <div className="w-full h-screen flex items-center justify-center bg-[aliceblue]">
      <MainLoader />
    </div>
  ) : (
    <div className="w-[100vw] overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
