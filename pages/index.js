import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TopSection from '../components/TopSection';
import BottomSection from '../components/BottomSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orchard Task</title>
        <meta name="This is a Task for Orchard" content="Orchard Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <TopSection />
        </section>
        <section>
          <BottomSection />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
