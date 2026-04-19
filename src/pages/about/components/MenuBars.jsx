/**
 * Renders the left-side navigable bar rows for the About page.
 * @param {{ items: object[], chars: string[], roles: object[], active: number, mounted: boolean, onSelect: (i: number) => void }} props
 */
export default function MenuBars({ items, chars, roles, active, mounted, onSelect }) {
  return (
    <div className="sc-root" role="navigation">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`sc-bar-outer${active === i ? ' active' : ''}${mounted ? ' mounted' : ''}`}
          onClick={() => onSelect(i)}
        >
          <div className="sc-bar-red" />
          <div className="sc-bar">
            <img className="sc-char" src={chars[i]} alt="" />
            <div className="sc-bar-fill" />
            <div className="sc-bar-shade" />
            <div className="sc-bar-content">
              <div className="sc-role">{roles[i].text}</div>
              <div className="sc-main">
                <div className="sc-main-top">
                  <div className="sc-label">{item.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
