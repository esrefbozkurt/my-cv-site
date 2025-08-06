// pages/timeline/[slug].tsx
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { timeline, TimelineEntry } from '@/data/timelineData';

export default function TimelineDetailPage({
  entry,
}: {
  entry: TimelineEntry;
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{entry.title} – Werdegang</title>
      </Head>
      <section className="mt-16 space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold">{entry.title}</h1>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = timeline.map((entry) => ({
    params: { slug: entry.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;
  const entry = timeline.find((e) => e.slug === slug);

  if (!entry) return { notFound: true };

  return {
    props: {
      entry,
    },
  };
};
