import React, { useState } from "react";
import "./Filter.css";
import Button from "../button/Button";
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
      <Button text="Apply Filters" onClick={applyFilters} />
    </div>
  );
}

export default Filter;
