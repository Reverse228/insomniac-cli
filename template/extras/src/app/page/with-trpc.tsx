import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import styles from "./index.module.css";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
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
          <div className={styles.showcaseContainer}>
            <p className={styles.showcaseText}>
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <LatestPost />
        </div>
      </main>
    </HydrateClient>
  );
}
