export type Project = {
  title: string;
  slug: string;
  timeframe: string;
  stack: string[];
  description: string;
  details: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'TrackFit – Abschlussprojekt Bootcamp',
    slug: 'trackfit',
    timeframe: '01/2023',
    stack: ['React', 'Next.js', 'MongoDB', 'Styled Components'],
    description:
      'Eine Fitness-Tracking-App mit Übungsdatenbank & Vergleichsmodus.',
    details: `
  TrackFit war das Abschlussprojekt meines Web Development Bootcamps.
  
  Die App ermöglicht Nutzer:innen, Übungen zu dokumentieren, Workouts zu vergleichen und sich Trainingsziele zu setzen.
  
  Features:
  – Login / Registrierung  
  – Übungsdatenbank & Workout-Erfassung  
  – Vergleichsmodus & Fortschrittsübersicht  
  – Mobile-first UI mit Styled Components  
  – MongoDB Atlas als Datenbank
  
  Demo-Link & Quellcode folgen bald.
      `,
  },
  {
    title: 'Loo & Brew – React Native App',
    slug: 'loo-and-brew',
    timeframe: 'seit 04/2025',
    stack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    description:
      'Finde, bewerte & speichere öffentliche WCs – und Spots zum Biertrinken.',
    details: `
  Die App „Loo & Brew“ verbindet praktische Orte mit Spaß:  
  Finde Toiletten in deiner Nähe, bewerte sie (Sauberkeit, Papier etc.) – und entdecke Orte zum Biertrinken in der Umgebung.
  
  Features:
  – GPS-gestützte Map mit Markern  
  – Bewertungssystem & Filter  
  – Datenbank: Supabase (PostgREST + Auth)  
  – UI: React Native Paper + Icons  
  – Ziel: MVP, später evtl. internationaler Rollout
  
  Gerade in Entwicklung. Offen für Feedback!
      `,
  },
  {
    title: 'Summie AI – Freelance-Projekt',
    slug: 'summie-ai',
    timeframe: '12/2023 – 03/2024',
    stack: ['React', 'Tailwind CSS', 'Zustand', 'TypeScript'],
    description: 'Designumsetzung & UX-Komponenten für die Summie-Webapp.',
    details: `
  Summie ist ein KI-gestütztes Tool für Meeting-Zusammenfassungen.  
  Ich habe hier als Freelancer UX-nahe Komponenten entwickelt – z. B.:
  
  – Responsive Navigationsleiste  
  – Dropdown-Filter & Sortierung  
  – Modale & SlideOver-Komponenten  
  – Zustand für State-Management
  
  Fokus: hohe Responsivität, schnelle Feedbackzyklen, Tailwind-Optimierung.
      `,
    link: 'https://www.summie.ai',
  },
  {
    title: 'Komponentenentwicklung @ PPW',
    slug: 'ppw-komponenten',
    timeframe: '03/2024 – 03/2025',
    stack: ['Vue 3', 'Vuetify', 'Pinia', 'TypeScript'],
    description:
      'Filter- & Kalenderkomponenten in Kundenprojekten mitentwickelt.',
    details: `
  Bei PPW arbeite ich in einem Team an barrierefreien, performanten Webapps.  
  Ich habe u. a. folgende Komponenten maßgeblich mitgestaltet:
  
  – FilterBox mit mehrstufiger Auswahl & Zustandslogik (Pinia)  
  – Responsiver Kalender (Tag/Woche/Monat/Jahr) mit Print-Layout  
  – Dynamische Listen mit Skeleton Loading & Pagination  
  – Fokus: Designsystem, Accessibility, Performance
  
  Die Ergebnisse sind in Kundenprojekten live, z. B. in der Eventverwaltung.
  Quellcode ist vertraulich, aber öffentlich sichtbar im Frontend-UI.
      `,
  },
];
