import { REVEAL_CONTENT } from '@pages/about/data/aboutData';
import SectionHeader from '../components/SectionHeader';

/**
 * About-me section. Consumes the first entry of REVEAL_CONTENT (type 'info')
 * so the narrative stays in one place between the interactive and standard views.
 */
export default function AboutSection() {
  const info = REVEAL_CONTENT.find((c) => c.type === 'info');
  const lines = info?.upper ?? [];

  return (
    <section id="about" className="std-section std-about">
      <SectionHeader index="01" title="ABOUT ME" progress="PROFILE" />
      <div className="std-about-card">
        {lines.map((line) => (
          <p className="std-about-line" key={line}>{line}</p>
        ))}
        {info?.lower && (
          <p className="std-about-line" style={{ color: 'var(--std-accent-red)' }}>
            {info.lower}
          </p>
        )}
      </div>
    </section>
  );
}
