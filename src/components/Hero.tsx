// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

const techChips = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vue 3',
  'React Native',
  'Next.js',
];

export default function Hero() {
  return (
    <header className="bg-[var(--background)] text-[var(--foreground)] transition-colors py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Linke Spalte: vertikal zentrierter Text auf Desktop */}
        <div className="flex-1 flex flex-col justify-center md:h-full md:justify-center text-center md:text-left space-y-4">
          <h1 className="text-5xl font-extrabold">Esref Bozkurt</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {techChips.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-200/60 dark:bg-blue-800/60 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Rechte Spalte: Bild bleibt wie es ist */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-xs rounded-full">
            <Image
              src="/images/me.jpg"
              alt="Foto von Esref Bozkurt"
              width={300}
              height={300}
              className="object-cover object-center rounded-full border-4 border-[var(--accent)]"
            />
          </div>
        </div>
      </div>

      {/* Text unter dem Hero */}
      <div className="mt-8 text-center max-w-2xl mx-auto px-4 space-y-4">
        <p className="text-xl">
          Frontend-Developer mit Fokus auf moderne Web- und Mobile-Technologien.
        </p>
        <Link
          href="/timeline"
          className="inline-block px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-colors"
        >
          Zum Werdegang
        </Link>
      </div>
    </header>
  );
}
