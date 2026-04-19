import { useNavigate } from 'react-router-dom';
import {
  setViewPreference,
  VIEW_INTERACTIVE,
  VIEW_STANDARD,
} from './useViewPreference';
import './ViewToggle.css';

/**
 * Pill toggle that switches between the Interactive and Standard views.
 *
 * Props:
 *  - current:  'interactive' | 'standard' — which view the caller is rendered in.
 *  - variant:  'flat' | 'rotated' (default 'flat'). The "rotated" variant is
 *              designed to sit inside the tilted Jose's-persona name tag and
 *              inherits its rotation from the parent transform.
 */
export default function ViewToggle({ current, variant = 'flat' }) {
  const navigate = useNavigate();

  const go = (target) => {
    if (target === current) return;
    setViewPreference(target);
    navigate(target === VIEW_STANDARD ? '/standard' : '/');
  };

  return (
    <div
      className={`view-toggle view-toggle--${variant}`}
      role="tablist"
      aria-label="Portfolio view"
    >
      <button
        type="button"
        role="tab"
        aria-selected={current === VIEW_INTERACTIVE}
        className={`view-toggle-pill${current === VIEW_INTERACTIVE ? ' active' : ''}`}
        onClick={() => go(VIEW_INTERACTIVE)}
      >
        Interactive
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={current === VIEW_STANDARD}
        className={`view-toggle-pill${current === VIEW_STANDARD ? ' active' : ''}`}
        onClick={() => go(VIEW_STANDARD)}
      >
        Standard
      </button>
    </div>
  );
}
