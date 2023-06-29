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
import LoginReg from "./components/LoginReg";
import Faq from "./components/Faq";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import Politics from "./components/politics";
import Romance from "./components/romance";
import SearchResults from "./components/searchresult";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Routes>
        <Route element={<Layout cart={cart} setCart={setCart} />}>
          <Route path="/" element={<Home />} />
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
          <Route path="/loginReg" element={<LoginReg />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/searchresult/:query" element={<SearchResults />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
