export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  slug: string;
  details: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: '04/2025 – heute',
    title: 'Eigene Projekte & AI-Fokus',
    slug: 'eigene-projekte-ai',
    description: 'React Native App „Loo“ & erste Agentic-AI-Prototypen',
    details: `
Ich entwickle derzeit eine mobile Bewertungs-App mit React Native & Supabase. Parallel experimentiere ich mit Agentic AI (n8n, LLMs, Automationen).
    `,
  },
  {
    year: '03/2024 – 03/2025',
    title: 'Junior Frontend Developer @ PPW',
    slug: 'junior-dev-ppw',
    description:
      'HTML, CSS, Vanilla, jQuery, Vue 3, Vuetify, Accessibility & Designsysteme',
    details: `
Entwicklung barrierefreier und nutzerfreundlicher Webanwendungen gemäß BITV-Standards.  
Design-Systeme, Komponentenentwicklung (z. B. Kalender, Multi-Select), Performance-Optimierung und Debugging.  
Agiles Umfeld mit Scrum & Ticketarbeit.
    `,
  },
  {
    year: '12/2023 – 03/2024',
    title: 'Freelance Frontend Developer @ Summie AI',
    slug: 'freelancer-summie',
    description: 'UX-Fokus, Designumsetzung, Remote',
    details: `
Responsives Redesign der Landingpage mit Fokus auf Usability und Design-Fidelity.  
Umsetzung mit React, TypeScript – enge Zusammenarbeit mit dem UX-Team.
    `,
  },
  {
    year: '05/2023 – 12/2023',
    title: 'Trainee Frontend Developer @ Turbine Kreuzberg',
    slug: 'trainee-turbine',
    description: 'ORO Commerce, jQuery, TWIG, Debugging',
    details: `
Arbeit an Bestandsprojekten im ORO Commerce-Ökosystem.  
TWIG-Template-Anpassungen, jQuery-Komponenten, Debugging, und Integration dynamischer Daten.  
Vertiefung in Wartbarkeit & Legacy Code.
    `,
  },
  {
    year: '10/2022 – 01/2023',
    title: 'Web Developer Bootcamp @ Neue Fische',
    slug: 'bootcamp-neuefische',
    description: 'JavaScript, React, Next.js, APIs, Abschlussprojekt',
    details: `
Intensive Weiterbildung mit 720 Stunden zu Webtechnologien, Git, Testing & agilen Methoden.  
Finales Projekt: TrackFit – eine Fitness-Tracking-App mit Next.js und react.js, Styled Components und MongoDB.
    `,
  },
  {
    year: '04/2020 – 12/2021',
    title: 'Projektmanager @ Drees & Sommer',
    slug: 'pm-dreso',
    description: 'Smart Infrastructure, Termin- & Kostensteuerung',
    details: `
Projektsteuerung für komplexe Bauvorhaben mit Fokus auf smarte Infrastruktur.  
Kommunikation mit Bauherren & Behörden, Terminplanung, Kostenverfolgung, technische Koordination.
    `,
  },
  {
    year: '01/2017 – 07/2019',
    title: 'Bauingenieur @ IG Nordwest',
    slug: 'bauingenieur-nordwest',
    description: 'Verkehrsinfrastruktur & Straßenplanung',
    details: `
Planung und Umsetzung öffentlicher Infrastrukturprojekte: Erschließung, Straßenbau, Kanalnetz.  
Tätigkeit als Projektingenieur in der Objekt- und Entwurfsplanung.
    `,
  },
  {
    year: '10/2013 – 12/2015',
    title: 'M.Eng. Urbane Infrastrukturplanung',
    slug: 'master-urbane-infra',
    description: 'Masterstudium in Berlin (BHT)',
    details: `
Vertiefung in Nachhaltigkeit, Infrastruktur und städtischer Planung.  
Fokus auf interdisziplinäre Lösungsansätze & technische Stadtentwicklung.
    `,
  },
];
