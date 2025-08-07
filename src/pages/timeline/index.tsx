import Link from 'next/link';
import { timeline } from '@/data/timelineData';
import { motion } from 'framer-motion';

export default function TimelinePage() {
  return (
    <section className="mt-16 space-y-10">
      <h1 className="text-3xl font-bold text-center">Mein Werdegang</h1>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 max-w-2xl mx-auto pl-0.5">
        {timeline.map((entry, idx) => (
          <motion.div
            key={entry.slug}
            className="relative pl-6 pb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="absolute -left-[11px] top-1 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-black" />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {entry.year}
            </div>
            <div className="text-lg font-semibold">{entry.title}</div>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {entry.description}
            </p>
            <Link
              href={`/timeline/${entry.slug}`}
              className="text-blue-600 hover:underline text-sm mt-1 inline-block"
            >
              Mehr erfahren →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
