import React from "react";
import Hero from "./Hero";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div>
      <Hero />
      <MainContent picks="Featured Picks" />
      <MainContent picks="Top Picks" />
    </div>
  );
};

export default Home;
