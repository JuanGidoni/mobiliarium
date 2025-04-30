import { useState } from "react";

const useFilterLogic = (initialCategories = []) => {
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const getSelectedCategories = () => selectedCategories;

  return {
    selectedCategories,
    handleCategoryChange,
    getSelectedCategories,
  };
};

export default useFilterLogic;
