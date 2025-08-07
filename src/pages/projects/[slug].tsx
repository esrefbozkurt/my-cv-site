// pages/projects/[slug].tsx
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { projectData, Project } from '@/data/projectsData';
import Link from 'next/link';

export default function ProjectDetailPage({ project }: { project: Project }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>{project.title} – Projekt</title>
      </Head>
      <section className="mt-16 max-w-3xl mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
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

        <Link
          href="/projects"
          className="mt-6 text-blue-600 hover:underline text-sm"
        >
          ← Zurück zur Übersicht
        </Link>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) return { notFound: true };

  return {
    props: {
      project,
    },
  };
};
