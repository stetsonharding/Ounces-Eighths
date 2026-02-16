// src/pages/ShopByCategoryPage.jsx
import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import { categories } from "../categoryData.js"

export default function ShopByCategory() {
  return (
    <CategoryGrid
      items={categories}
      onItemClick={(item) => console.log("Clicked:", item.id)}
    />
  );
}
