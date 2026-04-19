import { useState, useEffect } from "react";

const ITEMS = [
  { id: "about",   label: "ABOUT ME",      page: "about",   fontSize: 80, offsetX: 0,  offsetY: 0,  skew: -6,  skewY: 10  },
  { id: "resume",  label: "RESUME",        page: "resume",  fontSize: 66, offsetX: 20, offsetY: 8,  skew: -11, skewY: -10 },
  { id: "github",  label: "GITHUB LINK",   page: "github",  href: "https://github.com/JG20108/persona3-website", fontSize: 68, offsetX: 8,  offsetY: 6,  skew: 0,   skewY: -4  },
  { id: "socials", label: "SOCIALS",       page: "socials", fontSize: 74, offsetX: 16, offsetY: 8,  skew: -3,  skewY: 5   },
];

const CLIP_SHAPES = [
  (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
  (w, h) => `polygon(0px 0px, ${w}px ${h * 0.5}px, 0px ${h}px)`,
];

export default function P3Menu({ onNavigate }) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const activate = (idx) => {
    setActive(idx);
    setAnimKey(k => k + 1);
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp")   activate(Math.max(0, active - 1));
      if (e.key === "ArrowDown") activate(Math.min(ITEMS.length - 1, active + 1));
      if (e.key === "Enter") {
        const item = ITEMS[active];
        if (item.href) window.open(item.href, "_blank");
        else onNavigate?.(item.page);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, onNavigate]);

  return (
    <>
      <style>{`
        .p3-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .p3-stripe  { position:absolute; right:0; top:0; bottom:0; width:5px; background:#c4001a; z-index:10; pointer-events:none; }
        .p3-stripe2 { position:absolute; right:9px; top:0; bottom:0; width:2px; background:rgba(245,122,139,0.22); z-index:10; pointer-events:none; }

        .p3-menu {
          position: relative;
          z-index: 20;
          padding: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          pointer-events: all;
        }

        .p3-row {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          text-decoration: none;
          opacity: 0;
          transform: translateX(36px);
          transition: opacity 0.38s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1);
        }
        .p3-row.mounted {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .p3-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120%; height: 200%;
          background: radial-gradient(ellipse at center, rgba(255,100,180,0.35) 0%, transparent 70%);
          filter: blur(18px);
          z-index: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .p3-row.active .p3-glow { opacity: 1; }

        .p3-skew-wrap {
          position: relative;
          display: flex;
          align-items: center;
          isolation: isolate;
        }

        @keyframes p3-shadow-pop {
          0%   { transform: translateY(-40%) translateX(-12px) scaleX(0) scaleY(1); }
          55%  { transform: translateY(-46%) translateX(-15px) scaleX(1.22) scaleY(1.18); }
          75%  { transform: translateY(-39%) translateX(-11px) scaleX(0.96) scaleY(0.97); }
          100% { transform: translateY(-40%) translateX(-12px) scaleX(1) scaleY(1); }
        }

        .p3-shadow-tri {
          position: absolute;
          top: 50%;
          transform-origin: left center;
          background: rgba(235, 80, 120, 0.85);
          z-index: 1;
          pointer-events: none;
          transform: translateY(-40%) translateX(-12px) scaleX(0);
          transition: transform 0.18s ease;
        }
        .p3-shadow-tri.pop {
          animation: p3-shadow-pop 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .p3-highlight {
          position: absolute;
          top: 50%;
          transform-origin: left center;
          background: #ffffff;
          z-index: 2;
          transition: transform 0.22s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }

        .p3-label-wrap {
          position: relative;
          z-index: 3;
        }

        .p3-label-base {
          font-family: 'Anton', sans-serif;
          font-style: italic;
          letter-spacing: 2px;
          line-height: 0.85;
          display: block;
          white-space: nowrap;
          user-select: none;
        }

        .p3-label-dark {
          color: #3ce2ff;
          transition: color 0.12s ease;
        }
        .p3-row.active .p3-label-dark { color: #6b0010; }
        .p3-row:hover:not(.active) .p3-label-dark { color: #00d9ff; }

        .p3-label-bright {
          color: #ff2a2a;
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.12s ease;
        }
        .p3-row.active .p3-label-bright { opacity: 1; }

        /* ── P3R-style guide bar ── */
        @keyframes p3-guide-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .p3-guide {
          position: fixed;
          bottom: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: stretch;
          background: rgba(6, 10, 22, 0.92);
          border-top: 2px solid #00b4ff;
          padding: 0;
          opacity: 0;
          pointer-events: none;
          clip-path: polygon(12px 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .p3-guide.mounted {
          animation: p3-guide-in 0.45s cubic-bezier(0.22,1,0.36,1) 1s both;
        }
        .p3-guide-label {
          display: flex;
          align-items: center;
          padding: 0 14px 0 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(0, 180, 255, 0.7);
          border-right: 1px solid rgba(0, 180, 255, 0.18);
        }
        .p3-guide-actions {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 0 18px 0 0;
        }
        .p3-guide-action {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .p3-guide-action:last-child { border-right: none; }
        .p3-guide-badge {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0;
          flex-shrink: 0;
          line-height: 1;
        }
        .p3-guide-badge--nav {
          background: rgba(0, 180, 255, 0.18);
          border: 2px solid rgba(0, 180, 255, 0.6);
          color: #00b4ff;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 12px;
        }
        .p3-guide-badge--confirm {
          background: #2a7a2a;
          border: 2px solid #5bc85b;
          color: #a8ffa8;
        }
        .p3-guide-badge--back {
          background: #7a1a1a;
          border: 2px solid #e03d31;
          color: #ffaaaa;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 11px;
        }
        .p3-guide-action-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1;
        }

        .p3-name-tag {
          position: absolute;
          top: 18px;
          left: 15%;
          z-index: 20;
          font-family: 'Anton', sans-serif;
          font-style: italic;
          font-size: 108px;
          line-height: 0.88;
          letter-spacing: 2px;
          color: rgba(10, 10, 14, 0.64);
          transform: rotate(18deg);
          transform-origin: left top;
          user-select: none;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .p3-name-tag span:first-child {
          color: rgba(0, 0, 0, 0.86);
        }
        .p3-credit {
          font-family: 'Anton', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(0, 0, 0, 0.45);
          text-decoration: none;
          margin-top: 3vh;
          pointer-events: all;
          transition: color 0.2s ease;
        }
        .p3-credit:hover {
          color: rgba(0, 0, 0, 0.75);
        }
      `}</style>

      <div className="p3-overlay">
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
        <div className="p3-stripe" />
        <div className="p3-stripe2" />

        <nav className="p3-menu">
          {ITEMS.map((item, i) => {
            const isActive = active === i;
            const dist = Math.abs(i - active);
            const opacity = isActive ? 1 : Math.max(0.5, 1 - dist * 0.2);
            const estW = item.label.length * item.fontSize * 0.6 + 80;
            const estH = item.fontSize * 0.94;
            const clipFn = CLIP_SHAPES[i] ?? CLIP_SHAPES[0];

            return (
              <a
                key={item.id}
                href="#"
                className={`p3-row ${isActive ? "active" : ""} ${mounted ? "mounted" : ""}`}
                style={{
                  marginRight: item.offsetX,
                  marginTop: item.offsetY,
                  transitionDelay: mounted ? `${i * 80}ms` : "0ms",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href) window.open(item.href, "_blank");
                  else onNavigate?.(item.page);
                }}
                onMouseEnter={() => activate(i)}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="p3-glow" />
                <div
                  className="p3-skew-wrap"
                  style={{ transform: `skewX(${item.skew}deg) skewY(${item.skewY}deg)` }}
                >
                  <div
                    key={isActive ? `pop-${i}-${animKey}` : `idle-${i}`}
                    className={`p3-shadow-tri${isActive ? ' pop' : ''}`}
                    style={{
                      width: estW,
                      height: estH,
                      clipPath: clipFn(estW, estH),
                    }}
                  />
                  <div
                    className="p3-highlight"
                    style={{
                      width: estW,
                      height: estH,
                      clipPath: clipFn(estW, estH),
                      transform: `translateY(-50%) scaleX(${isActive ? 1 : 0})`,
                    }}
                  />
                  <div className="p3-label-wrap" style={{ opacity }}>
                    <span className="p3-label-base p3-label-dark" style={{ fontSize: item.fontSize }}>
                      {item.label}
                    </span>
                    <span
                      className="p3-label-base p3-label-bright"
                      style={{
                        fontSize: item.fontSize,
                        clipPath: clipFn(estW, estH),
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </nav>

        <div className={`p3-guide ${mounted ? "mounted" : ""}`}>
          <div className="p3-guide-label">GUIDE</div>
          <div className="p3-guide-actions">
            <div className="p3-guide-action">
              <span className="p3-guide-badge p3-guide-badge--nav">↑↓</span>
              <span className="p3-guide-action-text">NAVIGATE</span>
            </div>
            <div className="p3-guide-action">
              <span className="p3-guide-badge p3-guide-badge--confirm">↵</span>
              <span className="p3-guide-action-text">OPEN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
