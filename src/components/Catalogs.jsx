import React, { useEffect, useState } from "react";
import useFetch from "../API/useFetch";
import { Link } from "react-router-dom";
import "./catalog.css";

function Catalog({ api, catalog }) {
  const { data, loading, error } = useFetch(api);
  const [books, setBooks] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    setBooks(data);
  }, [data]);

  const compareByProperty = (a, b, property) => {
    if (a.length !== 0 && b.length !== 0) {
      return a[0][property].localeCompare(b[0][property]);
      // console.log(a[0][property].localeCompare(b[0][property]));
    } else if (a.length !== 0) {
      return -1;
    } else if (b.length !== 0) {
      return 1;
    } else {
      return 0;
    }
  };

  const sort = (criteria) => {
    const sortedBooks = [...books];

    if (criteria === "title") {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
      setBooks(sortedBooks);
    } else if (criteria === "author") {
      sortedBooks.sort((a, b) =>
        compareByProperty(a.authors, b.authors, "name")
      );
      setBooks(sortedBooks);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mx-auto my-5">
        <div className="px-4 d-flex justify-content-between">
          <h2 className="">{catalog}</h2>
          <select
            className="text-dark p-1 border-0 bg-light form-control lh-1 text-center mb-1"
            style={{ width: "100px" }}
            onChange={(e) => {
              sort(e.target.value);
            }}
          >
            <option value="" className="">
              --Sort--
            </option>
            <option value="title" className="">
              Title
            </option>
            <option value="author" className="">
              Author
            </option>
          </select>
        </div>
        <div className="row m-0">
          {error && <div>{error}</div>}
          {loading && (
            <div className="col-12 d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {books &&
            books.map((item) => (
              <div
                className={`gallery-card-parent-div col-4 col-lg-2 p-1 p-md-4 ${
                  hoveredItem === item.id ? "hovered" : ""
                }`}
                key={item.id}
                style={{ position: "relative" }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="gallery-card-img py-2">
                  <Link to={`/book/${item.id}`}>
                    <img
                      src={item.formats["image/jpeg"]}
                      style={{ width: "100%" }}
                      alt={item.title}
                      className="book-cover-image"
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
