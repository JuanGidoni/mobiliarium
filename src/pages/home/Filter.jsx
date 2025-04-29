import React, { useState } from "react";
import "./Filter.css";

function Filter({ categories, priceRanges, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };
  const handlePriceRangeChange = (priceRange) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(priceRange)
        ? prev.filter((item) => item !== priceRange)
        : [...prev, priceRange]
    );
  };

  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      priceRanges: selectedPriceRanges,
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
      <h3>Filter by Price Range</h3>
      {priceRanges.map((priceRange) => (
        <label key={priceRange}>
          <input
            type="checkbox"
            value={priceRange}
            onChange={() => handlePriceRangeChange(priceRange)}
          />
          {priceRange}
        </label>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filter;
