// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [data, setData] = useState([]);

  const apiGet = async () => {
    try {
      const response = await fetch(
        "https://gutendex.com/books/?ids=1513,37106,2701,145,2641,67979"
      );
      const booksObject = await response.json();
      const books = booksObject.results;
      console.log(books[0]);
      setData(books);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {}, []);

  apiGet();

  return (
    <div className="container-fluid">
      <div className="row p-5">
        <h2 className="col-12 ">Featured Books</h2>
      </div>
      <div className="row p-5">
        {data.map((item) => (
          <div className="cardiB col-12 col-md-2" key={item.id}>
            <img src={item.formats["image/jpeg"]} />
            <div className="cardiBody">
              <h5>{item.title}</h5>
              <p>{item.authors["0"].name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row p-5">
        <h2 className="col-12">Celebrate Pride Month</h2>
      </div>
      <div className="row p-5">
        {data.map((item) => (
          <div className="cardiB col-12 col-md-2" key={item.id}>
            <img src={item.formats["image/jpeg"]} />
            <div className="cardiBody">
              <h5>{item.title}</h5>
              <p>{item.authors["0"].name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
