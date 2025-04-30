import React, { useState } from "react";
import "./Filter.css";

function Filter({ categories, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
    });
  };

  return (
    <div className="filter-container">
      <h3>Filter by Category</h3>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            value={category}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filter;
