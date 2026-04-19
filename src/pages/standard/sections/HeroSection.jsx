import { MAIN_IMAGES } from '@pages/about/data/aboutData';

/**
 * Opening fold of the standard view: name, role, one-liner and portrait.
 * Reuses the portrait assets from the interactive view's about data module.
 */
export default function HeroSection() {
  return (
    <section id="top" className="std-hero">
      <div className="std-hero-content">
        <p className="std-hero-kicker">Tech Lead · Senior Software Developer</p>
        <h1 className="std-hero-name">
          <span>José</span>
          <span className="std-hero-name-accent">Guillén</span>
        </h1>
        <p className="std-hero-tagline">
          Full Stack Developer shaping modern product teams through clean
          architecture, mentorship, and outcome-driven engineering.
        </p>
        <div className="std-hero-meta">
          <span>Honduras</span>
          <span className="std-hero-dot">·</span>
          <span>4+ years shipping production</span>
          <span className="std-hero-dot">·</span>
          <span>Front-End · Back-End · Architecture</span>
        </div>
      </div>
      <div className="std-hero-photo-wrap">
        <img
          className="std-hero-photo"
          src={MAIN_IMAGES[0]}
          alt="José Guillén portrait"
          loading="eager"
        />
      </div>
    </section>
  );
}
