import React from "react";
import MainContent from "./MainContent";

function ScienceFiction() {
  return (
    <>
      <MainContent
        picks="Science Fiction"
        api="https://gutendex.com/books?sort=popular"
        start={0}
        end={24}
      />
    </>
  );
}

export default ScienceFiction;
