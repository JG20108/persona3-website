import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '@assets/main1.mp4';
import GuideBar from '@shared/GuideBar';
import { CHARS, ROLES, ITEMS } from './data/socialsData';
import SocialsBars from './components/SocialsBars';
import InfoBarPanel from './components/InfoBarPanel';
import './SocialsPage.css';

const GUIDE_ACTIONS = [
  { badge: '↑↓',  type: 'nav',     label: 'SELECT' },
  { badge: '↵',   type: 'confirm', label: 'OPEN' },
  { badge: 'ESC', type: 'back',    label: 'BACK' },
];

export default function SocialsPage() {
  const [active, setActive]               = useState(0);
  const [mounted, setMounted]             = useState(false);
  const [activeInfoBar, setActiveInfoBar] = useState(0);
  const [focus, setFocus]                 = useState('left');
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (focus === 'left') {
        if (e.key === 'ArrowUp')    setActive((i) => Math.max(0, i - 1));
        if (e.key === 'ArrowDown')  setActive((i) => Math.min(ITEMS.length - 1, i + 1));
        if (e.key === 'ArrowRight') { setFocus('right'); setActiveInfoBar(0); }
        if (e.key === 'Enter')      window.open(ITEMS[active].href, '_blank');
      } else {
        const barCount = ITEMS[active].bars;
        if (e.key === 'ArrowUp')    setActiveInfoBar((i) => Math.max(0, i - 1));
        if (e.key === 'ArrowDown')  setActiveInfoBar((i) => Math.min(barCount - 1, i + 1));
        if (e.key === 'ArrowLeft')  setFocus('left');
        if (e.key === 'Enter')      window.open(ITEMS[active].links[activeInfoBar], '_blank');
      }
      if (
        (e.key === 'ArrowLeft' && focus === 'left') ||
        e.key === 'Escape' ||
        e.key === 'Backspace'
      ) {
        navigate(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, activeInfoBar, navigate, focus]);

  return (
    <div id="menu-screen" className="page-socials">
      <video src={bgVideo} autoPlay loop muted playsInline />

      <SocialsBars
        items={ITEMS}
        chars={CHARS}
        roles={ROLES}
        active={active}
        mounted={mounted}
        onSelect={setActive}
        onOpen={(href) => window.open(href, '_blank')}
      />

      {mounted && (
        <InfoBarPanel
          item={ITEMS[active]}
          activeInfoBar={activeInfoBar}
          onSelect={setActiveInfoBar}
          onOpen={(link) => window.open(link, '_blank')}
        />
      )}

      <GuideBar mounted={mounted} actions={GUIDE_ACTIONS} />
    </div>
  );
}
