import { EXPERIENCE_ROWS } from '@pages/resume/data/resumeData';
import SectionHeader from '../components/SectionHeader';

/**
 * Chronological list of professional roles. Reuses the resume data module
 * so a change to a role flows through both the interactive and standard views.
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="std-section std-experience">
      <SectionHeader
        index="03"
        title="EXPERIENCE LOG"
        progress={`${EXPERIENCE_ROWS.length} ROLES`}
      />
      <ol className="std-experience-list">
        {EXPERIENCE_ROWS.map((row) => (
          <li className="std-experience-item" key={`${row.index}-${row.company}`}>
            <header className="std-experience-header">
              <div className="std-experience-index">{row.index}</div>
              <div className="std-experience-titles">
                <h3 className="std-experience-company">{row.company}</h3>
                <p className="std-experience-position">{row.position}</p>
              </div>
              <div className="std-experience-period">{row.period}</div>
            </header>
            <ul className="std-experience-highlights">
              {row.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <ul className="std-experience-tech" aria-label="Technologies">
              {row.tech.map((tech) => (
                <li className="std-tech-chip" key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
