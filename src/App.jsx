import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@shared/PageTransition';
import MenuPage from '@pages/menu/MenuPage';
import AboutPage from '@pages/about/AboutPage';
import ResumePage from '@pages/resume/ResumePage';
import SocialsPage from '@pages/socials/SocialsPage';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
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
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
