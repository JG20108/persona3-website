/**
 * View-preference helpers.
 *
 * The portfolio ships in two modes:
 *  - "interactive": the original, animation-heavy Persona-3 experience.
 *  - "standard":    a responsive, single-page scrollable portfolio.
 *
 * Users opt in/out via the ViewToggle component; we persist the choice in
 * localStorage so it survives reloads. On a first visit with no stored
 * preference, we auto-route small viewports and reduced-motion users to
 * "standard" to avoid shipping them a heavy interactive UI.
 *
 * Exported as plain helpers (not a hook) so they can be consumed from
 * non-component modules (e.g. route effects) without React-hook rules.
 */

const STORAGE_KEY = 'p3.viewPreference';
const MOBILE_BREAKPOINT = 900;

export const VIEW_INTERACTIVE = 'interactive';
export const VIEW_STANDARD = 'standard';

const isValid = (value) =>
  value === VIEW_INTERACTIVE || value === VIEW_STANDARD;

const safeWindow = () => (typeof window === 'undefined' ? null : window);

export function getViewPreference() {
  const win = safeWindow();
  if (!win) return null;
  try {
    const stored = win.localStorage.getItem(STORAGE_KEY);
    return isValid(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function setViewPreference(value) {
  const win = safeWindow();
  if (!win || !isValid(value)) return;
  try {
    win.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore quota / privacy-mode failures */
  }
}

/**
 * Decide which view a first-time visitor should land on.
 * Precedence:
 *   1. Explicit stored preference (honours user choice forever).
 *   2. Small viewport (< 900px) → standard.
 *   3. prefers-reduced-motion → standard.
 *   4. Otherwise null (caller keeps the current route, i.e. interactive).
 */
export function detectInitialPreference() {
  const win = safeWindow();
  if (!win) return null;

  const stored = getViewPreference();
  if (stored) return stored;

  if (win.innerWidth < MOBILE_BREAKPOINT) return VIEW_STANDARD;

  const reducedMotion = win.matchMedia?.('(prefers-reduced-motion: reduce)');
  if (reducedMotion?.matches) return VIEW_STANDARD;

  return null;
}
