import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '@assets/main1.mp4';
import GuideBar from '@shared/GuideBar';
import { CHARS, MAIN_IMAGES, REVEAL_CONTENT, ROLES, ITEMS } from './data/aboutData';
import MenuBars from './components/MenuBars';
import RevealPanel from './components/RevealPanel';
import AwardModal from './components/AwardModal';
import Portrait from './components/Portrait';
import './AboutPage.css';

const GUIDE_ACTIONS = [
  { badge: '↑↓',  type: 'nav',     label: 'SELECT' },
  { badge: '↵',   type: 'confirm', label: 'REVEAL' },
  { badge: 'ESC', type: 'back',    label: 'BACK' },
];

export default function AboutPage() {
  const [active, setActive]               = useState(0);
  const [mounted, setMounted]             = useState(false);
  const [revealed, setRevealed]           = useState(false);
  const [expandedAward, setExpandedAward] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp')    setActive((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowDown')  setActive((i) => Math.min(ITEMS.length - 1, i + 1));
      if (e.key === 'Enter' || e.key === 'ArrowRight') setRevealed(true);
      if (e.key === 'ArrowLeft') {
        if (revealed) setRevealed(false);
        else navigate(-1);
      }
      if (e.key === 'Escape' || e.key === 'Backspace') {
        if (expandedAward) { setExpandedAward(null); return; }
        navigate(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, navigate, revealed, expandedAward]);

  return (
    <div id="menu-screen" className="page-about">
      <video src={bgVideo} autoPlay loop muted playsInline />

      {revealed && <div key={`dim-${active}`} className="sc-dim" />}

      {revealed && (
        <RevealPanel
          key={`panel-${active}`}
          content={REVEAL_CONTENT[active]}
          active={active}
          mounted={mounted}
          onExpand={setExpandedAward}
        />
      )}

      {revealed && (
        <Portrait
          key={`portrait-${active}`}
          images={MAIN_IMAGES}
          active={active}
          mounted={mounted}
        />
      )}

      {expandedAward && (
        <AwardModal
          award={expandedAward}
          onClose={() => setExpandedAward(null)}
        />
      )}

      <MenuBars
        items={ITEMS}
        chars={CHARS}
        roles={ROLES}
        active={active}
        mounted={mounted}
        onSelect={setActive}
      />

      <GuideBar mounted={mounted} actions={GUIDE_ACTIONS} />
    </div>
  );
}
