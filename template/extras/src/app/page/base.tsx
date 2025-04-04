 import Link from "next/link";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Create <span className={styles.pinkSpan}>Insomniac NextJs</span> App
        </h1>
        <div className={styles.cardRow}>
          <Link
            className={styles.card}
            href="https://insomniacdesign.com/"
            target="_blank"
          >
            <div className={styles.cardText}>
              The official site of Insomniac Design.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
