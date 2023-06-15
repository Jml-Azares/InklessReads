import React from "react";
import MainContent from "./MainContent";

function Literature() {
  return (
    <>
      <MainContent
        picks="Literature"
        api="https://gutendex.com/books?sort=popular"
        start={0}
        end={24}
      />
    </>
  );
}

export default Literature;
