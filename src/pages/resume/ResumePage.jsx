import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainVideo from "@assets/main1.mp4";

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
      "Led the end-to-end software development life cycle, from requirement gathering to production deployment",
      "Established development practices and standards for Web Front-End projects",
      "Defined architectures and created scaffolding templates to standardize development and accelerate delivery times",
      "Strengthened testing policies and technical documentation to ensure product stability and reliability",
      "Reduced technical debt by integrating analysis and automation tools such as SonarCloud, Husky, ESLint, and Copilot Reviews",
      "Implemented Pull Request templates, Dependabot, and commit standards to improve codebase health and collaboration",
      "Resolved operational blockers and implemented best practices to optimize team performance",
      "Created technical guides and streamlined workflows to accelerate the onboarding process for new developers",
      "Conducted 1:1 sessions focused on professional development and aligning developer career paths with organizational goals",
      "Worked on bringing modernity to software systems like Open Dental, modernizing legacy applications",
      "Developed software for both desktop via dockerization and also web apps",
    ],
    tech: ["NextJS", "NestJS", "Postgres", "AWS", "Docker", "Auth0", "Javascript", "Jest"],
  },
  {
    index: "02",
    company: "WOT DEV",
    position: "Developer",
    period: "AUG-OCT 24",
    highlights: [
      "Collaborated with Real Formation Program and their requirements",
      "Developed software for both desktop (CMS) and mobile classroom and educational platform",
      "Managed Database Architecture: Designed and managed the database architecture in Postgres, ensuring data integrity, scalability, and efficient querying for large datasets",
      "Bug Tracking and Resolution: Utilized tools like Jira and Trello for tracking bugs and feature requests, ensuring timely resolution and consistent progress towards project milestones",
    ],
    tech: ["React Vite", "Redux", "Postgres", "AWS", "Ruby on Rails", "Devise Authentication"],
  },
  {
    index: "03",
    company: "HELLO ICONIC",
    position: "Developer",
    period: "2023-24",
    highlights: [
      "Collaborated across the systems development lifecycle, from requirements gathering to production releases",
      "Developed software for both desktop and mobile platforms",
      "Addressed team concerns, resolving issues, and implementing best practices",
      "Modernized legacy code bases, enhancing functionality and adherence to modern standards",
      "Documented technical workflows to facilitate onboarding of new team members",
    ],
    tech: ["React JS", "Redux", "MongoDB", "Auth0", "Stripe", "Postgres", "Devise auth", "Swift", "Kotlin", "SQLite", "AWS", "Ruby on Rails", "Nest JS"],
  },
  {
    index: "04",
    company: "HELLO ICONIC",
    position: "Software Engineering Intern",
    period: "2022-23",
    highlights: [
      "Learned software engineering best practices and wrote clean code",
      "Collaborated with developers to identify and fix software bugs",
      "Contributed to successful project deployments",
      "Stayed updated on emerging technology trends",
    ],
    tech: ["React JS", "Redux", "MongoDB", "Auth0", "Stripe"],
  },
  {
    index: "05",
    company: "BUFETE GUILLEN & ASOCIADOS",
    position: "Independent Freelance Developer",
    period: "2022",
    highlights: [
      "Identified and implemented technological solutions to enhance the firm's online presence and operational efficiency",
      "Conducted needs analysis with the firm to tailor website features, including dynamic contact forms and appointment scheduling",
      "Ensured responsiveness across devices for optimal user experience",
      "Contributed to the firm's technological infrastructure, improving service delivery and client engagement",
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
    institution: "Universidad Católica De Honduras (Catholic University of Honduras)",
    location: "Tegucigalpa, FM — Honduras",
    status: "COMPLETE",
    bullets: [
      "Bachelor of Science in Computer Science Engineering",
      "Core curriculum: software engineering, data structures, algorithms, databases, and systems design",
      "Graduated from one of Honduras's leading private universities with a STEM focus",
    ],
  },
  {
    index: "02",
    title: "Computer Engineering — Abroad Studies",
    institution: "Minnesota State University Mankato",
    location: "Mankato, Minnesota — United States",
    status: "COMPLETE",
    bullets: [
      "Bachelor of Computer Engineering (BSEC) — international academic exchange programme",
      "Immersive US college experience with a focus on advanced software and engineering systems",
      "Broadened technical perspective through exposure to US academic standards and multicultural environment",
    ],
  },
  {
    index: "03",
    title: "AFS Cultural & Academic Exchange Year",
    institution: "Istituto Omnicomprensivo Leonardo Da Vinci",
    location: "Acquapendente, Viterbo — Italy",
    status: "COMPLETE",
    bullets: [
      "Full academic year abroad in Acquapendente, Viterbo, Italy through the AFS exchange programme",
      "Developed fluency in Italian and deep cross-cultural communication skills",
      "Built adaptability, resilience, and global perspective — core traits carried into a tech leadership role",
    ],
  },
];

