import { useEffect, useState } from 'react';
import ViewToggle from '@shared/ViewToggle';
import './StandardNav.css';

/**
 * Offset (in px) used by the scrollspy so a section only becomes "active"
 * once its top has actually scrolled under the sticky nav. Kept in sync with
 * the CSS padding on .std-nav-inner.
 */
const NAV_OFFSET = 96;

/**
 * Sticky top navigation for the standard view.
 *
 * DOM layout:
 *   <header.std-nav>           — sticky bar (has backdrop-filter)
 *     <div.std-nav-inner>
 *       brand · inline links · desktop toggle · burger
 *   <nav.std-nav-drawer>       — mobile slide-in drawer (rendered as SIBLING
 *                                of .std-nav on purpose: `backdrop-filter`
 *                                creates a new containing block, which would
 *                                otherwise crop `position: fixed` descendants
 *                                to the nav's ~60px box)
 *   <button.std-nav-backdrop>  — tappable scrim behind the drawer
 *
 * Active-link logic uses a deterministic scrollspy (not IntersectionObserver):
 * on every scroll tick we iterate sections in document order and pick the
 * deepest one whose top has crossed the nav-offset line.
 *
 * Props:
 *  - sections: Array<{ id: string, label: string }>
 */
export default function StandardNav({ sections }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // Scrollspy: deterministic "which section is the user in" computation.
  useEffect(() => {
    if (sections.length === 0) return undefined;

    let rafId = null;

    const compute = () => {
      rafId = null;
      let current = null;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - NAV_OFFSET <= 0) current = id;
        else break;
      }
      setActiveId(current);
    };

    const schedule = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [sections]);

  // Close drawer on Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="std-nav">
        <div className="std-nav-inner">
          <a href="#top" className="std-nav-brand" onClick={closeMenu}>
            <span className="std-nav-brand-name">Jose's</span>
            <span className="std-nav-brand-sub">persona</span>
          </a>

          <nav className="std-nav-links-inline" aria-label="Sections">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`std-nav-link${activeId === id ? ' active' : ''}`}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="std-nav-toggle-desktop">
            <ViewToggle current="standard" variant="flat" />
          </div>

          <button
            type="button"
            className={`std-nav-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="std-nav-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        id="std-nav-drawer"
        className={`std-nav-drawer${menuOpen ? ' open' : ''}`}
        aria-label="Sections"
        aria-hidden={!menuOpen}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`std-nav-drawer-link${activeId === id ? ' active' : ''}`}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            aria-current={activeId === id ? 'true' : undefined}
          >
            {label}
          </a>
        ))}
        <div className="std-nav-drawer-toggle">
          <ViewToggle current="standard" variant="flat" />
        </div>
      </nav>

      <button
        type="button"
        className={`std-nav-backdrop${menuOpen ? ' visible' : ''}`}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={closeMenu}
      />
    </>
  );
}
