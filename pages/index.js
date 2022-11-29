import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return (
    <div className="container">
      
      <Head>
        <title>Fechas Importantes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <ul>
          <li>
            <a href="index.js">
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="barraSuperior">
        Próximas actividades
      </div>

      <main>
        <Image
          src="/images/reloj.jpg"
          height={100} // Desired size with correct aspect ratio
          width={200} // Desired size with correct aspect ratio
        />

        <div className="title">
        wena
        </div>
      </main>
      
      <footer>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
          No clickear rick
        </a>
      </footer>
    </div>
  );
};

export default Index;
