import { useEffect, useState } from 'react';
import { REVEAL_CONTENT } from '@pages/about/data/aboutData';
import SectionHeader from '../components/SectionHeader';

/**
 * Recognition & awards grid. Clicking a card opens a full-image lightbox.
 * Escape / outside-click dismisses the modal.
 */
export default function RecognitionSection() {
  const awards =
    REVEAL_CONTENT.find((c) => c.type === 'recognition')?.images ?? [];
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!expanded) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setExpanded(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expanded]);

  return (
    <section id="recognition" className="std-section std-recognition">
      <SectionHeader
        index="06"
        title="CAREER RECOGNITION & AWARDS"
        progress={`${awards.length} AWARDS`}
      />
      <div className="std-recognition-grid">
        {awards.map((award) => (
          <button
            type="button"
            className="std-recognition-card"
            key={award.caption}
            onClick={() => setExpanded(award)}
            aria-label={`Open ${award.caption}`}
          >
            <img
              src={award.src}
              alt={award.caption}
              className="std-recognition-img"
              loading="lazy"
            />
            <p className="std-recognition-caption">{award.caption}</p>
          </button>
        ))}
      </div>

      {expanded && (
        <div
          className="std-recognition-modal"
          role="dialog"
          aria-modal="true"
          aria-label={expanded.caption}
          onClick={() => setExpanded(null)}
        >
          <div
            className="std-recognition-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={expanded.src} alt={expanded.caption} />
            <p className="std-recognition-modal-caption">{expanded.caption}</p>
            <button
              type="button"
              className="std-recognition-modal-close"
              onClick={() => setExpanded(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
