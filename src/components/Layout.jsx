import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
