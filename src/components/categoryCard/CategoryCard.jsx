import React from "react";
import Image from "../image/Image";
import "./CategoryCard.css";

function CategoryCard({ title, imageUrl }) {
  return (
    <div className="category-card">
      <Image url={imageUrl} alt={title} className="category-image" />
      <h2 className="category-title">{title}</h2>
    </div>
  );
}

export default CategoryCard;
