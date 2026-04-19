/**
 * Banner that opens every major section in the standard view.
 * Visual language mirrors the interactive "resume-detail-top" header.
 *
 * Props:
 *  - index:    string (e.g. "01") — rendered on the left.
 *  - title:    string             — the section's name.
 *  - progress: string | undefined — optional right-aligned meta (e.g. "5 ROLES").
 */
export default function SectionHeader({ index, title, progress }) {
  return (
    <header className="std-section-header">
      <div className="std-section-header-index">{index}</div>
      <div className="std-section-header-title">{title}</div>
      <div className="std-section-header-progress">{progress ?? ''}</div>
    </header>
  );
}
