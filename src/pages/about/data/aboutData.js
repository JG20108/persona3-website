import char1 from '@assets/char1.png';
import char2 from '@assets/char2.png';
import char3 from '@assets/char3.png';
import icon1 from '@assets/icon1.png';
import icon2 from '@assets/icon2.png';
import icon3 from '@assets/icon3.png';
import mainm from '@assets/mainm.jpeg';
import mainm2 from '@assets/mainm2.jpeg';
import mainf from '@assets/mainf.jpeg';
import awardFeb2025 from '@assets/awardFeb2025.png';
import awardJun2025 from '@assets/awardJun2025.png';
import awardCometFeb2026 from '@assets/cometChampionFeb2026.png';

export const CHARS = [char1, char2, char3];
export const MAIN_IMAGES = [mainm, mainm2, mainf];

export const REVEAL_CONTENT = [
  {
    type: 'info',
    upper: [
      'José Guillén',
      'Tech Lead & Senior Software Developer',
      'Full Stack Developer — React, Node, TypeScript & more',
      'Tech Lead driving architecture & engineering standards',
    ],
    lower: 'Senior Software Developer · Honduras',
  },
  {
    type: 'skills',
    skills: [
      {
        title: 'Full Stack Developer',
        lines: [
          'Proficient in both front-end and back-end technologies,',
          'handling all aspects from UI design to database management.',
        ],
      },
      {
        title: 'Adaptable',
        lines: [
          'Comfortable with rapidly changing technologies,',
          'quickly learning and applying new concepts and tools.',
        ],
      },
      {
        title: 'Team Player',
        lines: [
          'Known for effective communication and conflict resolution,',
          'leading collaborative efforts across teams.',
        ],
      },
    ],
    lower: 'Core Competencies',
  },
  {
    type: 'recognition',
    upper: [
      'Top Performer — February 2025',
      'Best Team Player — June 2025',
      'Comet Champion — February 2026',
    ],
    images: [
      { src: awardFeb2025,      caption: 'Top Performer · Feb 2025' },
      { src: awardJun2025,      caption: 'Best Team Player · Jun 2025' },
      { src: awardCometFeb2026, caption: 'Comet Champion · Feb 2026' },
    ],
    lower: 'Career Recognition & Awards',
  },
];

export const ROLES = [
  { text: 'LEADER', color: '#e8c100', bg: 'rgba(232,193,0,0.12)',   border: 'rgba(232,193,0,0.5)' },
  { text: 'PARTY',  color: '#4a8fff', bg: 'rgba(74,143,255,0.12)',  border: 'rgba(74,143,255,0.5)' },
  { text: 'PARTY',  color: '#4a8fff', bg: 'rgba(74,143,255,0.12)',  border: 'rgba(74,143,255,0.5)' },
];

export const ITEMS = [
  {
    id: 'about',
    label: 'ABOUT ME',
    barIcon: icon1,
    stats: [
      { tag: 'AGE', value: '23',   color: '#9147ff' },
      { tag: 'EXP', value: '3YR',  color: '#bf94ff' },
    ],
  },
  {
    id: 'experience',
    label: 'CORE COMPETENCIES',
    barIcon: icon2,
    stats: [
      { tag: 'STK', value: 'FS',   color: '#e1306c' },
      { tag: 'ROL', value: 'TL',   color: '#f77737' },
    ],
  },
  {
    id: 'awards',
    label: 'CAREER RECOGNITION & AWARDS',
    barIcon: icon3,
    stats: [
      { tag: 'AWD', value: '2',    color: '#00f2ea' },
      { tag: 'YR',  value: '2025', color: '#ff0050' },
    ],
  },
];
