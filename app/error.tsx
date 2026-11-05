"use client";

import styles from "./state.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className={styles.state}>
      <div className={styles.big}>🔥</div>
      <h1>Something went wrong</h1>
      <p>{error.message || "An unexpected error occurred."}</p>
      <button type="button" className={styles.button} onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
