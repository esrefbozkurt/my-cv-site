import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Esref Bozkurt – Entwickler Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
        <header className="w-full border-b border-gray-300 dark:border-gray-700 px-4 py-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">esref.dev</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">
                Start
              </Link>
              <Link href="/timeline" className="hover:underline">
                Werdegang
              </Link>
              <Link href="/projects" className="hover:underline">
                Projekte
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
