import { useRouter } from 'next/router';
import { projectData } from '@/data/projectsData';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { query, isReady } = router;

  const [project, setProject] = useState<(typeof projectData)[0] | undefined>();

  useEffect(() => {
    if (isReady && typeof query.slug === 'string') {
      const found = projectData.find((p) => p.slug === query.slug);
      setProject(found);
    }
  }, [isReady, query.slug]);

  if (!isReady || !project) {
    return (
      <p className="text-center mt-16 text-gray-500">Lade Projektdetails...</p>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} – Projekt</title>
      </Head>
      <section className="mt-16 max-w-3xl mx-auto px-4 space-y-4">
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.timeframe}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="whitespace-pre-line text-gray-800 dark:text-gray-200">
          {project.details}
        </p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Zur Projektwebsite →
          </a>
        )}
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
