import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
import styles from "./recipe.module.css";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: String(recipe.id) }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>← All recipes</Link>
      <div className={styles.emoji} aria-hidden="true">{recipe.emoji}</div>
      <h1 className={styles.title}>{recipe.title}</h1>
      <p className={styles.meta}>
        <span className={styles.badge}>{recipe.cuisine}</span>
        <span>⏱ {recipe.minutes} min</span>
      </p>
      <p className={styles.description}>{recipe.description}</p>

      <h2>Ingredients</h2>
      <ul className={styles.list}>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Steps</h2>
      <ol className={styles.list}>
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
