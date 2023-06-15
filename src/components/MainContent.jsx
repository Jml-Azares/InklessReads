// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

import React, { useState, useEffect } from "react";
import "./MainContent.css";

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
              className="card-parent-div col-12 col-md-4 col-lg-2 px-2 py-4"
              key={item.id}
            >
              <div className="card">
                <div className="card-img p-1">
                  <img src={item.formats["image/jpeg"]} />
                </div>
                <div className="card-body">
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
