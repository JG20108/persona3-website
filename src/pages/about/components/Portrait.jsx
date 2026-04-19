/**
 * Full-height character portrait displayed on the right when the reveal panel is open.
 * @param {{ images: string[], active: number, mounted: boolean }} props
 */
export default function Portrait({ images, active, mounted }) {
  return (
    <div className={`sc-main-portrait-shell${mounted ? ' mounted' : ''}`}>
      <img
        className="sc-main-portrait"
        src={images[active]}
        alt=""
      />
    </div>
  );
}
