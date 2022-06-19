import Head from 'next/head';
import TopSection from '../components/TopSection';
import BottomSection from '../components/BottomSection';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Orchard Task</title>
        <meta name="This is a Task for Orchard" content="Orchard Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <section>
          <Fade>
            <TopSection />
          </Fade>
        </section>
        <section>
          <Zoom>
            <BottomSection />
          </Zoom>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
