"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeGrid.module.css";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const matches = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(q) ||
      recipe.cuisine.toLowerCase().includes(q),
  );

  return (
    <>
      <input
        type="search"
        className={styles.search}
        placeholder="Search by title or cuisine…"
        aria-label="Search recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {matches.length === 0 ? (
        <p className={styles.empty}>
          No recipes match &ldquo;{query.trim()}&rdquo;. Try another word!
        </p>
      ) : (
        <section className={styles.grid}>
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      )}
    </>
  );
}
