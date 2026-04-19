import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainVideo from '@assets/main1.mp4';
import GuideBar from '@shared/GuideBar';
import { ITEMS, EXPERIENCE_ROWS, SKILL_ROWS, EDUCATION_ROWS } from './data/resumeData';
import ResumeCardStack from './components/ResumeCardStack';
import ExperiencePanel from './components/ExperiencePanel';
import SkillsPanel from './components/SkillsPanel';
import EducationPanel from './components/EducationPanel';
import './ResumePage.css';

const GUIDE_ACTIONS = [
  { badge: '←→',  type: 'nav',     label: 'SECTION' },
  { badge: '↑↓',  type: 'nav',     label: 'SELECT' },
  { badge: '↵',   type: 'confirm', label: 'EXPAND' },
  { badge: 'ESC', type: 'back',    label: 'BACK' },
];

export default function ResumePage() {
  const navigate = useNavigate();
  const [active, setActive]           = useState(0);
  const [mounted, setMounted]         = useState(false);
  const [selectedRow, setSelectedRow] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSetActive = (index) => {
    setActive(index);
    setSelectedRow(0);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp')   handleSetActive(Math.max(0, active - 1));
      if (e.key === 'ArrowDown') handleSetActive(Math.min(ITEMS.length - 1, active + 1));
      if (e.key === 'ArrowLeft' || e.key === 'Escape' || e.key === 'Backspace') navigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, active]);

  return (
    <div id="menu-screen">
      <video src={mainVideo} autoPlay loop muted playsInline />
      <div className="resume-entry-mask" aria-hidden="true">
        <video className="resume-entry-video" src={mainVideo} autoPlay loop muted playsInline />
      </div>

      <div className="resume-overlay">
        <ResumeCardStack
          items={ITEMS}
          active={active}
          mounted={mounted}
          onSelect={handleSetActive}
        />
        {active === 0 && (
          <ExperiencePanel
            rows={EXPERIENCE_ROWS}
            selectedRow={selectedRow}
            onSelectRow={setSelectedRow}
          />
        )}
        {active === 1 && (
          <SkillsPanel
            rows={SKILL_ROWS}
            selectedRow={selectedRow}
            onSelectRow={setSelectedRow}
          />
        )}
        {active === 2 && (
          <EducationPanel
            rows={EDUCATION_ROWS}
            selectedRow={selectedRow}
            onSelectRow={setSelectedRow}
          />
        )}
      </div>

      <GuideBar mounted={mounted} actions={GUIDE_ACTIONS} />
    </div>
  );
}
