import React from "react";
import "./ProductCard.css";

function ProductCard({ image, title, description, link }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <a href={link} className="product-price">
        Learn More
      </a>
    </div>
  );
}

export default ProductCard;
