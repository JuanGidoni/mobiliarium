import React from "react";
import useFilterLogic from "./useFilterLogic";
import "./Filter.css";

function Filter({ categories, onFilterChange }) {
  const { selectedCategories, handleCategoryChange, getSelectedCategories } =
    useFilterLogic();

  const applyFilters = () => {
    onFilterChange({
      categories: getSelectedCategories(),
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
            checked={selectedCategories.includes(category)}
          />
          {category}
        </label>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filter;
