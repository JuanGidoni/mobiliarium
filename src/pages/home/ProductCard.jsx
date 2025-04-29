import React from "react";
import "./ProductCard.css";

function ProductCard({ image, title, description, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default ProductCard;
