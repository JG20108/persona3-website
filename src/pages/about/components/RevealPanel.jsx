/**
 * Renders the reveal panel overlay (white angled card) and the right-side navigation arrows.
 * Handles all three content types: info, skills, and recognition.
 *
 * @param {{ content: object, active: number, mounted: boolean, onExpand: (img: object) => void }} props
 */
export default function RevealPanel({ content, active, mounted, onExpand }) {
  return (
    <>
      <div
        className={`sc-reveal-panel${mounted ? ' mounted' : ''}`}
        style={{ pointerEvents: content?.type === 'recognition' ? 'auto' : 'none' }}
      >
        {content.type === 'info' && (
          <div className="sc-reveal-upper-bar">
            {content.upper.map((line) => (
              <div className="sc-reveal-upper-line" key={line}>{line}</div>
            ))}
          </div>
        )}

        {content.type === 'skills' && (
          <div className="sc-reveal-skills">
            <div className="sc-skills-track">
              {content.skills.map((skill) => (
                <>
                  <div className="sc-cinta-spacer" key={`spacer-${skill.title}`} />
                  <div className="sc-skill-entry" key={skill.title}>
                    <div className="sc-skill-title">{skill.title}</div>
                    {skill.lines.map((line) => (
                      <div className="sc-skill-desc" key={line}>{line}</div>
                    ))}
                  </div>
                </>
              ))}
              {content.skills.map((skill) => (
                <>
                  <div className="sc-cinta-spacer" key={`spacer-${skill.title}-dup`} aria-hidden="true" />
                  <div className="sc-skill-entry" key={`${skill.title}-dup`} aria-hidden="true">
                    <div className="sc-skill-title">{skill.title}</div>
                    {skill.lines.map((line) => (
                      <div className="sc-skill-desc" key={line}>{line}</div>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        )}

        {content.type === 'recognition' && (
          <div className="sc-reveal-recognition">
            {content.images.map((img) => (
              <div
                className="sc-award-col"
                key={img.caption}
                style={{ pointerEvents: 'all' }}
                onClick={() => onExpand(img)}
              >
                <img className="sc-award-img" src={img.src} alt={img.caption} />
                <div className="sc-award-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        )}

        <div className="sc-reveal-lower-bar">
          <span className="sc-lower-bar-text">{content.lower}</span>
        </div>
      </div>

      <div key={`nav-${active}`} className="sc-right-nav">
        <span className="sc-nav-arrow left">◄</span>
        <span className="sc-nav-btn">↑</span>
        <span className="sc-nav-dot" />
        <span className="sc-nav-btn">↓</span>
        <span className="sc-nav-arrow right">►</span>
      </div>
    </>
  );
}
