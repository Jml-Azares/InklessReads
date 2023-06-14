// https://gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [data, setData] = useState([]);

  const apiGet = async () => {
    try {
      const response = await fetch("https://gutendex.com/books");
      const booksObject = await response.json();
      const books = booksObject.results;

      console.log(books);
      setData(books);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {}, []);

  apiGet();

  return (
    <div>
      {data.map((item, index) => (
        <div className="cardiB" key={index}>
          <img src={item.formats["image/jpeg"]} />
          <div className="cardiBody">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
