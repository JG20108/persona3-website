import { useEffect } from 'react';
import StandardNav from './components/StandardNav';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CoreCompetenciesSection from './sections/CoreCompetenciesSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import RecognitionSection from './sections/RecognitionSection';
import ContactSection from './sections/ContactSection';
import './StandardPage.css';

/**
 * Single source of truth for the ordered list of standard-view sections.
 * Used by both the sticky nav (to build anchor links) and the main column
 * (to render section components in order).
 */
const SECTIONS = [
  { id: 'about',        label: 'About' },
  { id: 'competencies', label: 'Strengths' },
  { id: 'experience',   label: 'Experience' },
  { id: 'skills',       label: 'Skills' },
  { id: 'education',    label: 'Education' },
  { id: 'recognition',  label: 'Awards' },
  { id: 'contact',      label: 'Contact' },
];

/**
 * The interactive view's layout relies on a globally-applied
 * `body { overflow: hidden }` plus `html, body, #root { height: 100% }` to
 * create a locked fullscreen canvas. That's incompatible with a scrolling
 * document, so while the standard view is mounted we temporarily relax those
 * constraints and restore them on unmount. This keeps the interactive pages
 * untouched and avoids making the globals conditional.
 */
function useEnableDocumentScroll() {
  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const root = document.getElementById('root');

    const prev = {
      htmlOverflow: html.style.overflow,
      htmlHeight:   html.style.height,
      bodyOverflow: body.style.overflow,
      bodyHeight:   body.style.height,
      rootHeight:   root?.style.height ?? '',
    };

    html.style.overflow = 'auto';
    html.style.height   = 'auto';
    body.style.overflow = 'auto';
    body.style.height   = 'auto';
    if (root) root.style.height = 'auto';

    return () => {
      html.style.overflow = prev.htmlOverflow;
      html.style.height   = prev.htmlHeight;
      body.style.overflow = prev.bodyOverflow;
      body.style.height   = prev.bodyHeight;
      if (root) root.style.height = prev.rootHeight;
    };
  }, []);
}

/**
 * Standard view — a responsive, single-page scrollable portfolio that covers
 * everything the interactive view covers (About + Resume + Socials + Awards)
 * but reads like a traditional dev portfolio.
 *
 * Kept deliberately thin: sections own their data and presentation, this
 * orchestrator only wires them into the page shell and relaxes the globally
 * scroll-locked body while it is mounted.
 */
export default function StandardPage() {
  useEnableDocumentScroll();

  return (
    <div className="page-standard">
      <StandardNav sections={SECTIONS} />
      <main className="page-standard-main">
        <HeroSection />
        <AboutSection />
        <CoreCompetenciesSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <RecognitionSection />
        <ContactSection />
      </main>
      <footer className="page-standard-footer">
        <a
          href="https://github.com/blairxu13/persona3-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Interactive Persona 3 design based on the original by blairxu13
        </a>
      </footer>
    </div>
  );
}
