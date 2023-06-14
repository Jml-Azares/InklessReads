// gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [titles, setTitles] = useState([]);
  const [cover, setCover] = useState([]);

  const apiGet = async () => {
    try {
      const response = await fetch("https://gutendex.com/books");
      const booksObject = await response.json();
      const books = booksObject.results;

      const fetchedTitles = books.map((book) => book.title);
      const fetchedCovers = books.map(
        (book) => book.format && book.format["image/jpeg"]
      );

      setTitles(fetchedTitles);
      setCover(fetchedCovers);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      API OBJECT <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <div>
        <ul>
          {titles.map((title, index) => (
            <div key={index}>
              <li>{title}</li>
            </div>
          ))}
          {cover.map((cover, index) => (
            <img key={index} src={cover} alt="Book cover" />
          ))}
        </ul>
      </div>
    </div>
  );
}
