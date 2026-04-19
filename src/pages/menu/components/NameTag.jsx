import ViewToggle from '@shared/ViewToggle';

/**
 * Decorative name tag shown on the main menu. Contains:
 *  - The Jose's-persona headline
 *  - The Interactive / Standard view toggle (inherits the tag's rotation)
 *  - A credit link back to the original author
 */
export default function NameTag() {
  return (
    <div className="p3-name-tag">
      <span>Jose's</span>
      <span>persona</span>
      <ViewToggle current="interactive" variant="rotated" />
      <a
        className="p3-credit"
        href="https://github.com/blairxu13/persona3-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        original by blairxu13
      </a>
    </div>
  );
}
