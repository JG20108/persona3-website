import { EDUCATION_ROWS } from '@pages/resume/data/resumeData';
import SectionHeader from '../components/SectionHeader';

/**
 * Academic background — degrees, exchange programmes, and cultural studies.
 * Same data source as the interactive Resume > Education panel.
 */
export default function EducationSection() {
  return (
    <section id="education" className="std-section std-education">
      <SectionHeader
        index="05"
        title="EDUCATION LOG"
        progress={`${EDUCATION_ROWS.length} INSTITUTIONS`}
      />
      <div className="std-education-list">
        {EDUCATION_ROWS.map((row) => (
          <article className="std-education-item" key={row.index}>
            <header className="std-education-head">
              <div className="std-education-index">{row.index}</div>
              <div>
                <h3 className="std-education-title">{row.title}</h3>
                <p className="std-education-institution">{row.institution}</p>
                <p className="std-education-location">{row.location}</p>
              </div>
              <div className="std-education-status">{row.status}</div>
            </header>
            <ul className="std-education-bullets">
              {row.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
