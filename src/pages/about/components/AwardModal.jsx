/**
 * Lightbox modal for a single award image. Clicking the backdrop closes it.
 * @param {{ award: { src: string, caption: string }, onClose: () => void }} props
 */
export default function AwardModal({ award, onClose }) {
  return (
    <div className="sc-award-modal" onClick={onClose}>
      <div className="sc-award-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={award.src} alt={award.caption} />
        <div className="sc-award-modal-caption">{award.caption}</div>
      </div>
    </div>
  );
}
