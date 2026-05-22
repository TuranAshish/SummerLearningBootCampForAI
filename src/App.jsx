import React, { useState } from "react";

const themes = {
  oled: {
    name: "OLED",
    label: "Pure black premium mode",
    bg: "#000000",
    bgSoft: "#030712",
    text: "#ffffff",
    muted: "#cbd5e1",
    faint: "#94a3b8",
    accent: "#34d399",
    accent2: "#22d3ee",
    accent3: "#a78bfa",
    accentText: "#00130b",
    glass: "rgba(255,255,255,0.075)",
    glassStrong: "rgba(255,255,255,0.14)",
    glassUltra: "rgba(255,255,255,0.2)",
    border: "rgba(255,255,255,0.18)",
    shadow: "0 30px 100px rgba(0,0,0,0.72)",
  },
  light: {
    name: "Light",
    label: "Clean bright glass mode",
    bg: "#f5fff9",
    bgSoft: "#ecfeff",
    text: "#07140d",
    muted: "#355445",
    faint: "#6d8276",
    accent: "#16a34a",
    accent2: "#0ea5e9",
    accent3: "#7c3aed",
    accentText: "#ffffff",
    glass: "rgba(255,255,255,0.62)",
    glassStrong: "rgba(255,255,255,0.86)",
    glassUltra: "rgba(255,255,255,0.96)",
    border: "rgba(8,32,20,0.14)",
    shadow: "0 30px 100px rgba(15,118,110,0.16)",
  },
  dark: {
    name: "Dark",
    label: "Mac style blue night mode",
    bg: "#07121f",
    bgSoft: "#0f172a",
    text: "#ffffff",
    muted: "#cbd5e1",
    faint: "#94a3b8",
    accent: "#38bdf8",
    accent2: "#a78bfa",
    accent3: "#34d399",
    accentText: "#020617",
    glass: "rgba(255,255,255,0.08)",
    glassStrong: "rgba(255,255,255,0.14)",
    glassUltra: "rgba(255,255,255,0.2)",
    border: "rgba(255,255,255,0.18)",
    shadow: "0 30px 100px rgba(2,6,23,0.68)",
  },
};

