import React from "react";
import MainContent from "./MainContent";
import Testimonial from "./Testimonial";
import Events from "./Events";

const Home = () => {
  return (
    <>
    <div>
      <MainContent picks="Featured Picks" api="https://gutendex.com/books" />
      <MainContent
        picks="Top Picks"
        api="https://gutendex.com/books?search=romance"
      />
    </div>

    {/* Events Section */}
      <Events />
    {/* testimoial section */}
      <Testimonial />
    </>
  );
};

export default Home;
