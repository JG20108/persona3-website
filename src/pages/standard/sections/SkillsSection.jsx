import { SKILL_ROWS } from '@pages/resume/data/resumeData';
import SectionHeader from '../components/SectionHeader';

/**
 * Skill buckets shown as a responsive card grid. Each card lists the
 * technologies inside that category as tech chips.
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="std-section std-skills">
      <SectionHeader
        index="04"
        title="SKILLS LOG"
        progress={`${SKILL_ROWS.length} AREAS`}
      />
      <div className="std-skills-grid">
        {SKILL_ROWS.map((row) => (
          <article className="std-skill-card" key={row.index}>
            <header className="std-skill-card-head">
              <span className="std-skill-index">{row.index}</span>
              <h3 className="std-skill-category">{row.category}</h3>
              <span className="std-skill-count">{row.count}</span>
            </header>
            <ul className="std-skill-chips">
              {row.skills.map((skill) => (
                <li className="std-tech-chip" key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
