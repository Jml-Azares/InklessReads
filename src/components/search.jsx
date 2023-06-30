import { useState } from "react";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          placeholder="Search a book name..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Link to={`/searchresult/${searchInput}`}>
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
