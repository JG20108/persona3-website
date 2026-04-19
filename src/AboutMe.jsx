import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import char1 from "@assets/char1.png";
import char2 from "@assets/char2.png";
import char3 from "@assets/char3.png";
import bgVideo from "@assets/main1.mp4";
import icon1 from "@assets/icon1.png";
import icon2 from "@assets/icon2.png";
import icon3 from "@assets/icon3.png";
import mainm from "@assets/mainm.jpeg";
import mainm2 from "@assets/mainm2.jpeg";
import mainf from "@assets/mainf.jpeg";
import awardFeb2025 from "@assets/awardFeb2025.png";
import awardJun2025 from "@assets/awardJun2025.png";
import awardCometFeb2026 from "@assets/cometChampionFeb2026.png";

const CHARS = [char1, char2, char3];
const MAIN_IMAGES = [mainm, mainm2, mainf];

const REVEAL_CONTENT = [
  {
    type: "info",
    upper: [
      "José Guillén",
      "Tech Lead & Senior Software Developer",
      "Full Stack Developer — React, Node, TypeScript & more",
      "Tech Lead driving architecture & engineering standards",
    ],
    lower: "Senior Software Developer · Honduras",
  },
  {
    type: "skills",
    skills: [
      {
        title: "Full Stack Developer",
        lines: [
          "Proficient in both front-end and back-end technologies,",
          "handling all aspects from UI design to database management.",
        ],
      },
      {
        title: "Adaptable",
        lines: [
          "Comfortable with rapidly changing technologies,",
          "quickly learning and applying new concepts and tools.",
        ],
      },
      {
        title: "Team Player",
        lines: [
          "Known for effective communication and conflict resolution,",
          "leading collaborative efforts across teams.",
        ],
      },
    ],
    lower: "Core Competencies",
  },
  {
    type: "recognition",
    upper: [
      "Top Performer — February 2025",
      "Best Team Player — June 2025",
      "Comet Champion — February 2026",
    ],
    images: [
      { src: awardFeb2025,      caption: "Top Performer · Feb 2025" },
      { src: awardJun2025,      caption: "Best Team Player · Jun 2025" },
      { src: awardCometFeb2026, caption: "Comet Champion · Feb 2026" },
    ],
    lower: "Career Recognition & Awards",
  },
];

const ROLES = [
  { text: "LEADER", color: "#e8c100", bg: "rgba(232,193,0,0.12)", border: "rgba(232,193,0,0.5)" },
  { text: "PARTY",  color: "#4a8fff", bg: "rgba(74,143,255,0.12)", border: "rgba(74,143,255,0.5)" },
  { text: "PARTY",  color: "#4a8fff", bg: "rgba(74,143,255,0.12)", border: "rgba(74,143,255,0.5)" },
];

const ITEMS = [
  {
    id: "about",      label: "ABOUT ME",   barIcon: icon1,
    stats: [
      { tag: "AGE", value: "23",   color: "#9147ff" },
      { tag: "EXP", value: "3YR",  color: "#bf94ff" },
    ],
  },
  {
    id: "experience", label: "CORE COMPETENCIES", barIcon: icon2,
    stats: [
      { tag: "STK", value: "FS",   color: "#e1306c" },
      { tag: "ROL", value: "TL",   color: "#f77737" },
    ],
  },
  {
    id: "awards",     label: "CAREER RECOGNITION & AWARDS", barIcon: icon3,
    stats: [
      { tag: "AWD", value: "2",    color: "#00f2ea" },
      { tag: "YR",  value: "2025", color: "#ff0050" },
    ],
  },
];

