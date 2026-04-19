import { useState, useEffect } from 'react';
import GuideBar from '@shared/GuideBar';
import { ITEMS, CLIP_SHAPES } from './data/menuData';
import NameTag from './components/NameTag';
import MenuRow from './components/MenuRow';
import './P3Menu.css';

const GUIDE_ACTIONS = [
  { badge: '↑↓', type: 'nav',     label: 'NAVIGATE' },
  { badge: '↵',  type: 'confirm', label: 'OPEN' },
];

export default function P3Menu({ onNavigate }) {
  const [active, setActive]   = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const activate = (idx) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp')   activate(Math.max(0, active - 1));
      if (e.key === 'ArrowDown') activate(Math.min(ITEMS.length - 1, active + 1));
      if (e.key === 'Enter') {
        const item = ITEMS[active];
        if (item.href) window.open(item.href, '_blank');
        else onNavigate?.(item.page);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, onNavigate]);

  return (
    <>
      <div className="p3-overlay">
        <NameTag />
        <div className="p3-stripe" />
        <div className="p3-stripe2" />

        <nav className="p3-menu">
          {ITEMS.map((item, i) => {
            const isActive = active === i;
            const dist = Math.abs(i - active);
            const opacity = isActive ? 1 : Math.max(0.5, 1 - dist * 0.2);
            return (
              <MenuRow
                key={item.id}
                item={item}
                index={i}
                isActive={isActive}
                mounted={mounted}
                animKey={animKey}
                clipFn={CLIP_SHAPES[i] ?? CLIP_SHAPES[0]}
                opacity={opacity}
                onActivate={() => activate(i)}
                onNavigate={onNavigate}
              />
            );
          })}
        </nav>

        <GuideBar mounted={mounted} actions={GUIDE_ACTIONS} delay="1s" />
      </div>
    </>
  );
}
