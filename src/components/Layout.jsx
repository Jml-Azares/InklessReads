import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
