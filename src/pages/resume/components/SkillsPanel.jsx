/**
 * Right-side detail panel for the Skills section.
 * @param {{ rows: object[], selectedRow: number, onSelectRow: (i: number) => void }} props
 */
export default function SkillsPanel({ rows, selectedRow, onSelectRow }) {
  const activeRow = rows[selectedRow] ?? rows[0];

  return (
    <div className="resume-detail-panel">
      <div className="resume-detail-top">
        <div className="resume-detail-top-index">SKL</div>
        <div className="resume-detail-top-title">SKILLS LOG</div>
        <div className="resume-detail-top-progress">6 AREAS</div>
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
              <div className="resume-detail-row-title">{row.category}</div>
              <div className="resume-detail-row-sub">{row.skills.slice(0, 3).join(' · ')}</div>
            </div>
            <div className="resume-detail-status">{row.count}</div>
          </div>
        ))}
      </div>

      <div className="resume-detail-bottom">
        <div className="resume-detail-bottom-title">{activeRow.category}</div>
        <div className="resume-detail-tags">
          {activeRow.skills.map((s) => (
            <div className="resume-detail-tag" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
