// src/components/CategoryGrid.jsx
import React from "react";
import CategoryCard from "../components/CategoryCard.jsx"
import "../css/CategoryGrid.css";

export default function CategoryGrid({ title = "Shop by Category", items = [], onItemClick }) {
  return (
    <section className="cat-wrap">
      <div className="cat-bgGlow cat-bgGlow1" />
      <div className="cat-bgGlow cat-bgGlow2" />

      <h2 className="cat-title">{title}</h2>

      <div className="cat-grid">
        {items.map((item) => (
          <CategoryCard
            key={item.id}
            name={item.name}
            image={item.image}
            onClick={() => onItemClick?.(item)}
          />
        ))}
      </div>
    </section>
  );
}
