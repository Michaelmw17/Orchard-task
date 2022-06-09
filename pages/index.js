import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TopSection from '../components/TopSection';
import BottomSection from '../components/BottomSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orchard Task</title>
        <meta name="description" content="Orchard Task" />
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
    </div>
  );
}
