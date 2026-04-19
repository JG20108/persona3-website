import { REVEAL_CONTENT } from '@pages/about/data/aboutData';
import SectionHeader from '../components/SectionHeader';

/**
 * Renders the three signature strengths (Full Stack / Adaptable / Team Player)
 * as a responsive card grid. Data comes from the shared about-data module.
 */
export default function CoreCompetenciesSection() {
  const skills = REVEAL_CONTENT.find((c) => c.type === 'skills')?.skills ?? [];

  return (
    <section id="competencies" className="std-section std-competencies">
      <SectionHeader
        index="02"
        title="CORE COMPETENCIES"
        progress={`${skills.length} TRAITS`}
      />
      <div className="std-competencies-grid">
        {skills.map((skill) => (
          <article className="std-competency-card" key={skill.title}>
            <h3 className="std-competency-title">{skill.title}</h3>
            <div>
              {skill.lines.map((line) => (
                <p className="std-competency-line" key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
