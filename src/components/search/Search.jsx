import React, { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
}

export default Search;
