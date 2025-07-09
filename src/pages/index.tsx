export default function HomePage() {
  return (
    <section className="mt-16 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Hi, ich bin Esref 👋</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Ich bin ein Frontend-Entwickler mit Fokus auf moderne Webtechnologien
          wie
          <strong className="text-blue-600 dark:text-blue-400"> React</strong>,
          <strong className="text-green-600 dark:text-green-400"> Vue</strong>{' '}
          und
          <strong className="text-yellow-600 dark:text-yellow-400">
            {' '}
            TypeScript
          </strong>
          .
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Auf dieser Seite findest du meinen Werdegang, Projekte und kleine
          Tech-Demos.
        </p>
      </div>
    </section>
  );
}