const days = [
  {
    day: "01",
    topic: "AI Foundations",
    text: "Understand what Artificial Intelligence is and how it is used in real life.",
    points: [
      "What Artificial Intelligence means in simple words",
      "Difference between normal software and AI tools",
      "Real-life examples of AI around us",
      "What AI can do and what AI cannot do",
    ],
  },
  {
    day: "02",
    topic: "AI in Daily Life",
    text: "Explore AI in phones, apps, education, business, shopping, and jobs.",
    points: [
      "AI in smartphones and apps",
      "AI in education and learning",
      "AI in shopping, business, and customer support",
      "How AI is changing jobs and daily work",
    ],
  },
  {
    day: "03",
    topic: "ChatGPT Basics",
    text: "Use ChatGPT for ideas, learning, writing, and productivity.",
    points: [
      "What ChatGPT is and how beginners can use it",
      "Using ChatGPT for ideas and explanations",
      "Using ChatGPT for learning and writing",
      "Basic mistakes to avoid while using ChatGPT",
    ],
  },
  {
    day: "04",
    topic: "Prompt Writing",
    text: "Learn how clear instructions create better AI results.",
    points: [
      "What a prompt is",
      "How to write clear instructions",
      "How to add context to prompts",
      "How to get better answers from AI",
    ],
  },
  {
    day: "05",
    topic: "Smart Prompting",
    text: "Use role prompts, examples, formatting, and step-by-step instructions.",
    points: [
      "Using role-based prompts",
      "Giving examples to AI",
      "Asking AI for proper formats",
      "Using step-by-step prompting",
    ],
  },
  {
    day: "06",
    topic: "AI for Study",
    text: "Create notes, summaries, explanations, quizzes, and revision plans.",
    points: [
      "Creating notes from study topics",
      "Making short and simple summaries",
      "Creating quizzes for practice",
      "Making revision plans using AI",
    ],
  },
  {
    day: "07",
    topic: "AI for Content",
    text: "Create captions, emails, blogs, announcements, and scripts.",
    points: [
      "Writing captions using AI",
      "Creating emails and announcements",
      "Writing short blogs and scripts",
      "Improving grammar and content quality",
    ],
  },
  {
    day: "08",
    topic: "AI Image Generation",
    text: "Write better image prompts for posters and creative ideas.",
    points: [
      "Understanding image prompt structure",
      "Adding subject, style, background, and details",
      "Writing poster and banner prompts",
      "Improving prompts for better image results",
    ],
  },
  {
    day: "09",
    topic: "AI Video Tools",
    text: "Plan videos using AI scripts, scenes, and storyboards.",
    points: [
      "Creating video ideas using AI",
      "Writing short video scripts",
      "Planning scenes for videos",
      "Creating simple storyboards",
    ],
  },
  {
    day: "10",
    topic: "AI Voice Tools",
    text: "Create voiceover scripts, narration, and podcast-style content.",
    points: [
      "Writing voiceover scripts",
      "Creating narration for videos",
      "Planning podcast-style content",
      "Making voice content clear and natural",
    ],
  },
  {
    day: "11",
    topic: "AI Presentations",
    text: "Create slide outlines, speaker notes, and presentation flow.",
    points: [
      "Creating presentation outlines",
      "Planning slide content",
      "Writing speaker notes",
      "Making presentation flow simple and clear",
    ],
  },
  {
    day: "12",
    topic: "AI for Coding Basics",
    text: "Use AI to understand simple code and programming concepts.",
    points: [
      "Using AI to explain simple code",
      "Understanding basic programming concepts",
      "Finding simple coding mistakes",
      "Using AI carefully while learning coding",
    ],
  },
  {
    day: "13",
    topic: "AI Automation",
    text: "Learn how AI can save time through repeated task planning.",
    points: [
      "Understanding repeated tasks",
      "Planning simple automation ideas",
      "Creating task checklists using AI",
      "Saving time with structured workflows",
    ],
  },
  {
    day: "14",
    topic: "Responsible AI",
    text: "Learn privacy, fact-checking, plagiarism, bias, and safe AI habits.",
    points: [
      "Protecting personal information",
      "Fact-checking AI answers",
      "Avoiding plagiarism",
      "Understanding bias and safe AI habits",
    ],
  },
  {
    day: "15",
    topic: "Final AI Project",
    text: "Apply everything in one beginner-friendly final project.",
    points: [
      "Choose one beginner-friendly AI project",
      "Use prompts, content, and presentation skills",
      "Prepare the final project output",
      "Present the learning in a simple way",
    ],
  },
];

const projects = [
  {
    title: "AI Study Assistant",
    text: "Create notes, quizzes, revision plans, and simple explanations.",
  },
  {
    title: "AI Content Kit",
    text: "Create captions, emails, short blogs, and announcements.",
  },
  {
    title: "AI Poster Concept",
    text: "Write professional prompts for posters and event designs.",
  },
  {
    title: "AI Presentation Planner",
    text: "Create a 5-slide presentation plan with speaker notes.",
  },
  {
    title: "Final AI Portfolio",
    text: "Combine prompts, content, presentation, and automation ideas.",
  },
];

const benefits = [
  "Builds confidence with modern technology",
  "Improves creativity and communication",
  "Helps students learn smarter",
  "Develops future-ready digital skills",
  "Encourages safe and responsible AI use",
  "Useful for students, parents, and professionals",
];

const skills = [
  "AI Basics",
  "ChatGPT",
  "Prompt Writing",
  "Smart Prompting",
  "Study Support",
  "Content Writing",
  "Image Prompts",
  "Video Planning",
  "Voice Scripts",
  "Presentations",
  "Coding Basics",
  "Automation",
  "AI Safety",
  "Final Project",
];

