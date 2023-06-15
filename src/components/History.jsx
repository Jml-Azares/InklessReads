import React from "react";
import MainContent from "./MainContent";

function History() {
  return (
    <>
      <MainContent
        picks="History"
        api="https://gutendex.com/books?sort=popular"
        start={0}
        end={24}
      />
    </>
  );
}

export default History;
