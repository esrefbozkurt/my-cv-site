import Link from 'next/link';
import { projects } from '@/data/projectsData';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <section className="mt-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projekte</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.slug}
            className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {proj.timeframe}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {proj.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${proj.slug}`}
              className="text-blue-600 hover:underline text-sm mt-4 inline-block"
            >
              Mehr erfahren →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
