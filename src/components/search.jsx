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
          placeholder="search a book..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Link to={`/searchresult/${searchInput}`}>
          <button type="submit" className="search-icon">
            <i className="fa-solid fa-book-open text-dark"></i>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
