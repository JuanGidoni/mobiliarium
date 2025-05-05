import React from "react";
import useFilterLogic from "./useFilterLogic";
import "./Filter.css";
import Button from "../button/Button";
function Filter({ categories, onFilterChange, headerText = "Filter by Category" }) {
  const { selectedCategories, handleCategoryChange, getSelectedCategories } =
    useFilterLogic();

  const applyFilters = () => {
    onFilterChange({
      categories: getSelectedCategories(),
    });
  };

  return (
    <div className="filter-container">
      <h3>{headerText}</h3>
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
      <Button text="Apply Filters" onClick={applyFilters} />
    </div>
  );
}

export default Filter;
