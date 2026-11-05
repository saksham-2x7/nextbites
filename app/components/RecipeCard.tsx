import Link from "next/link";
import type { Recipe } from "../data/recipes";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className={styles.card}>
      <div className={styles.emoji} aria-hidden="true">{recipe.emoji}</div>
      <h2 className={styles.title}>{recipe.title}</h2>
      <p className={styles.description}>{recipe.description}</p>
      <div className={styles.meta}>
        <span className={styles.badge}>{recipe.cuisine}</span>
        <span>⏱ {recipe.minutes} min</span>
      </div>
    </Link>
  );
}
