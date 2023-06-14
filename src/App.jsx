import React from "react";
import "./index.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./pages/AboutUs";
// import NoPage from "./pages/NoPage";
// import Layout from "./pages/Layout";


//         const App = () => {
//             return (
//                 <>
//             <Routes>
//                 <Route element={<Layout />}>
//                     <Route path ="/" element = {<Home />} />
//                     <Route path ="/AboutUs" element = {<AboutUs />} />

//                 </Route>
//                     <Route path = "*" element = {<NoPage />} />
//             </Routes>
//             </>
//         );   
//     };
//     export default App

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
