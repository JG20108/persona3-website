/**
 * A single animated menu row item in the P3-style main menu.
 *
 * @param {{ item: object, index: number, isActive: boolean, mounted: boolean, animKey: number, clipFn: Function, opacity: number, onActivate: () => void, onNavigate: (page: string) => void }} props
 */
export default function MenuRow({ item, index, isActive, mounted, animKey, clipFn, opacity, onActivate, onNavigate }) {
  const estW = item.label.length * item.fontSize * 0.6 + 80;
  const estH = item.fontSize * 0.94;

  const handleClick = (e) => {
    e.preventDefault();
    if (item.href) window.open(item.href, '_blank');
    else onNavigate?.(item.page);
  };

  return (
    <a
      href="#"
      className={`p3-row${isActive ? ' active' : ''}${mounted ? ' mounted' : ''}`}
      style={{
        marginRight: item.offsetX,
        marginTop: item.offsetY,
        transitionDelay: mounted ? `${index * 80}ms` : '0ms',
      }}
      onClick={handleClick}
      onMouseEnter={onActivate}
      aria-current={isActive ? 'page' : undefined}
    >
      <div className="p3-glow" />
      <div
        className="p3-skew-wrap"
        style={{ transform: `skewX(${item.skew}deg) skewY(${item.skewY}deg)` }}
      >
        <div
          key={isActive ? `pop-${index}-${animKey}` : `idle-${index}`}
          className={`p3-shadow-tri${isActive ? ' pop' : ''}`}
          style={{ width: estW, height: estH, clipPath: clipFn(estW, estH) }}
        />
        <div
          className="p3-highlight"
          style={{
            width: estW,
            height: estH,
            clipPath: clipFn(estW, estH),
            transform: `translateY(-50%) scaleX(${isActive ? 1 : 0})`,
          }}
        />
        <div className="p3-label-wrap" style={{ opacity }}>
          <span className="p3-label-base p3-label-dark" style={{ fontSize: item.fontSize }}>
            {item.label}
          </span>
          <span
            className="p3-label-base p3-label-bright"
            style={{ fontSize: item.fontSize, clipPath: clipFn(estW, estH) }}
          >
            {item.label}
          </span>
        </div>
      </div>
    </a>
  );
}
