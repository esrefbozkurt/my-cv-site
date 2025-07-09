import { useRouter } from 'next/router';
import { timeline } from '@/data/timelineData';
import Head from 'next/head';

export default function TimelineDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const entry = timeline.find((item) => item.slug === slug);

  if (!entry) {
    return (
      <p className="mt-16 text-center text-red-500">
        Eintrag nicht gefunden. <br />
        <button
          onClick={() => router.back()}
          className="underline text-sm mt-2"
        >
          Zurück
        </button>
      </p>
    );
  }

  return (
    <>
      <Head>
        <title>{entry.title} – Werdegang</title>
      </Head>
      <section className="mt-16 space-y-6 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold">{entry.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{entry.year}</p>
        <p className="text-base whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-200">
          {entry.details}
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 text-blue-600 hover:underline text-sm"
        >
          ← Zurück zur Übersicht
        </button>
      </section>
    </>
  );
}