function LiquidCard({ children, className = "", strong = false }) {
  return (
    <div
      className={`relative overflow-hidden border border-[var(--border)] shadow-2xl backdrop-blur-[34px] ${className}`}
      style={{
        background: strong ? "var(--glassStrong)" : "var(--glass)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/45" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      {children}
    </div>
  );
}

function SectionHeading({ small, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.34em] text-[var(--accent)] md:text-sm">
        {small}
      </p>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--text)] md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

function Toggle({ label, text, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex w-full items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-[var(--glassStrong)] p-4 text-left transition hover:scale-[1.01]"
    >
      <span>
        <span className="block text-sm font-black text-[var(--text)]">
          {label}
        </span>
        <span className="mt-1 block text-xs font-semibold text-[var(--faint)]">
          {text}
        </span>
      </span>

      <span
        className={`relative h-7 w-12 rounded-full border transition ${
          checked
            ? "border-transparent bg-[var(--accent)]"
            : "border-[var(--border)] bg-black/20"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-lg transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </span>
    </button>
  );
}

function App() {
  const [themeKey, setThemeKey] = useState("oled");
  const [openDay, setOpenDay] = useState("01");
  const [oggMode, setOggMode] = useState(true);
  const [glassGrid, setGlassGrid] = useState(true);

  const theme = themes[themeKey];

  const vars = {
    "--bg": theme.bg,
    "--bgSoft": theme.bgSoft,
    "--text": theme.text,
    "--muted": theme.muted,
    "--faint": theme.faint,
    "--accent": theme.accent,
    "--accent2": theme.accent2,
    "--accent3": theme.accent3,
    "--accentText": theme.accentText,
    "--glass": theme.glass,
    "--glassStrong": theme.glassStrong,
    "--glassUltra": theme.glassUltra,
    "--border": theme.border,
    "--shadow": oggMode ? theme.shadow : "0 18px 55px rgba(0,0,0,0.22)",
  };

  return (
    <div
      style={vars}
      className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
    >
      <div className="fixed inset-0 -z-30 bg-[var(--bg)]" />

      {oggMode && (
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[540px] w-[540px] rounded-full bg-[var(--accent)]/30 blur-[115px]" />
          <div className="absolute right-[-160px] top-20 h-[620px] w-[620px] rounded-full bg-[var(--accent2)]/25 blur-[125px]" />
          <div className="absolute bottom-[-180px] left-[30%] h-[540px] w-[540px] rounded-full bg-[var(--accent3)]/20 blur-[125px]" />
        </div>
      )}

      {glassGrid && (
        <div
          className="fixed inset-0 -z-10 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.075) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      )}

      <div
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.18), transparent 34%), linear-gradient(180deg, transparent, var(--bg))",
        }}
      />

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/55 backdrop-blur-[34px]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--glassStrong)] font-black text-[var(--accent)] shadow-xl">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20" />
              <span className="relative">TC</span>
            </div>

            <div>
              <p className="text-xl font-black tracking-tight">TuranCodes</p>
              <p className="text-xs font-bold text-[var(--accent)]">
                Learning AI Courses&nbsp;💻
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a
              href="#plan"
              className="text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              Curriculum
            </a>
            <a
              href="#projects"
              className="text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              Projects
            </a>
            <a
              href="#benefits"
              className="text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              Benefits
            </a>
            <a
              href="#join"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 font-black text-[var(--accentText)] shadow-lg transition hover:scale-[1.04]"
            >
              Enroll Now
            </a>
          </div>

          <a
            href="#join"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-black text-[var(--accentText)] shadow-lg md:hidden"
          >
            Join
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto max-w-7xl px-5 py-10 md:py-16">
          <LiquidCard className="mb-8 rounded-[2rem] p-4" strong>
            <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <p className="text-sm font-black text-[var(--text)]">
                  Apple-Inspired Liquid Glass Controls
                </p>
                <p className="mt-1 text-sm text-[var(--faint)]">
                  Switch theme, glow, and glass grid live.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-5">
                {Object.entries(themes).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setThemeKey(key)}
                    className={`rounded-2xl border px-4 py-3 text-left transition hover:scale-[1.02] ${
                      themeKey === key
                        ? "border-transparent bg-[var(--accent)] text-[var(--accentText)]"
                        : "border-[var(--border)] bg-[var(--glass)] text-[var(--text)]"
                    }`}
                  >
                    <span className="block text-sm font-black">
                      {item.name}
                    </span>
                    <span
                      className={`mt-1 block text-[11px] font-semibold ${
                        themeKey === key
                          ? "text-[var(--accentText)]/80"
                          : "text-[var(--faint)]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setOggMode(!oggMode)}
                  className={`rounded-2xl border px-4 py-3 text-left transition hover:scale-[1.02] ${
                    oggMode
                      ? "border-transparent bg-[var(--accent)] text-[var(--accentText)]"
                      : "border-[var(--border)] bg-[var(--glass)] text-[var(--text)]"
                  }`}
                >
                  <span className="block text-sm font-black">OGG</span>
                  <span
                    className={`mt-1 block text-[11px] font-semibold ${
                      oggMode
                        ? "text-[var(--accentText)]/80"
                        : "text-[var(--faint)]"
                    }`}
                  >
                    Original Glass Glow
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setGlassGrid(!glassGrid)}
                  className={`rounded-2xl border px-4 py-3 text-left transition hover:scale-[1.02] ${
                    glassGrid
                      ? "border-transparent bg-[var(--accent)] text-[var(--accentText)]"
                      : "border-[var(--border)] bg-[var(--glass)] text-[var(--text)]"
                  }`}
                >
                  <span className="block text-sm font-black">Grid</span>
                  <span
                    className={`mt-1 block text-[11px] font-semibold ${
                      glassGrid
                        ? "text-[var(--accentText)]/80"
                        : "text-[var(--faint)]"
                    }`}
                  >
                    Background texture
                  </span>
                </button>
              </div>
            </div>
          </LiquidCard>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-sm font-black text-[var(--accent)] backdrop-blur-3xl">
                15-Day Beginner-Friendly AI Workshop • Fee ₹5,000
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Learn AI from zero with a premium practical workshop.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                A clean, beginner-friendly AI program by TuranCodes for
                students, parents, teachers, creators, job seekers, and working
                professionals who want to use AI confidently.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#join"
                  className="rounded-full bg-[var(--accent)] px-8 py-4 text-center font-black text-[var(--accentText)] shadow-xl transition hover:scale-[1.04]"
                >
                  Join the Workshop
                </a>

                <a
                  href="#plan"
                  className="rounded-full border border-[var(--border)] bg-[var(--glassStrong)] px-8 py-4 text-center font-black text-[var(--text)] shadow-xl backdrop-blur-3xl transition hover:scale-[1.04]"
                >
                  View Curriculum
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "No coding required",
                  "Certificate included",
                  "Beginner friendly",
                  "Project based",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-sm font-semibold text-[var(--muted)] backdrop-blur-3xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <LiquidCard className="rounded-[2.2rem] p-5 md:p-6" strong>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="rounded-full border border-[var(--border)] bg-[var(--glass)] px-3 py-1 text-xs font-black text-[var(--accent)]">
                  LIVE PREVIEW
                </span>
              </div>

              <div className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--glassStrong)] p-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
                  Workshop Promise
                </p>

                <h2 className="mt-4 text-3xl font-black md:text-4xl">
                  Learn AI by doing, not just watching.
                </h2>

                <p className="mt-5 leading-8 text-[var(--muted)]">
                  Students will learn AI tools, prompt writing, content
                  creation, presentations, coding basics, automation,
                  responsible AI use, and complete a final project.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {["15 Days", "₹5,000 Fee", "5 Projects", "Certificate"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--glassUltra)] p-4 font-black backdrop-blur-3xl"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <Toggle
                  label="OGG Mode"
                  text="Extra premium glow"
                  checked={oggMode}
                  onChange={() => setOggMode(!oggMode)}
                />

                <Toggle
                  label="Glass Grid"
                  text="Soft background texture"
                  checked={glassGrid}
                  onChange={() => setGlassGrid(!glassGrid)}
                />
              </div>
            </LiquidCard>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <LiquidCard className="rounded-[2rem] p-8 md:p-12" strong>
            <SectionHeading
              small="Why AI Now"
              title="AI is becoming a basic life skill."
              text="Artificial Intelligence is changing education, jobs, business, creativity, and daily life. This workshop helps beginners understand AI in simple language and use it responsibly for learning, productivity, and creativity."
            />
          </LiquidCard>
        </section>

        <section id="plan" className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            small="Curriculum"
            title="Complete 15-Day Workshop Plan"
            text="Simple, structured, and practical learning for complete beginners."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {days.map(({ day, topic, text, points }) => {
              const isOpen = openDay === day;

              return (
                <LiquidCard
                  key={day}
                  className={`rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 ${
                    isOpen ? "ring-2 ring-[var(--accent)]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDay(isOpen ? null : day)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-black text-[var(--accent)]">
                          DAY {day}
                        </p>
                        <h3 className="mt-2 text-xl font-black">{topic}</h3>
                      </div>

                      <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-black text-[var(--accentText)]">
                        {isOpen ? "OPEN" : "VIEW"}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                      {text}
                    </p>

                    <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">
                      {isOpen ? "Click to close" : "Click to view details"}
                    </p>
                  </button>

                  {isOpen && (
                    <div className="mt-5 rounded-3xl border border-[var(--border)] bg-[var(--glassStrong)] p-5">
                      <p className="mb-3 text-sm font-black text-[var(--text)]">
                        What you will learn:
                      </p>

                      <ul className="space-y-3">
                        {points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </LiquidCard>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            small="Projects"
            title="5 Beginner-Friendly AI Projects"
            text="Students complete practical projects that are easy to understand and useful in real life."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {projects.map((project, index) => (
              <LiquidCard key={project.title} className="rounded-[1.7rem] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] font-black text-[var(--accentText)]">
                  {index + 1}
                </div>

                <h3 className="text-lg font-black">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {project.text}
                </p>
              </LiquidCard>
            ))}
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <LiquidCard className="rounded-[2rem] p-8" strong>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
                Benefits
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Parent-Friendly Benefits
              </h2>

              <div className="mt-6 space-y-3">
                {benefits.map((item) => (
                  <p
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--glassStrong)] p-4 font-semibold text-[var(--muted)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </LiquidCard>

            <LiquidCard className="rounded-[2rem] p-8" strong>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
                Skills
              </p>

              <h2 className="mt-4 text-3xl font-black">Skills Students Gain</h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--glassStrong)] px-4 py-2 text-sm font-bold text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[1.7rem] bg-[var(--accent)] p-6 text-[var(--accentText)] shadow-xl">
                <h3 className="text-2xl font-black">Certificate Included</h3>

                <p className="mt-2 font-semibold leading-7">
                  Students will receive a Certificate of Completion from
                  TuranCodes after successfully completing the 15-day AI
                  workshop.
                </p>
              </div>
            </LiquidCard>
          </div>
        </section>

        <section id="join" className="mx-auto max-w-5xl px-5 py-20 text-center">
          <LiquidCard className="rounded-[2.2rem] p-8 md:p-14" strong>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)]">
              Join TuranCodes AI Workshop
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Take Your First Step into the Future of AI
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Learn AI in a simple, practical, and responsible way with
              TuranCodes. Build confidence, creativity, and future-ready skills.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/918168290554?text=Hi%20TuranCodes%2C%20I%20want%20to%20join%20the%2015-day%20AI%20Workshop."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--accent)] px-8 py-4 font-black text-[var(--accentText)] shadow-xl transition hover:scale-[1.04]"
              >
                WhatsApp Now
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.ashish.turan@gmail.com&su=Admission%20Inquiry%20for%2015-Day%20AI%20Workshop&body=Hi%20TuranCodes%2C%0A%0AI%20want%20to%20know%20more%20about%20the%2015-day%20AI%20Workshop."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--glassStrong)] px-8 py-4 font-black text-[var(--text)] shadow-xl transition hover:scale-[1.04]"
              >
                Gmail
              </a>

              <a
                href="mailto:contact.ashish.turan@gmail.com?subject=Admission%20Inquiry%20for%2015-Day%20AI%20Workshop&body=Hi%20TuranCodes%2C%0A%0AI%20want%20to%20know%20more%20about%20the%2015-day%20AI%20Workshop."
                className="rounded-full border border-[var(--border)] bg-[var(--glassStrong)] px-8 py-4 font-black text-[var(--text)] shadow-xl transition hover:scale-[1.04]"
              >
                Local Mail
              </a>
            </div>

            <p className="mt-5 text-sm text-[var(--faint)]">
              Contact: +91 8168290554 | contact.ashish.turan@gmail.com
            </p>
          </LiquidCard>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg)]/55 px-5 py-8 text-center text-sm text-[var(--faint)] backdrop-blur-3xl">
        © 2026 TuranCodes. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
