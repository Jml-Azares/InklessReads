import React from "react";
import Hero from "./Hero";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div>
      <Hero />
      <MainContent
        picks="Featured Picks"
        api="https://gutendex.com/books?sort=popular"
      />
      <MainContent
        picks="Top Picks"
        api="https://gutendex.com/books/?search=science"
      />
    </div>
  );
};

export default Home;
