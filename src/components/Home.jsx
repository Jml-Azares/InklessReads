import React from "react";
import MainContent from "./MainContent";
import Testimonial from "./Testimonial";
import Events from "./Events";

const Home = () => {
  return (
    <>
      <div>
        <MainContent
          picks="Featured Picks"
          api="https://gutendex.com/books/?page=2&topic=mystery"
        />
        <MainContent
          picks="Adult"
          api="https://gutendex.com/books?search=romance"
        />
        <MainContent
          picks="Kids"
          api="https://gutendex.com/books/?page=2&topic=children"
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
