import React from "react";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div>
      <MainContent
        picks="Featured Picks"
        api="https://gutendex.com/books/?ids=1513,2701,145,2641,67979,100"
      />
      <MainContent
        picks="Top Picks"
        api="https://gutendex.com/books/?ids=394,2160,6761,4085,1259,6593"
      />
    </div>
  );
};

export default Home;
