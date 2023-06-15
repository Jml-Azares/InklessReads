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
        start={0}
        end={6}
      />
      <MainContent
        picks="Top Picks"
        api="https://gutendex.com/books/?search=science"
        start={0}
        end={6}
      />
    </div>
  );
};

export default Home;
