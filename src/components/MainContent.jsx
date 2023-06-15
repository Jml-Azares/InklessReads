// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [data, setData] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [featPicks, setFeatPicks] = useState([]);

  const apiGet = async () => {
    try {
      const response = await fetch(
        "https://gutendex.com/books/?ids=1513,37106,2701,145,2641,67979"
      );
      const booksObject = await response.json();
      const books = booksObject.results;
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
          <div
            className="card-parent-div col-12 col-md-4 col-lg-2 p-3"
            key={item.id}
          >
            <div
              className="card"
              style={{ height: "100%", background: "#B8621B" }}
            >
              <div className="card-img p-3" style={{ height: "70%" }}>
                <img
                  src={item.formats["image/jpeg"]}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="card-body"
                style={{ height: "30%", borderTop: "1px solid black" }}
              >
                <h5>{item.title}</h5>
                <p>{item.authors["0"].name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row p-5">
        <h2 className="col-12">Top Picks</h2>
      </div>
      <div className="row p-5">
        {data.map((item) => (
          <div
            className="card-parent-div col-12 col-md-4 col-lg-2 p-3"
            key={item.id}
          >
            <div
              className="card"
              style={{ height: "100%", background: "#B8621B" }}
            >
              <div className="card-img p-3" style={{ height: "70%" }}>
                <img
                  src={item.formats["image/jpeg"]}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                className="card-body"
                style={{ height: "30%", borderTop: "1px solid black" }}
              >
                <h5>{item.title}</h5>
                <p>{item.authors["0"].name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
