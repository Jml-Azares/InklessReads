import React from "react";
import Home from "./components/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";

        const App = () => {
            return (
                <>
                     
                        <Routes>
                            <Route element={<Layout />}>
                                <Route path ="/" element = {<Home />} />
                                <Route path ="/about-us" element = {<AboutUs />} />

                            </Route>
                                <Route path = "*" element = {<NoPage />} />
                        </Routes>
                        
                    
                </>
            ); 
        };
        export default App;

