import char1 from '@assets/char1.png';
import char2 from '@assets/char2.png';
import char3 from '@assets/char3.png';
import icon1 from '@assets/icon1.png';
import icon2 from '@assets/icon2.png';
import icon3 from '@assets/icon3.png';

export const CHARS = [char1, char2, char3];

export const ROLES = [
  { text: 'LEADER', color: '#e8c100', bg: 'rgba(232,193,0,0.12)',  border: 'rgba(232,193,0,0.5)' },
  { text: 'PARTY',  color: '#4a8fff', bg: 'rgba(74,143,255,0.12)', border: 'rgba(74,143,255,0.5)' },
  { text: 'PARTY',  color: '#4a8fff', bg: 'rgba(74,143,255,0.12)', border: 'rgba(74,143,255,0.5)' },
];

export const ITEMS = [
  {
    id: 'github',
    label: 'GITHUB',
    href: 'https://github.com/JG20108',
    icon: 'GH',
    barIcon: icon1,
    bars: 1,
    newBars: [],
    displays: ['github.com/JG20108'],
    links: ['https://github.com/JG20108'],
    stats: [
      { tag: 'REP', value: '11',  color: '#6e5494' },
      { tag: 'FOL', value: '12',  color: '#4078c0' },
    ],
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/jos%C3%A9-guill%C3%A9n/',
    icon: 'IN',
    barIcon: icon2,
    bars: 1,
    newBars: [],
    displays: ['linkedin.com/in/josé-guillén'],
    links: ['https://www.linkedin.com/in/jos%C3%A9-guill%C3%A9n/'],
    stats: [
      { tag: 'NET', value: '500+', color: '#0077b5' },
      { tag: 'EXP', value: '3YR',  color: '#00a0dc' },
    ],
  },
  {
    id: 'email',
    label: 'EMAIL',
    href: 'mailto:joseosgui@hotmail.com',
    icon: '@',
    barIcon: icon3,
    bars: 1,
    newBars: [],
    displays: ['joseosgui@hotmail.com'],
    links: ['mailto:joseosgui@hotmail.com'],
    stats: [
      { tag: 'MSG', value: 'OPEN', color: '#00b4ff' },
      { tag: 'RSP', value: 'FAST', color: '#4dc8ff' },
    ],
  },
];
