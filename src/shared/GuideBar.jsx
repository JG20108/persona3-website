import './GuideBar.css';

/**
 * Shared P3R-style guide bar rendered at the bottom-right of every page.
 *
 * @param {{ mounted: boolean, actions: Array<{badge: string, type: 'nav'|'confirm'|'back', label: string}>, delay?: string }} props
 */
export default function GuideBar({ mounted, actions, delay = '0.6s' }) {
  return (
    <div
      className={`guide-bar${mounted ? ' mounted' : ''}`}
      style={mounted ? { animationDelay: delay } : undefined}
    >
      <div className="guide-bar-label">GUIDE</div>
      <div className="guide-bar-actions">
        {actions.map((action) => (
          <div className="guide-bar-action" key={action.label}>
            <span className={`guide-bar-badge guide-bar-badge--${action.type}`}>
              {action.badge}
            </span>
            <span className="guide-bar-action-text">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
