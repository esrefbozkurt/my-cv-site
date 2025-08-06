export type Project = {
  title: string;
  slug: string;
  timeframe: string;
  stack: string[];
  description: string;
  details: string;
  link?: string | null;
};

export const projectData = [
  {
    title: 'Projekt A',
    slug: 'projekt-a',
    timeframe: '2025',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tortor sit amet justo pulvinar tincidunt.',
    stack: ['React', 'Tailwind'],
    link: null,
  },
  {
    title: 'Projekt B',
    slug: 'projekt-b',
    timeframe: '2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tortor sit amet justo pulvinar tincidunt.',
    stack: ['Vue', 'TypeScript'],
    link: null,
  },
  {
    title: 'Projekt C',
    slug: 'projekt-c',
    timeframe: '2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel tortor sit amet justo pulvinar tincidunt.',
    stack: ['Next.js', 'MongoDB'],
    link: null,
  },
];
