import Link from "next/link";
import styles from "./state.module.css";

export default function NotFound() {
  return (
    <main className={styles.state}>
      <div className={styles.big}>🍽️</div>
      <h1>Recipe not found</h1>
      <p>We couldn&apos;t find that page. It may have been eaten already.</p>
      <Link href="/" className={styles.button}>Back to home</Link>
    </main>
  );
}
