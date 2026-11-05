import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>🍴 NextBites</Link>
      <div className={styles.links}>
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}
