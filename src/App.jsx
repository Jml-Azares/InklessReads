import React from "react";
import "./index.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <MainContent />
            <Footer />
        </>
    );
}
