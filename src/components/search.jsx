import React, { useState } from "react";
import "./search.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search a book..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
