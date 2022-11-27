import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Indexrespaldo1 = () => {
  return (
    <div className="container">
      <Head>
        <title>Fechas Importantes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/reloj.jpg"
          height={300} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
          alt="Relojero"
        />

        <h1 className="title">Cuenta Regresiva</h1>

        <p className="description">
          Este código está en <code>pages/index.js</code>
        </p>
        
        <div className="grid">
          <Link href={{
              pathname: "/response",
              query: { opt: 0 },
            }}
          >
            <a className="card">Excelente!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 1 },
            }}
          >
            <a className="card">Más o menos no mas!</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 2 },
            }}
          >
            <a className="card">Horrible! :(</a>
          </Link>
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

export default Indexrespaldo1;
