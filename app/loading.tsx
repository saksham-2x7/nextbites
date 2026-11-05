import styles from "./state.module.css";

export default function Loading() {
  return (
    <main className={styles.state} aria-busy="true">
      <div className={styles.spinner} />
      <p>Loading…</p>
    </main>
  );
}
