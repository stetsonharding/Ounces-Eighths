// src/components/CategoryCard.jsx
import React from "react";
import "../css/CategoryGrid.css"

export default function CategoryCard({ name, image, onClick }) {
  return (
    <button className="cat-card" type="button" onClick={onClick}>
      <div className="cat-media">
        <div className="cat-shine" />
        <img className="cat-img" src={image} alt={name} loading="lazy" />
      </div>

      <div className="cat-label">
        <span className="cat-text">{name}</span>
      
         <span className="cat-shop">Shop →</span>
      </div>
    </button>
  );
}
