import React from "react";
import MainContent from "./MainContent";
import Testimonial from "./Testimonial";

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

    {/* testimoial section */}
      <Testimonial />
    </>
  );
};

export default Home;
