/**
 * Right-side detail panel for the Education section.
 * @param {{ rows: object[], selectedRow: number, onSelectRow: (i: number) => void }} props
 */
export default function EducationPanel({ rows, selectedRow, onSelectRow }) {
  const activeRow = rows[selectedRow] ?? rows[0];

  return (
    <div className="resume-detail-panel">
      <div className="resume-detail-top">
        <div className="resume-detail-top-index">EDU</div>
        <div className="resume-detail-top-title">EDUCATION LOG</div>
        <div className="resume-detail-top-progress">{rows.length} INST</div>
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
              <div className="resume-detail-row-title">{row.title}</div>
              <div className="resume-detail-row-sub">{row.institution}</div>
            </div>
            <div className="resume-detail-status">{row.status}</div>
          </div>
        ))}
      </div>

      <div className="resume-detail-bottom">
        <div className="resume-detail-bottom-title">{activeRow.institution}</div>
        <div className="resume-detail-location">{activeRow.location}</div>
        <div className="resume-detail-bullets">
          {activeRow.bullets.map((b) => (
            <div className="resume-detail-bullet" key={b}>— {b}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
