import React, { useState, useEffect } from "react";
import { useFetch } from "../API/fetchAPI";

// gutendex.com/books
// https://gutendex.com/
// https://gutendex.com/books/?ids=1,2,3,4,5,6

export default function MainContent() {
  const [data, setData] = useState([]);

  const apiGet = async () => {
    const response = await fetch("https://gutendex.com/books");
    const booksObject = await response.json();
    const books = booksObject.results;

    setData(books);
  };

  useEffect(() => {}, []);

  return (
    <div>
      API OBJECT <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <div>
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
