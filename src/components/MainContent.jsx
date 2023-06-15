// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

import React, { useState, useEffect } from "react";

export default function MainContent({ picks, api, start, end }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiGet = async () => {
    try {
      const response = await fetch(api);
      const booksObject = await response.json();
      const books = booksObject.results;
      const booksFiltered = books.slice(start, end);

      setData(booksFiltered);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row my-5 py-5">
        <div className="row px-5">
          <h2 className="col-12 ">{picks}</h2>
        </div>
        <div className="row px-5">
          {data.map((item) => (
            <div
              className="card-parent-div col-12 col-md-4 col-lg-2 p-3"
              key={item.id}
            >
              <div
                className="card"
                style={{ height: "400px", background: "#B8621B" }}
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
                  style={{
                    height: "30%",
                    borderTop: "1px solid black",
                    color: "white",
                    overflow: "hidden",
                  }}
                >
                  <p>{item.title}</p>
                  <p>{item.authors["0"].name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
