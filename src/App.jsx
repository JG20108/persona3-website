import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@shared/PageTransition';
import { detectInitialPreference, VIEW_STANDARD } from '@shared/useViewPreference';
import MenuPage from '@pages/menu/MenuPage';
import AboutPage from '@pages/about/AboutPage';
import ResumePage from '@pages/resume/ResumePage';
import SocialsPage from '@pages/socials/SocialsPage';
import StandardPage from '@pages/standard/StandardPage';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  // First-visit redirect: small viewports and reduced-motion users land on /standard.
  // Only runs once on mount and only when the user opens the site at the root;
  // any stored preference (set via the ViewToggle) wins thereafter.
  useEffect(() => {
    if (location.pathname !== '/') return;
    const preferred = detectInitialPreference();
    if (preferred === VIEW_STANDARD) {
      navigate('/standard', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <MenuPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition variant="about">
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <PageTransition variant="resume">
              <ResumePage />
            </PageTransition>
          }
        />
        <Route
          path="/socials"
          element={
            <PageTransition variant="socials">
              <SocialsPage />
            </PageTransition>
          }
        />
        {/*
          The standard view is intentionally not wrapped in PageTransition:
          it's a long scrollable document, so we want it to mount instantly
          rather than sliding in/out with the Persona-3 video transitions.
        */}
        <Route path="/standard" element={<StandardPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