export default function ResumePage() {
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
      <video src={mainVideo} autoPlay loop muted playsInline />
      <div className="resume-entry-mask" aria-hidden="true">
        <video className="resume-entry-video" src={mainVideo} autoPlay loop muted playsInline />
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

        .resume-detail-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          margin-bottom: 2px;
          padding: 0 4px;
          opacity: 0.55;
        }
        .resume-detail-hint-line {
          flex: 1;
          height: 1px;
          background: rgba(140, 239, 255, 0.3);
        }
        .resume-detail-hint-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          color: #8df6ff;
          white-space: nowrap;
        }
        .resume-detail-list {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 7px;
          overflow-x: hidden;
          overflow-y: visible;
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
          overflow-y: auto;
          overflow-x: hidden;
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

        /* ── P3R-style guide bar ── */
        @keyframes resume-guide-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .resume-guide {
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
        .resume-guide.mounted {
          animation: resume-guide-in 0.45s cubic-bezier(0.22,1,0.36,1) 0.6s both;
        }
        .resume-guide-label {
          display: flex;
          align-items: center;
          padding: 0 14px 0 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(0, 180, 255, 0.7);
          border-right: 1px solid rgba(0, 180, 255, 0.18);
        }
        .resume-guide-actions {
          display: flex;
          align-items: center;
        }
        .resume-guide-action {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .resume-guide-action:last-child { border-right: none; }
        .resume-guide-badge {
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
        .resume-guide-badge--nav {
          background: rgba(0, 180, 255, 0.18);
          border: 2px solid rgba(0, 180, 255, 0.6);
          color: #00b4ff;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 12px;
        }
        .resume-guide-badge--confirm {
          background: #2a7a2a;
          border: 2px solid #5bc85b;
          color: #a8ffa8;
        }
        .resume-guide-badge--lr {
          background: rgba(0, 180, 255, 0.18);
          border: 2px solid rgba(0, 180, 255, 0.6);
          color: #00b4ff;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 12px;
        }
        .resume-guide-badge--back {
          background: #7a1a1a;
          border: 2px solid #e03d31;
          color: #ffaaaa;
          border-radius: 6px;
          width: auto;
          padding: 0 6px;
          height: 24px;
          font-size: 11px;
        }
        .resume-guide-action-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1;
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

            <div className="resume-detail-hint">
              <div className="resume-detail-hint-line" />
              <div className="resume-detail-hint-text">↑ HOVER ROW TO EXPLORE ↓</div>
              <div className="resume-detail-hint-line" />
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

            <div className="resume-detail-hint">
              <div className="resume-detail-hint-line" />
              <div className="resume-detail-hint-text">↑ HOVER ROW TO EXPLORE ↓</div>
              <div className="resume-detail-hint-line" />
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

            <div className="resume-detail-hint">
              <div className="resume-detail-hint-line" />
              <div className="resume-detail-hint-text">↑ HOVER ROW TO EXPLORE ↓</div>
              <div className="resume-detail-hint-line" />
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
                {eduRow.bullets.map((b) => (
                  <div className="resume-detail-bullet" key={b}>— {b}</div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <div className={`resume-guide${mounted ? " mounted" : ""}`}>
        <div className="resume-guide-label">GUIDE</div>
        <div className="resume-guide-actions">
          <div className="resume-guide-action">
            <span className="resume-guide-badge resume-guide-badge--lr">←→</span>
            <span className="resume-guide-action-text">SECTION</span>
          </div>
          <div className="resume-guide-action">
            <span className="resume-guide-badge resume-guide-badge--nav">↑↓</span>
            <span className="resume-guide-action-text">SELECT</span>
          </div>
          <div className="resume-guide-action">
            <span className="resume-guide-badge resume-guide-badge--confirm">↵</span>
            <span className="resume-guide-action-text">EXPAND</span>
          </div>
          <div className="resume-guide-action">
            <span className="resume-guide-badge resume-guide-badge--back">ESC</span>
            <span className="resume-guide-action-text">BACK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
