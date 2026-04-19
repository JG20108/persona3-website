/**
 * Right-side detail panel for the Experience section.
 * @param {{ rows: object[], selectedRow: number, onSelectRow: (i: number) => void }} props
 */
export default function ExperiencePanel({ rows, selectedRow, onSelectRow }) {
  const activeRow = rows[selectedRow] ?? rows[0];

  return (
    <div className="resume-detail-panel">
      <div className="resume-detail-top">
        <div className="resume-detail-top-index">EXP</div>
        <div className="resume-detail-top-title">EXPERIENCE LOG</div>
        <div className="resume-detail-top-progress">{rows.length} ROLES</div>
      </div>

      <div className="resume-detail-hint">
        <div className="resume-detail-hint-line" />
        <div className="resume-detail-hint-text">↑ HOVER ROW TO EXPLORE ↓</div>
        <div className="resume-detail-hint-line" />
      </div>

      <div className="resume-detail-list">
        {rows.map((row, i) => (
          <div
            className={`resume-detail-row${selectedRow === i ? ' selected' : ''}`}
            key={row.index}
            onClick={() => onSelectRow(i)}
            onMouseEnter={() => onSelectRow(i)}
          >
            <div className="resume-detail-row-index">{row.index}</div>
            <div className="resume-detail-row-title-group">
              <div className="resume-detail-row-title">{row.company}</div>
              <div className="resume-detail-row-sub">{row.position}</div>
            </div>
            <div className="resume-detail-status">{row.period}</div>
          </div>
        ))}
      </div>

      <div className="resume-detail-bottom">
        <div className="resume-detail-bottom-title">
          {activeRow.company} — {activeRow.position}
        </div>
        <div className="resume-detail-bullets">
          {activeRow.highlights.map((h) => (
            <div className="resume-detail-bullet" key={h}>— {h}</div>
          ))}
        </div>
        <div className="resume-detail-tags">
          {activeRow.tech.map((t) => (
            <div className="resume-detail-tag" key={t}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
