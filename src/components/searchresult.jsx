import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./catalog.css";

const SearchResults = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  useEffect(() => {
    const searchArray = query.split(" ");
    const newSearchArray = searchArray.filter((item) => item !== "");
    const searchString = newSearchArray.join("%20");

    const getAPI = async () => {
      try {
        const res = await fetch(
          `https://gutendex.com/books?search=${searchString}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data.results);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    getAPI();
  }, [query]);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="row px-4">
          <h2 className="col-12 pb-5" style={{ textAlign: "left" }}>
            Search Results
          </h2>
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
          {!loading && data && data.length === 0 && (
            <div className="col-12">No results found.</div>
          )}
          {data &&
            data.map((item) => (
              <div
                className={`gallery-card-parent-div col-4 col-lg-2 p-4 ${
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
};

export default SearchResults;
