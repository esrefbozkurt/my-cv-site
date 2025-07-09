import { motion } from 'framer-motion';

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineEntry[] = [
  {
    year: '2025',
    title: 'AI-Projekt & Portfolioaufbau',
    description:
      'Eigene interaktive Website gebaut, Vue-Demos erstellt und an einem AI-Hackathon teilgenommen.',
  },
  {
    year: '2024',
    title: 'Frontend Developer @ PPW',
    description:
      'Vue 3, TypeScript, Vuetify. Aufbau eines Designsystems, State-Management und Performanceoptimierung.',
  },
  {
    year: '2023',
    title: 'Trainee Frontend @ Turbine Kreuzberg',
    description:
      'Arbeit an E-Commerce-Plattformen, Einsatz von Twig, jQuery, YAML und klassischen CMS-Systemen.',
  },
  {
    year: '2022',
    title: 'Coding Bootcamp & Quereinstieg',
    description:
      'Intensivkurs in JavaScript, React & Node.js. Danach Umstieg vom Bauingenieurwesen zur Softwareentwicklung.',
  },
  {
    year: '2015–2021',
    title: 'Projektleiter Bauwesen',
    description:
      'Verantwortlich für Planung & Umsetzung im Bauwesen. Leitung von Teams, Budget- und Zeitmanagement.',
  },
];

export default function TimelinePage() {
  return (
    <section className="mt-16 space-y-10">
      <h2 className="text-3xl font-bold text-center">Werdegang</h2>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4">
        {timeline.map((entry, idx) => (
          <motion.div
            key={idx}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
