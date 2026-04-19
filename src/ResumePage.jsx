import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ITEMS = [
  { id: "i",   badge: "I",   title: "EXPERIENCE", subtitle: "Roles / Companies",         rank: 1 },
  { id: "ii",  badge: "II",  title: "SKILLS",     subtitle: "Frontend / Backend / Mobile", rank: 2 },
  { id: "iii", badge: "III", title: "EDUCATION",  subtitle: "University / Abroad",        rank: 3 },
];

const EXPERIENCE_ROWS = [
  {
    index: "01",
    company: "DESIGNLI LLC",
    position: "Tech Lead & Senior Developer",
    period: "2024-NOW",
    highlights: [
      "Led end-to-end SDLC using DDD, Clean Architecture & BDD",
      "Established dev standards & mentored team members",
      "Reduced tech debt via SonarCloud, Husky, ESLint & Copilot Reviews",
      "Conducted 1:1s for professional growth & career alignment",
      "Modernized legacy applications including Open Dental",
    ],
    tech: ["NextJS", "NestJS", "Postgres", "AWS", "Docker", "Auth0", "Jest"],
  },
  {
    index: "02",
    company: "WOT DEV",
    position: "Developer",
    period: "AUG-OCT 24",
    highlights: [
      "Developed desktop CMS and mobile educational platform",
      "Designed & managed Postgres database architecture",
      "Tracked bugs & features using Jira & Trello",
    ],
    tech: ["React Vite", "Redux", "Postgres", "AWS", "Ruby on Rails"],
  },
  {
    index: "03",
    company: "HELLO ICONIC",
    position: "Developer",
    period: "2023-24",
    highlights: [
      "Full SDLC on Neil Young Archives & Real Formation",
      "Modernized legacy codebases to current standards",
      "Developed for both desktop and mobile platforms",
      "Documented technical workflows for team onboarding",
    ],
    tech: ["React JS", "Redux", "MongoDB", "Swift", "Kotlin", "AWS", "Rails", "NestJS"],
  },
  {
    index: "04",
    company: "HELLO ICONIC",
    position: "Software Engineering Intern",
    period: "2022-23",
    highlights: [
      "Learned engineering best practices & wrote clean code",
      "Collaborated to identify and resolve software bugs",
      "Contributed to successful project deployments",
    ],
    tech: ["React JS", "Redux", "MongoDB", "Auth0", "Stripe"],
  },
  {
    index: "05",
    company: "BUFETE GUILLEN",
    position: "Freelance Developer",
    period: "2022",
    highlights: [
      "Built comprehensive website in collaboration with Tenloo",
      "Conducted needs analysis to tailor website features",
      "Ensured responsiveness and cross-device compatibility",
    ],
    tech: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
];

const SKILL_ROWS = [
  { index: "01", category: "FRONTEND",   skills: ["TypeScript", "React JS", "NextJS", "Redux", "HTML / CSS"],          count: "5" },
  { index: "02", category: "BACKEND",    skills: ["Node.js", "NestJS", "Ruby on Rails", "Express.js"],                  count: "4" },
  { index: "03", category: "MOBILE",     skills: ["Swift", "Kotlin", "SQLite"],                                          count: "3" },
  { index: "04", category: "DATABASE",   skills: ["Postgres", "MongoDB", "Redis", "AWS DynamoDB & S3"],                  count: "4" },
  { index: "05", category: "DEVOPS",     skills: ["Git / GitHub / Gitflow", "Docker", "Jest", "Auth0", "Stripe"],        count: "5" },
  { index: "06", category: "PRACTICES",  skills: ["Clean Architecture", "DDD", "Code Review", "Agile / Scrum", "Docs"], count: "5" },
];

const EDUCATION_ROWS = [
  {
    index: "01",
    title: "B.Sc. Computer Science Engineering",
    institution: "Universidad Católica De Honduras",
    location: "Tegucigalpa, Honduras",
    status: "COMPLETE",
    detail: "Core curriculum covering software engineering, data structures, algorithms, databases, and systems design.",
  },
  {
    index: "02",
    title: "Computer Engineering — Abroad Studies",
    institution: "Minnesota State University Mankato",
    location: "Mankato, Minnesota, USA",
    status: "COMPLETE",
    detail: "International academic exchange with focus on Computer Engineering and advanced software systems.",
  },
  {
    index: "03",
    title: "AFS Cultural & Academic Exchange",
    institution: "Istituto Omnicomprensivo Leonardo Da Vinci",
    location: "Acquapendente, Viterbo, Italy",
    status: "COMPLETE",
    detail: "Year-long immersive cultural and academic programme, building cross-cultural communication and adaptability.",
  },
];

export default function ResumePage({ src }) {
  const navigate = useNavigate();
  const [active, setActive]           = useState(0);
  const [mounted, setMounted]         = useState(false);
  const [selectedRow, setSelectedRow] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSetActive = (index) => {
    setActive(index);
    setSelectedRow(0);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp")    handleSetActive(Math.max(0, active - 1));
      if (e.key === "ArrowDown")  handleSetActive(Math.min(ITEMS.length - 1, active + 1));
      if (e.key === "ArrowLeft")  navigate(-1);
      if (e.key === "Escape" || e.key === "Backspace") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, active]);

  const expRow  = EXPERIENCE_ROWS[selectedRow] ?? EXPERIENCE_ROWS[0];
  const skillRow = SKILL_ROWS[selectedRow]      ?? SKILL_ROWS[0];
  const eduRow  = EDUCATION_ROWS[selectedRow]   ?? EDUCATION_ROWS[0];

  return (
    <div id="menu-screen">
      <video src={src} autoPlay loop muted playsInline />
      <div className="resume-entry-mask" aria-hidden="true">
        <video className="resume-entry-video" src={src} autoPlay loop muted playsInline />
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap');

        .resume-entry-mask {
          position: absolute;
          inset: 0;
          z-index: 9;
          overflow: hidden;
          background: #0047FF;
          clip-path: circle(0 at 50% 50%);
          animation: resume-entry-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          pointer-events: none;
        }

        .resume-entry-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes resume-entry-reveal {
          from { clip-path: circle(0 at 50% 50%); }
          to   { clip-path: circle(150vmax at 50% 50%); }
        }

        .resume-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
        }

        .resume-stack {
          position: absolute;
          top: 9vh;
          left: 2.8vw;
          width: min(47vw, 720px);
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
          transform: scale(0.9);
          transform-origin: top left;
        }

        .resume-list-tag {
          font-family: 'Anton', sans-serif;
          font-size: 92px;
          line-height: 0.9;
          color: #f6fbff;
          letter-spacing: 2px;
          margin: 0 0 6px 12px;
          text-shadow: 0 2px 0 rgba(0,0,0,0.18);
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .resume-list-tag.mounted {
          opacity: 1;
          transform: translateX(0);
        }

        .resume-card-wrap {
          position: relative;
          opacity: 0;
          transform: translateX(-48px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: all;
          cursor: pointer;
        }
        .resume-card-wrap.mounted {
          opacity: 1;
          transform: translateX(0);
        }

        .resume-card {
          position: relative;
          height: 112px;
          background: #10185f;
          clip-path: polygon(0 0, 97% 0, 100% 100%, 3% 100%);
          box-shadow: 0 8px 0 rgba(5, 13, 59, 0.85);
          transition: transform 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
          overflow: visible;
        }
        .resume-card-wrap.active .resume-card {
          background: #ffffff;
          box-shadow: 10px 8px 0 #d63232;
          transform: translateX(6px);
        }

        .resume-card-inner {
          position: absolute;
          inset: 0;
          padding: 14px 22px 14px 62px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .resume-badge {
          position: absolute;
          top: 10px;
          left: -10px;
          width: 56px;
          height: 70px;
          background: #0b113d;
          border: 3px solid #9cf7ff;
          clip-path: polygon(14% 0, 100% 0, 84% 100%, 0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-8deg);
          box-shadow: 0 4px 0 rgba(0,0,0,0.28);
          transition: background 0.22s ease, border-color 0.22s ease;
        }
        .resume-badge-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          color: #d2fdff;
          letter-spacing: 1px;
          transform: rotate(8deg);
        }
        .resume-card-wrap.active .resume-badge {
          background: #000;
          border-color: #000;
        }
        .resume-card-wrap.active .resume-badge-text {
          color: #fff;
        }

        .resume-title {
          font-family: 'Anton', sans-serif;
          font-size: 56px;
          line-height: 0.9;
          letter-spacing: 1px;
          color: #a5f6ff;
          transition: color 0.22s ease;
        }
        .resume-card-wrap.active .resume-title {
          color: #000;
        }

        .resume-rank {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .resume-rank-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 2px;
          color: #9ffbff;
          transition: color 0.22s ease;
        }
        .resume-rank-number {
          font-family: 'Anton', sans-serif;
          font-size: 70px;
          line-height: 0.82;
          color: #9ffbff;
          transition: color 0.22s ease;
        }
        .resume-card-wrap.active .resume-rank-label,
        .resume-card-wrap.active .resume-rank-number {
          color: #000;
        }

        .resume-subtitle-bar {
          position: absolute;
          left: 64px;
          right: 14px;
          bottom: 12px;
          height: 34px;
          background: #85f4ff;
          clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
          display: flex;
          align-items: center;
          padding: 0 18px;
          transition: background 0.22s ease;
        }
        .resume-card-wrap.active .resume-subtitle-bar {
          background: #000;
        }

        .resume-subtitle {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          line-height: 1;
          letter-spacing: 1px;
          color: #041238;
          transition: color 0.22s ease;
        }
        .resume-card-wrap.active .resume-subtitle {
          color: #fff;
        }

        /* ── Detail panel ── */
        .resume-detail-panel {
          position: absolute;
          top: 9.5vh;
          right: 4.5vw;
          width: min(39vw, 620px);
          min-height: 74vh;
          max-height: 86vh;
          z-index: 12;
          padding: 22px 24px 24px 24px;
          background: linear-gradient(180deg, rgba(15, 28, 105, 0.96) 0%, rgba(8, 16, 68, 0.97) 100%);
          clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%);
          box-shadow:
            inset 0 0 0 1px rgba(133, 244, 255, 0.16),
            16px 16px 0 rgba(0, 6, 30, 0.55);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          pointer-events: all;
        }
        .resume-detail-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(133, 244, 255, 0.08) 0 15%, transparent 15% 100%),
            linear-gradient(180deg, rgba(255,255,255,0.05), transparent 24%);
          pointer-events: none;
        }

        .resume-detail-top {
          position: relative;
          display: grid;
          grid-template-columns: 60px 1fr auto;
          align-items: center;
          gap: 14px;
          min-height: 80px;
          padding: 0 18px;
          background: linear-gradient(90deg, #8ef5ff 0%, #d3fdff 100%);
          clip-path: polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
          color: #08153f;
          box-shadow: 10px 0 0 rgba(255, 94, 136, 0.88);
          flex-shrink: 0;
        }
        .resume-detail-top-index {
          font-family: 'Anton', sans-serif;
          font-size: 40px;
          line-height: 1;
        }
        .resume-detail-top-title {
          font-family: 'Anton', sans-serif;
          font-size: 36px;
          line-height: 0.92;
          letter-spacing: 1px;
        }
        .resume-detail-top-progress {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          letter-spacing: 2px;
          line-height: 1;
        }

        .resume-detail-list {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 14px;
          overflow-y: auto;
          flex-shrink: 0;
        }
        .resume-detail-row {
          display: grid;
          grid-template-columns: 44px 1fr auto;
          align-items: center;
          gap: 12px;
          min-height: 52px;
          padding: 6px 14px;
          background: rgba(8, 18, 72, 0.96);
          clip-path: polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
          box-shadow: inset 0 0 0 1px rgba(140, 239, 255, 0.12);
          transition: transform 0.16s ease, background 0.16s ease;
          cursor: pointer;
        }
        .resume-detail-row:hover,
        .resume-detail-row.selected {
          transform: translateX(4px);
          background: rgba(12, 26, 94, 1);
        }
        .resume-detail-row.selected {
          box-shadow: inset 0 0 0 1px rgba(140, 239, 255, 0.35);
        }
        .resume-detail-row-index {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 1px;
          color: #94f4ff;
        }
        .resume-detail-row-title-group {
          display: flex;
          flex-direction: column;
          gap: 1px;
          overflow: hidden;
        }
        .resume-detail-row-title {
          font-family: 'Anton', sans-serif;
          font-size: 22px;
          line-height: 1;
          color: #f2fcff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .resume-detail-row-sub {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 1px;
          color: rgba(148, 244, 255, 0.65);
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .resume-detail-status {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          line-height: 1;
          letter-spacing: 1px;
          color: #06133b;
          background: #8df6ff;
          padding: 5px 10px;
          clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
          flex-shrink: 0;
        }

        .resume-detail-bottom {
          position: relative;
          margin-top: 14px;
          padding: 16px;
          background: rgba(5, 13, 57, 0.97);
          clip-path: polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
          box-shadow: inset 0 0 0 1px rgba(145, 239, 255, 0.12);
          flex: 1;
        }
        .resume-detail-bottom-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 2px;
          color: #91f5ff;
          margin-bottom: 10px;
        }
        .resume-detail-bullets {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .resume-detail-bullet {
          font-family: 'Anton', sans-serif;
          font-size: 18px;
          line-height: 1.2;
          color: #edfaff;
        }
        .resume-detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .resume-detail-tag {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 15px;
          letter-spacing: 1px;
          padding: 4px 10px;
          background: rgba(140, 239, 255, 0.12);
          border: 1px solid rgba(140, 239, 255, 0.3);
          color: #8df6ff;
          clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 100%, 0 100%);
        }
        .resume-detail-location {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 1.5px;
          color: rgba(148, 244, 255, 0.6);
          margin-bottom: 10px;
        }
      `}</style>

      <div className="resume-overlay">
        <div className="resume-stack">
          <div className={`resume-list-tag${mounted ? " mounted" : ""}`}>LIST</div>
          {ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`resume-card-wrap${active === index ? " active" : ""}${mounted ? " mounted" : ""}`}
              style={{ transitionDelay: `${index * 55}ms` }}
              onMouseEnter={() => handleSetActive(index)}
              onClick={() => handleSetActive(index)}
            >
              <div className="resume-card">
                <div className="resume-badge">
                  <div className="resume-badge-text">{item.badge}</div>
                </div>
                <div className="resume-card-inner">
                  <div className="resume-title">{item.title}</div>
                  <div className="resume-rank">
                    <div className="resume-rank-label">RANK</div>
                    <div className="resume-rank-number">{item.rank}</div>
                  </div>
                </div>
                <div className="resume-subtitle-bar">
                  <div className="resume-subtitle">{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── EXPERIENCE ── */}
        {active === 0 && (
          <div className="resume-detail-panel">
            <div className="resume-detail-top">
              <div className="resume-detail-top-index">EXP</div>
              <div className="resume-detail-top-title">EXPERIENCE LOG</div>
              <div className="resume-detail-top-progress">{EXPERIENCE_ROWS.length} ROLES</div>
            </div>

            <div className="resume-detail-list">
              {EXPERIENCE_ROWS.map((row, i) => (
                <div
                  className={`resume-detail-row${selectedRow === i ? " selected" : ""}`}
                  key={row.index}
                  onClick={() => setSelectedRow(i)}
                  onMouseEnter={() => setSelectedRow(i)}
                >
                  <div className="resume-detail-row-index">{row.index}</div>
                  <div className="resume-detail-row-title-group">
                    <div className="resume-detail-row-title">{row.company}</div>
                    <div className="resume-detail-row-sub">{row.position}</div>
                  </div>
                  <div className="resume-detail-status">{row.period}</div>
                </div>
              ))}
            </div>

            <div className="resume-detail-bottom">
              <div className="resume-detail-bottom-title">{expRow.company} — {expRow.position}</div>
              <div className="resume-detail-bullets">
                {expRow.highlights.map((h) => (
                  <div className="resume-detail-bullet" key={h}>— {h}</div>
                ))}
              </div>
              <div className="resume-detail-tags">
                {expRow.tech.map((t) => (
                  <div className="resume-detail-tag" key={t}>{t}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SKILLS ── */}
        {active === 1 && (
          <div className="resume-detail-panel">
            <div className="resume-detail-top">
              <div className="resume-detail-top-index">SKL</div>
              <div className="resume-detail-top-title">SKILLS LOG</div>
              <div className="resume-detail-top-progress">6 AREAS</div>
            </div>

            <div className="resume-detail-list">
              {SKILL_ROWS.map((row, i) => (
                <div
                  className={`resume-detail-row${selectedRow === i ? " selected" : ""}`}
                  key={row.index}
                  onClick={() => setSelectedRow(i)}
                  onMouseEnter={() => setSelectedRow(i)}
                >
                  <div className="resume-detail-row-index">{row.index}</div>
                  <div className="resume-detail-row-title-group">
                    <div className="resume-detail-row-title">{row.category}</div>
                    <div className="resume-detail-row-sub">{row.skills.slice(0, 3).join(" · ")}</div>
                  </div>
                  <div className="resume-detail-status">{row.count}</div>
                </div>
              ))}
            </div>

            <div className="resume-detail-bottom">
              <div className="resume-detail-bottom-title">{skillRow.category}</div>
              <div className="resume-detail-tags">
                {skillRow.skills.map((s) => (
                  <div className="resume-detail-tag" key={s}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── EDUCATION ── */}
        {active === 2 && (
          <div className="resume-detail-panel">
            <div className="resume-detail-top">
              <div className="resume-detail-top-index">EDU</div>
              <div className="resume-detail-top-title">EDUCATION LOG</div>
              <div className="resume-detail-top-progress">{EDUCATION_ROWS.length} INST</div>
            </div>

            <div className="resume-detail-list">
              {EDUCATION_ROWS.map((row, i) => (
                <div
                  className={`resume-detail-row${selectedRow === i ? " selected" : ""}`}
                  key={row.index}
                  onClick={() => setSelectedRow(i)}
                  onMouseEnter={() => setSelectedRow(i)}
                >
                  <div className="resume-detail-row-index">{row.index}</div>
                  <div className="resume-detail-row-title-group">
                    <div className="resume-detail-row-title">{row.title}</div>
                    <div className="resume-detail-row-sub">{row.institution}</div>
                  </div>
                  <div className="resume-detail-status">{row.status}</div>
                </div>
              ))}
            </div>

            <div className="resume-detail-bottom">
              <div className="resume-detail-bottom-title">{eduRow.institution}</div>
              <div className="resume-detail-location">{eduRow.location}</div>
              <div className="resume-detail-bullets">
                <div className="resume-detail-bullet">— {eduRow.title}</div>
                <div className="resume-detail-bullet">— {eduRow.detail}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
