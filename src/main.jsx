import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Hero />
        <MainContent />
        <Footer />
    </React.StrictMode>
);
