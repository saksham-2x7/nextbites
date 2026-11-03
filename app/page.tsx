import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Fresh recipes for today</h1>
      <p className={styles.sub}>Pick something tasty and get cooking.</p>
      <section className={styles.grid}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
