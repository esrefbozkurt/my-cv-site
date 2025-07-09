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
  Ich entwickle derzeit eine mobile Bewertungs-App mit React Native & Supabase als Backend. Parallel experimentiere ich mit Agentic AI und n8n-gestützten Automationen (PDF-Angebote, Anfragen, Bewerbungen etc.).
  
  Ziel ist es, moderne Tools hands-on zu testen und produktionsreif zu denken.
      `,
  },
  {
    year: '03/2024 – 03/2025',
    title: 'Junior Frontend Developer @ PPW',
    slug: 'junior-dev-ppw',
    description: 'Vue 3, Vuetify, Designsysteme & Performance',
    details: `
  Entwicklung barrierefreier Webanwendungen mit Vue 3, Vuetify & TypeScript.
  
  Mitarbeit an Designsystemen, Optimierung von Listen-Komponenten, Kalendern, sowie Performance- und State-Management-Verbesserungen. Viel Teamarbeit im Scrum-Umfeld.
      `,
  },
  {
    year: '12/2023 – 03/2024',
    title: 'Freelance Frontend Developer @ Summie AI',
    slug: 'freelancer-summie',
    description: 'UX-Fokus, Designumsetzung, Remote',
    details: `
  In enger Zusammenarbeit mit dem UX-Team habe ich moderne UI-Komponenten für die Summie Web App umgesetzt. Fokus lag auf responsivem Design und nutzerzentrierter Optimierung.
  
  Stack: React, Tailwind, Zustand.
      `,
  },
  {
    year: '05/2023 – 12/2023',
    title: 'Trainee Frontend Developer @ Turbine Kreuzberg',
    slug: 'trainee-turbine',
    description: 'ORO Commerce, jQuery, Twig, Debugging',
    details: `
  Hier habe ich tiefe Einblicke in Bestandsprojekte bekommen: TWIG-Template-Anpassungen, jQuery-basierte Komponenten, Debugging, und Integration in ORO Commerce.
  
  Spannend war das Arbeiten mit älteren Systemen und die Bedeutung von Wartbarkeit.
      `,
  },
  {
    year: '10/2022 – 01/2023',
    title: 'Web Developer Bootcamp @ Neue Fische',
    slug: 'bootcamp-neuefische',
    description: 'JavaScript, React, Next.js, APIs, Abschlussprojekt',
    details: `
  Intensive Weiterbildung zum Web Developer mit 720 Unterrichtseinheiten und praktischer Projektarbeit.
  
  Gelernt wurden u. a.:
  – HTML, CSS (Flex/Grid), JavaScript (ES6+), Git, a11y  
  – React, Next.js, Styled Components  
  – Grundlagen zu Node.js, MongoDB & REST-APIs  
  – Agile Methoden (Scrum), Testing, Clean Code
  
  Abschlussprojekt: TrackFit – eine Fitness-Tracking-App mit Übungsdatenbank, Trainingsvergleich und Userflows.
  Verwendet: React, Next.js, MongoDB Atlas, Styled Components.
      `,
  },
  {
    year: '04/2020 – 12/2021',
    title: 'Projektmanager @ Drees & Sommer',
    slug: 'pm-dreso',
    description: 'Smart Infrastructure Projekte',
    details: `
  Als Projektmanager habe ich Bauprojekte mit Fokus auf smarte Infrastruktur gesteuert. Kommunikation mit Stakeholdern, Terminplanung und technische Koordination gehörten zum Alltag.
  
  Basis: mein Bauingenieur-Background & systemisches Denken.
      `,
  },
  {
    year: '01/2017 – 07/2019',
    title: 'Bauingenieur @ IG Nordwest',
    slug: 'bauingenieur-nordwest',
    description: 'Planung & Überwachung im Hochbau',
    details: `
  Klassische Ingenieurtätigkeit: Objektplanung, Baustellenkoordination und Projektbearbeitung. Der Wechsel in die IT entstand aus dem Wunsch, kreativer & zukunftsorientierter zu arbeiten.
      `,
  },
  {
    year: '10/2013 – 12/2015',
    title: 'M.Eng. Urbane Infrastrukturplanung',
    slug: 'master-urbane-infra',
    description: 'Masterstudium in Berlin',
    details: `
  Vertiefung in städtischer Planung, Nachhaltigkeit und technischer Infrastruktur. Ich entwickelte ein starkes Interesse an interdisziplinären Projekten und digitalen Lösungen.
      `,
  },
];
