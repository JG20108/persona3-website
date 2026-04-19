/**
 * Left-side navigable bar rows for the Socials page.
 * Clicking an already-active item opens its external link; otherwise it activates it.
 *
 * @param {{ items: object[], chars: string[], roles: object[], active: number, mounted: boolean, onSelect: (i: number) => void, onOpen: (href: string) => void }} props
 */
export default function SocialsBars({ items, chars, roles, active, mounted, onSelect, onOpen }) {
  return (
    <div className="sc-root" role="navigation">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`sc-bar-outer${active === i ? ' active' : ''}${mounted ? ' mounted' : ''}`}
          onClick={() => (active === i ? onOpen(item.href) : onSelect(i))}
          onMouseEnter={() => onSelect(i)}
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
                  <div className="sc-icon">{item.icon}</div>
                  <div className="sc-label">{item.label}</div>
                </div>
              </div>
              <div className="sc-stats">
                {item.stats.map((s) => (
                  <div className="sc-stat" key={s.tag}>
                    <div className="sc-stat-top">
                      <span className="sc-stat-tag" style={{ color: s.color, borderColor: s.color }}>
                        {s.tag}
                      </span>
                      <span className="sc-stat-num">{s.value}</span>
                    </div>
                    <div className="sc-stat-bars">
                      <div className="sc-stat-bar-color" style={{ background: s.color }} />
                      <div className="sc-stat-bar-black" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