export default function AboutMe() {
  const [active, setActive]           = useState(0);
  const [mounted, setMounted]         = useState(false);
  const [revealed, setRevealed]       = useState(false);
  const [expandedAward, setExpandedAward] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") setActive(i => Math.max(0, i - 1));
      if (e.key === "ArrowDown") setActive(i => Math.min(ITEMS.length - 1, i + 1));
      if (e.key === "Enter") setRevealed(true);
      if (e.key === "ArrowRight") setRevealed(true);
      if (e.key === "ArrowLeft") {
        if (revealed) setRevealed(false);
        else navigate(-1);
      }
      if (e.key === "Escape" || e.key === "Backspace") {
        if (expandedAward) { setExpandedAward(null); return; }
        navigate(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, navigate, revealed, expandedAward]);

  return (
    <div id="menu-screen">
      <video src={bgVideo} autoPlay loop muted playsInline />
      {revealed && <div key={`dim-${active}`} className="sc-dim" />}
      {revealed && (
        <div
          key={`panel-${active}`}
          className={`sc-reveal-panel${mounted ? " mounted" : ""}`}
          style={{ pointerEvents: REVEAL_CONTENT[active]?.type === 'recognition' ? 'auto' : 'none' }}
        >
          {REVEAL_CONTENT[active].type === "info" && (
            <div className="sc-reveal-upper-bar">
              {REVEAL_CONTENT[active].upper.map((line) => (
                <div className="sc-reveal-upper-line" key={line}>{line}</div>
              ))}
            </div>
          )}
          {REVEAL_CONTENT[active].type === "skills" && (
            <div className="sc-reveal-skills">
              <div className="sc-skills-track">
                {REVEAL_CONTENT[active].skills.map((skill) => (
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
                {REVEAL_CONTENT[active].skills.map((skill) => (
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
          {REVEAL_CONTENT[active].type === "recognition" && (
            <div className="sc-reveal-recognition">
              {REVEAL_CONTENT[active].images.map((img) => (
                <div
                  className="sc-award-col"
                  key={img.caption}
                  style={{ pointerEvents: 'all' }}
                  onClick={() => setExpandedAward(img)}
                >
                  <img className="sc-award-img" src={img.src} alt={img.caption} />
                  <div className="sc-award-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          )}
          <div className="sc-reveal-lower-bar">
            <span className="sc-lower-bar-text">{REVEAL_CONTENT[active].lower}</span>
          </div>
        </div>
      )}
      {revealed && (
        <div key={`nav-${active}`} className="sc-right-nav">
          <span className="sc-nav-arrow left">◄</span>
          <span className="sc-nav-btn">↑</span>
          <span className="sc-nav-dot" />
          <span className="sc-nav-btn">↓</span>
          <span className="sc-nav-arrow right">►</span>
        </div>
      )}
      {revealed && (
        <div key={`portrait-${active}`} className={`sc-main-portrait-shell${mounted ? " mounted" : ""}`}>
          <img
            className="sc-main-portrait"
            src={MAIN_IMAGES[active]}
            alt=""
          />
        </div>
      )}
      {expandedAward && (
        <div className="sc-award-modal" onClick={() => setExpandedAward(null)}>
          <div className="sc-award-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={expandedAward.src} alt={expandedAward.caption} />
            <div className="sc-award-modal-caption">{expandedAward.caption}</div>
          </div>
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

        .sc-root {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
          padding-left: 0;
        }

        .sc-dim {
          position: absolute;
          inset: 0;
          z-index: 12;
          background: rgba(40, 45, 54, 0.68);
          pointer-events: none;
          animation: sc-dim-in 0.32s ease-out;
        }

        @keyframes sc-dim-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes sc-reveal-bar-in {
          0% {
            opacity: 0;
            transform: translateX(-120px) rotate(-20deg) scaleX(0.72);
          }
          60% {
            opacity: 0.96;
            transform: translateX(18px) rotate(-20deg) scaleX(1.03);
          }
          100% {
            opacity: 0.92;
            transform: translateX(0) rotate(-20deg) scaleX(1);
          }
        }

        @keyframes sc-portrait-in {
          0% {
            opacity: 0;
            transform: translateX(78px) skewX(-8deg) scale(0.94);
            filter: blur(8px);
          }
          55% {
            opacity: 0.9;
            transform: translateX(-8px) skewX(-8deg) scale(1.015);
            filter: blur(0);
          }
          100% {
            opacity: 0.96;
            transform: translateX(0) skewX(-8deg) scale(1);
            filter: blur(0);
          }
        }

        @keyframes sc-arrow-left {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-5px); opacity: 0.4; }
        }

        @keyframes sc-arrow-right {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(5px); opacity: 0.4; }
        }

        .sc-main-portrait-shell {
          position: absolute;
          top: 0;
          right: -3vw;
          z-index: 13;
          pointer-events: none;
          width: 43vw;
          height: 100vh;
          overflow: hidden;
          opacity: 0;
          transform: translateX(24px) skewX(-8deg) scale(0.98);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .sc-main-portrait-shell.mounted {
          opacity: 0.96;
          transform: translateX(0) skewX(-8deg) scale(1);
          animation: sc-portrait-in 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .sc-reveal-panel {
          position: absolute;
          top: 44vh;
          left: -6vw;
          width: 88vw;
          height: 60vh;
          z-index: 12;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(243,246,252,0.98) 100%);
          clip-path: polygon(0 0, 100% 0, calc(100% - 88px) 100%, 0 100%);
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.18),
            18px 0 0 rgba(215, 13, 44, 0.82),
            28px 0 0 rgba(255,255,255,0.26);
          opacity: 0;
          transform: translateX(-40px) rotate(-20deg);
          transform-origin: left bottom;
          transition: opacity 0.3s ease, transform 0.35s ease;
        }
        .sc-reveal-panel.mounted {
          opacity: 0.92;
          transform: translateX(0) rotate(-20deg);
          animation: sc-reveal-bar-in 0.46s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sc-reveal-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(180deg, #e03d31 0%, #eb3333 100%);
          clip-path: inherit;
        }
        .sc-reveal-upper-bar {
          position: absolute;
          top: 10%;
          left: 0%;
          width: 100%;
          height: 40%;
          background: rgba(0, 0, 0, 0.92);
          clip-path: polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #fff;
          text-align: center;
        }
        .sc-reveal-upper-line {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(16px, 1.48vw, 38px);
          letter-spacing: 0.5px;
          line-height: 1.15;
        }
        .sc-reveal-lower-bar {
          position: absolute;
          top: 58%;
          right: 0;
          width: 48%;
          height: 20%;
          background: rgba(6, 10, 20, 0.96);
          clip-path: polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%);
          box-shadow:
            inset 3px 0 0 #00b4ff,
            0 0 22px rgba(0, 180, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(18px, 1.64vw, 42px);
          letter-spacing: 0.4px;
          padding-left: 3vw;
        }
        .sc-lower-bar-text {
          background: linear-gradient(90deg, #ffffff 0%, #a8deff 55%, #00b4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 6px rgba(0, 180, 255, 0.65));
        }

        @keyframes sc-right-nav-pop {
          0%   { opacity: 0; transform: scale(0.55) translateY(-10px); }
          65%  { opacity: 1; transform: scale(1.1) translateY(2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .sc-right-nav {
          position: absolute;
          top: 10vh;
          left: 6vw;
          display: flex;
          align-items: center;
          gap: 6px;
          pointer-events: none;
          z-index: 14;
          transform: translateX(-40px) rotate(-20deg);
          transform-origin: left bottom;
          animation: sc-right-nav-pop 0.38s cubic-bezier(0.22,1,0.36,1) both;
        }
        .sc-right-nav .sc-nav-btn {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 3.9vw, 100px);
          letter-spacing: 3px;
          line-height: 1;
          user-select: none;
          color: #fff;
          -webkit-text-stroke: 2px #000;
          paint-order: stroke fill;
          background: none;
          border: none;
          padding: 0 6px;
        }
        .sc-right-nav .sc-nav-dot {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          background: #111;
          margin: 0 10px;
          flex-shrink: 0;
        }
        .sc-right-nav .sc-nav-arrow {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(13px, 0.86vw, 22px);
          color: #c4001a;
          display: inline-block;
          user-select: none;
        }
        .sc-right-nav .sc-nav-arrow.left  { animation: sc-arrow-left  0.8s ease-in-out infinite; }
        .sc-right-nav .sc-nav-arrow.right { animation: sc-arrow-right 0.8s ease-in-out infinite; }

        .sc-main-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top right;
          transform: skewX(8deg) scale(1.08);
          transform-origin: top right;
        }

        /* ── Each bar ── */
        .sc-bar {
          position: relative;
          width: 45vw;
          height: 64px;
          transition: height 0.3s cubic-bezier(0.22,1,0.36,1);
          background: #111;
          cursor: pointer;
          pointer-events: all;
          clip-path: polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
          box-shadow: 0 6px 24px rgba(0,0,0,0.65);
          z-index: 1;
        }

        /* wrapper holds both the red underlay and the bar */
        .sc-bar-outer {
          position: relative;
          flex-shrink: 0;
          transform: translateX(-100%);
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sc-bar-outer.active .sc-bar     { height: 90px; }
        .sc-bar-outer.active .sc-bar-red { height: 90px; }
        .sc-bar-outer.mounted { transform: translateX(0); }
        .sc-bar-outer:nth-child(1) { transition-delay: 0ms; }
        .sc-bar-outer:nth-child(2) { transition-delay: 80ms; }
        .sc-bar-outer:nth-child(3) { transition-delay: 160ms; }

        /* red underlay — peeks out below the bar when active */
        .sc-bar-red {
          position: absolute;
          top: 0; left: 0;
          width: 45vw;
          height: 64px;
          background: #c4001a;
          clip-path: polygon(50% 0, 100% 0, 100% 100%, calc(50% - 10px) 100%);
          transform: translateY(-7px);
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 0;
          pointer-events: none;
        }
        .sc-bar-outer.active .sc-bar-red { opacity: 1; }

        /* white fill — skewed parallelogram on the right 25% */
        .sc-bar-fill {
          position: absolute;
          inset: 0;
          width: 100%;
          background: #ffffff;
          clip-path: polygon(100% 0, 100% 0, calc(100% - 32px) 100%, calc(100% - 32px) 100%);
          transition: clip-path 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
        }
        .sc-bar-outer.active .sc-bar-fill {
          clip-path: polygon(22% 0, 100% 0, calc(100% - 14px) 100%, calc(22% + 138px) 100%);
        }

        /* shade on the left edge of the white fill */
        .sc-bar-shade {
          position: absolute;
          top: 0; bottom: 0;
          left: 73%;
          width: 6%;
          background: linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%);
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .sc-bar-outer.active .sc-bar-shade { opacity: 1; }

        /* bottom shadow line under each bar */
        .sc-bar::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 6px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%);
          z-index: 10;
          pointer-events: none;
        }

        /* content layout inside each bar */
        .sc-bar-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px 0 20px;
        }

        /* left: role label */
        .sc-role {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(22px, 1.95vw, 50px);
          letter-spacing: -2px;
          color: #ffffff;
          transform: rotate(-30deg);
          user-select: none;
          line-height: 1;
          padding: 0 16px 0 8px;
        }

        /* left: icon + name centered in remaining space */
        .sc-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding-left: 78px;
        }
        .sc-main-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sc-icon {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(13px, 0.86vw, 22px);
          width: 32px;
          text-align: center;
          flex-shrink: 0;
          color: rgba(255,255,255,0.15);
          transition: color 0.2s ease;
          user-select: none;
        }
        .sc-bar-outer.active .sc-icon { color: rgba(255,255,255,0.25); }

        .sc-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(16px, 1.48vw, 38px);
          letter-spacing: clamp(1px, 0.16vw, 4px);
          line-height: 1;
          color: rgba(255,255,255,0.85);
          transition: color 0.2s ease;
          user-select: none;
        }
        .sc-bar-outer.active .sc-label { color: #111111; }

        /* right: stats group */
        .sc-stats {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-right: 24px;
          flex-shrink: 0;
        }

        .sc-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .sc-stat-top {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .sc-stat-tag {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(7px, 0.35vw, 9px);
          letter-spacing: 1.5px;
          padding: 1px 4px;
          border-width: 1px;
          border-style: solid;
          line-height: 1.4;
          user-select: none;
        }

        .sc-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(13px, 1.02vw, 26px);
          font-style: italic;
          line-height: 1;
          color: #ffffff;
          letter-spacing: 1px;
          user-select: none;
          transition: color 0.2s ease;
        }
        .sc-bar-outer.active .sc-stat-num { color: #111111; }

        .sc-stat-bars {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1px;
          margin-top: 2px;
        }
        .sc-stat-bar-color {
          height: 3px;
          width: 100%;
        }
        .sc-stat-bar-black {
          height: 2px;
          width: 100%;
          background: #000;
        }

        /* character portrait */
        .sc-char {
          position: absolute;
          top: 0;
          left: 110px;
          height: 100%;
          width: auto;
          max-width: 160px;
          object-fit: cover;
          object-position: top;
          pointer-events: none;
          z-index: 3;
          clip-path: polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);
        }

        /* ── P3R-style guide bar ── */
        @keyframes sc-guide-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sc-footer {
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
        .sc-footer.mounted {
          animation: sc-guide-in 0.45s cubic-bezier(0.22,1,0.36,1) 0.6s both;
        }
        .sc-footer-label {
          display: flex;
          align-items: center;
          padding: 0 14px 0 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(0, 180, 255, 0.7);
          border-right: 1px solid rgba(0, 180, 255, 0.18);
        }
        .sc-footer-actions {
          display: flex;
          align-items: center;
        }
        .sc-footer-action {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .sc-footer-action:last-child { border-right: none; }
        .sc-footer-badge {
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
        .sc-footer-badge--nav {
          background: rgba(0, 180, 255, 0.18);
          border: 2px solid rgba(0, 180, 255, 0.6);
          color: #00b4ff;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 12px;
        }
        .sc-footer-badge--confirm {
          background: #2a7a2a;
          border: 2px solid #5bc85b;
          color: #a8ffa8;
        }
        .sc-footer-badge--back {
          background: #7a1a1a;
          border: 2px solid #e03d31;
          color: #ffaaaa;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 11px;
        }
        .sc-footer-action-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1;
        }

        @keyframes sc-cinta {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }


        /* ── Skills panel (Experience bar) ── */
        .sc-reveal-skills {
          position: absolute;
          top: 10%;
          left: 0%;
          width: 100%;
          height: 44%;
          background: rgba(0, 0, 0, 0.92);
          clip-path: polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          overflow: hidden;
          color: #fff;
          text-align: center;
        }
        .sc-cinta-spacer {
          width: 8vw;
          flex-shrink: 0;
        }
        .sc-skills-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: sc-cinta 31s linear infinite;
        }
        .sc-skill-entry {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          width: 32vw;
          padding: 0 4vw;
        }
        .sc-skill-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(18px, 1.76vw, 45px);
          letter-spacing: 0.5px;
          line-height: 1.15;
          color: #e03d31;
        }
        .sc-skill-desc {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(14px, 1.17vw, 30px);
          letter-spacing: 0.5px;
          line-height: 1.15;
          color: rgba(255, 255, 255, 0.85);
        }

        /* ── Recognition panel (Awards bar) ── */
        .sc-reveal-recognition {
          position: absolute;
          top: 10%;
          left: 0%;
          width: 100%;
          height: 44%;
          background: rgba(0, 0, 0, 0.92);
          clip-path: polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 28px;
          color: #fff;
          text-align: center;
        }
        .sc-award-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          pointer-events: all;
          transition: transform 0.2s ease;
        }
        .sc-award-col:hover {
          transform: scale(1.04);
        }
        .sc-award-img {
          height: clamp(80px, 14vw, 200px);
          width: auto;
          max-width: 260px;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
          transition: box-shadow 0.2s ease;
        }
        .sc-award-col:hover .sc-award-img {
          box-shadow: 0 4px 20px rgba(196, 0, 26, 0.5);
        }
        .sc-award-caption {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(14px, 1.17vw, 30px);
          letter-spacing: 0.5px;
          line-height: 1.15;
          color: rgba(255,255,255,0.85);
        }

        /* ── Award modal ── */
        .sc-award-modal {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0, 0, 0, 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          animation: sc-dim-in 0.22s ease-out;
        }
        .sc-award-modal-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          cursor: default;
          pointer-events: all;
          max-width: 80vw;
        }
        .sc-award-modal-content img {
          max-width: 100%;
          max-height: 72vh;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.7);
        }
        .sc-award-modal-caption {
          font-family: 'Barlow Condensed', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(13px, 0.78vw, 20px);
          letter-spacing: 0.5px;
          color: rgba(255,255,255,0.85);
        }
      `}</style>

      <div className="sc-root" role="navigation">
        {ITEMS.map((item, i) => (
          <div
            key={item.id}
            className={`sc-bar-outer${active === i ? " active" : ""}${mounted ? " mounted" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="sc-bar-red" />
            <div className="sc-bar">
              <img className="sc-char" src={CHARS[i]} alt="" />
              <div className="sc-bar-fill" />
              <div className="sc-bar-shade" />
              <div className="sc-bar-content">
                <div className="sc-role">{ROLES[i].text}</div>
                <div className="sc-main">
                  <div className="sc-main-top">
                    <div className="sc-label">{item.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`sc-footer${mounted ? " mounted" : ""}`}>
        <div className="sc-footer-label">GUIDE</div>
        <div className="sc-footer-actions">
          <div className="sc-footer-action">
            <span className="sc-footer-badge sc-footer-badge--nav">↑↓</span>
            <span className="sc-footer-action-text">SELECT</span>
          </div>
          <div className="sc-footer-action">
            <span className="sc-footer-badge sc-footer-badge--confirm">↵</span>
            <span className="sc-footer-action-text">REVEAL</span>
          </div>
          <div className="sc-footer-action">
            <span className="sc-footer-badge sc-footer-badge--back">ESC</span>
            <span className="sc-footer-action-text">BACK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
