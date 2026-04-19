/**
 * Right-side info panel: large nav label + clickable info-bar links.
 *
 * @param {{ item: object, activeInfoBar: number, onSelect: (i: number) => void, onOpen: (link: string) => void }} props
 */
export default function InfoBarPanel({ item, activeInfoBar, onSelect, onOpen }) {
  return (
    <>
      <div className="sc-right-nav" key={item.id}>
        <span className="sc-nav-arrow left">◄</span>
        <span className="sc-nav-btn">LB</span>
        <span className="sc-nav-label">{item.label}</span>
        <span className="sc-nav-btn">RB</span>
        <span className="sc-nav-arrow right">►</span>
      </div>

      {Array.from({ length: item.bars }).map((_, i) => (
        <div
          className={`sc-info-bar-wrap${activeInfoBar === i ? ' selected' : ''}`}
          key={`bar-${item.id}-${i}`}
          style={{ top: `${155 + i * 52}px`, animationDelay: `${i * 50}ms` }}
          onClick={() => onOpen(item.links[i])}
          onMouseEnter={() => onSelect(i)}
        >
          <div className="sc-info-bar">
            <img className="sc-info-bar-icon" src={item.barIcon} alt="" />
            <span className="sc-info-bar-text">{item.displays[i]}</span>
            <span className="sc-info-bar-box">OPEN</span>
          </div>
        </div>
      ))}
    </>
  );
}
