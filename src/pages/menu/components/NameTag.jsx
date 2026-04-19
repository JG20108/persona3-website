/**
 * Static decorative name tag with a credit link to the original author.
 * No props — content is always fixed.
 */
export default function NameTag() {
  return (
    <div className="p3-name-tag">
      <span>Jose's</span>
      <span>persona</span>
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
