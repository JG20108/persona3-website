export const ITEMS = [
  { id: 'i',   badge: 'I',   title: 'EXPERIENCE', subtitle: 'Roles / Companies',          rank: 1 },
  { id: 'ii',  badge: 'II',  title: 'SKILLS',     subtitle: 'Frontend / Backend / Mobile', rank: 2 },
  { id: 'iii', badge: 'III', title: 'EDUCATION',  subtitle: 'University / Abroad',         rank: 3 },
];

export const EXPERIENCE_ROWS = [
  {
    index: '01',
    company: 'DESIGNLI LLC',
    position: 'Tech Lead & Senior Developer',
    period: '2024-NOW',
    highlights: [
      'Led the end-to-end software development life cycle, from requirement gathering to production deployment',
      'Established development practices and standards for Web Front-End projects',
      'Defined architectures and created scaffolding templates to standardize development and accelerate delivery times',
      'Strengthened testing policies and technical documentation to ensure product stability and reliability',
      'Reduced technical debt by integrating analysis and automation tools such as SonarCloud, Husky, ESLint, and Copilot Reviews',
      'Implemented Pull Request templates, Dependabot, and commit standards to improve codebase health and collaboration',
      'Resolved operational blockers and implemented best practices to optimize team performance',
      'Created technical guides and streamlined workflows to accelerate the onboarding process for new developers',
      'Conducted 1:1 sessions focused on professional development and aligning developer career paths with organizational goals',
      'Worked on bringing modernity to software systems like Open Dental, modernizing legacy applications',
      'Developed software for both desktop via dockerization and also web apps',
    ],
    tech: ['NextJS', 'NestJS', 'Postgres', 'AWS', 'Docker', 'Auth0', 'Javascript', 'Jest'],
  },
  {
    index: '02',
    company: 'WOT DEV',
    position: 'Developer',
    period: 'AUG-OCT 24',
    highlights: [
      'Collaborated with Real Formation Program and their requirements',
      'Developed software for both desktop (CMS) and mobile classroom and educational platform',
      'Managed Database Architecture: Designed and managed the database architecture in Postgres, ensuring data integrity, scalability, and efficient querying for large datasets',
      'Bug Tracking and Resolution: Utilized tools like Jira and Trello for tracking bugs and feature requests, ensuring timely resolution and consistent progress towards project milestones',
    ],
    tech: ['React Vite', 'Redux', 'Postgres', 'AWS', 'Ruby on Rails', 'Devise Authentication'],
  },
  {
    index: '03',
    company: 'HELLO ICONIC',
    position: 'Developer',
    period: '2023-24',
    highlights: [
      'Collaborated across the systems development lifecycle, from requirements gathering to production releases',
      'Developed software for both desktop and mobile platforms',
      'Addressed team concerns, resolving issues, and implementing best practices',
      'Modernized legacy code bases, enhancing functionality and adherence to modern standards',
      'Documented technical workflows to facilitate onboarding of new team members',
    ],
    tech: ['React JS', 'Redux', 'MongoDB', 'Auth0', 'Stripe', 'Postgres', 'Devise auth', 'Swift', 'Kotlin', 'SQLite', 'AWS', 'Ruby on Rails', 'Nest JS'],
  },
  {
    index: '04',
    company: 'HELLO ICONIC',
    position: 'Software Engineering Intern',
    period: '2022-23',
    highlights: [
      'Learned software engineering best practices and wrote clean code',
      'Collaborated with developers to identify and fix software bugs',
      'Contributed to successful project deployments',
      'Stayed updated on emerging technology trends',
    ],
    tech: ['React JS', 'Redux', 'MongoDB', 'Auth0', 'Stripe'],
  },
  {
    index: '05',
    company: 'BUFETE GUILLEN & ASOCIADOS',
    position: 'Independent Freelance Developer',
    period: '2022',
    highlights: [
      'Identified and implemented technological solutions to enhance the firm\'s online presence and operational efficiency',
      'Conducted needs analysis with the firm to tailor website features, including dynamic contact forms and appointment scheduling',
      'Ensured responsiveness across devices for optimal user experience',
      'Contributed to the firm\'s technological infrastructure, improving service delivery and client engagement',
    ],
    tech: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const SKILL_ROWS = [
  { index: '01', category: 'FRONTEND',  skills: ['TypeScript', 'React JS', 'NextJS', 'Redux', 'HTML / CSS'],           count: '5' },
  { index: '02', category: 'BACKEND',   skills: ['Node.js', 'NestJS', 'Ruby on Rails', 'Express.js'],                   count: '4' },
  { index: '03', category: 'MOBILE',    skills: ['Swift', 'Kotlin', 'SQLite'],                                           count: '3' },
  { index: '04', category: 'DATABASE',  skills: ['Postgres', 'MongoDB', 'Redis', 'AWS DynamoDB & S3'],                   count: '4' },
  { index: '05', category: 'DEVOPS',    skills: ['Git / GitHub / Gitflow', 'Docker', 'Jest', 'Auth0', 'Stripe'],         count: '5' },
  { index: '06', category: 'PRACTICES', skills: ['Clean Architecture', 'DDD', 'Code Review', 'Agile / Scrum', 'Docs'],  count: '5' },
];

export const EDUCATION_ROWS = [
  {
    index: '01',
    title: 'B.Sc. Computer Science Engineering',
    institution: 'Universidad Católica De Honduras (Catholic University of Honduras)',
    location: 'Tegucigalpa, FM — Honduras',
    status: 'COMPLETE',
    bullets: [
      'Bachelor of Science in Computer Science Engineering',
      'Core curriculum: software engineering, data structures, algorithms, databases, and systems design',
      'Graduated from one of Honduras\'s leading private universities with a STEM focus',
    ],
  },
  {
    index: '02',
    title: 'Computer Engineering — Abroad Studies',
    institution: 'Minnesota State University Mankato',
    location: 'Mankato, Minnesota — United States',
    status: 'COMPLETE',
    bullets: [
      'Bachelor of Computer Engineering (BSEC) — international academic exchange programme',
      'Immersive US college experience with a focus on advanced software and engineering systems',
      'Broadened technical perspective through exposure to US academic standards and multicultural environment',
    ],
  },
  {
    index: '03',
    title: 'AFS Cultural & Academic Exchange Year',
    institution: 'Istituto Omnicomprensivo Leonardo Da Vinci',
    location: 'Acquapendente, Viterbo — Italy',
    status: 'COMPLETE',
    bullets: [
      'Full academic year abroad in Acquapendente, Viterbo, Italy through the AFS exchange programme',
      'Developed fluency in Italian and deep cross-cultural communication skills',
      'Built adaptability, resilience, and global perspective — core traits carried into a tech leadership role',
    ],
  },
];
