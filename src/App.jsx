import React, { useState } from "react";
import Home from "./components/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";
import Literature from "./components/Literature";
import ScienceFiction from "./components/Science-Fiction";
import History from "./components/History";
import Book from "./components/BookDetails";
import Checkout from "./components/Checkout";
import ContactPage from "./components/contactPage";
import Politics from "./components/politics";
import Romance from "./components/romance";
import SearchResults from "./components/searchresult";
import LandingPage from "./components/LandingPage";
import UserProfile from "./UserProfile";
import AdminDash from "./components/AdminDash";
import Blogs from "./components/blogs";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout cart={cart} setCart={setCart} />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/scienceFiction" element={<ScienceFiction />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/history" element={<History />} />
          <Route path="/romance" element={<Romance />} />
          <Route
            path="/book/:id"
            element={<Book cart={cart} setCart={setCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} setCart={setCart} />}
          />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/searchresult/:query" element={<SearchResults />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
