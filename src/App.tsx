import React from "react";

// ---- Import images so Vite bundles them correctly (MUST be at top) ----
import heroImg from "./assets/hero.jpeg"
import imgForecast from "./assets/forecasting.jpeg"
import imgCredit from "./assets/credit-risk.jpeg"
import imgRecon from "./assets/reconciliation.jpeg"
import imgDashboard from "./assets/dashboard.jpeg"
import financeImg from "./assets/finance.jpg"

/** ====== PROFILE ====== */
const PROFILE = {
  name: "Shakirat E. Muibi",
  role: "Financial Analyst — Reporting | Treasury | Controls",
  blurb:
    "Reporting, treasury, reconciliations, and forecasting—delivered with GL-tied KPIs and repeatable controls.",
  email: "Shakiratmuibi@gmail.com",
  phone: "+353 874 924 618",
  linkedin: "https://www.linkedin.com/in/shakirat-e-muibi-38a0a8115",
  resumeUrl: "#", // add your CV link when ready
}

/** ====== PROJECTS ====== */
type Project = {
  key: string
  title: string
  image: string
  tags: string[]
  summary: string
  details: {
    businessValue: string[]
    data: string[]
    tools: string[]
    analysis: string[]
    delivery: string[]
    insights: string[]
  }
}

const PROJECTS: Project[] = [
  {
    key: "forecasting",
    title: "Business Forecasting — USD/CNY & PPP (Regime-Aware)",
    image: imgForecast,
    tags: ["Python", "ARIMA/ARIMAX", "VAR/VECM", "PPP", "Quarto"],
    summary:
      "Econometric forecasts of USD/CNY to inform hedge timing, transfer-pricing bands, and VaR limits. Regime/policy awareness built into ARIMAX/VECM.",
    details: {
      businessValue: [
        "Use econometric USD/CNY forecasts for hedging, TP bands, VaR.",
        "Avoid naïve trends; CNY has regime, fixing bands, PBoC guidance.",
        "Add regime dummies/rolling windows/Markov switching; include CPI diff, yield spreads, CFETS signals.",
      ],
      data: [
        "USD/CNY daily → monthly (FRED/BIS/IMF/broker).",
        "China CPI (NBS/IMF) & U.S. CPI (BLS/FRED).",
        "RER_t = USDCNY_t × (CPI_US,t / CPI_CN,t); logs; policy markers (2015 deval, band changes).",
      ],
      tools: ["Python + Jupyter (pandas, statsmodels).", "ARIMA, VAR/VECM, ARIMAX.", "Quarto + Plotly/Matplotlib."],
      analysis: [
        "Predictive: ARIMA/ARIMAX; System: VAR/VECM.",
        "Tests: ADF/KPSS, Johansen (PPP), residual/stability, Chow/QA breaks.",
      ],
      delivery: ["Live Quarto report", "PPP/cointegration table", "Repo with notebook + reproducible figures"],
      insights: [
        "Managed float: clustering around fix band; step-moves on policy; volatility asymmetry.",
        "PPP weak short-run; relative-PPP better long-run but break-sensitive.",
        "ARIMA often beats VAR short-horizon; ARIMAX steadies policy periods.",
      ],
    },
  },
  {
    key: "credit",
    title: "Predictive Analytics — Credit Risk Scoring",
    image: imgCredit,
    tags: ["Python", "XGBoost", "SHAP", "SMOTE"],
    summary:
      "ML-based credit scoring benchmarked against logistic regression, with SMOTE balancing and SHAP explainability suitable for regulated environments.",
    details: {
      businessValue: [
        "Improve default detection vs legacy scorecards.",
        "Replace single-model thinking with an evaluated stack.",
        "Provide explainability suitable for regulators.",
      ],
      data: [
        "UCI German/Kaggle Default; demographics, history, income, utilisation, repayment.",
        "SMOTE to rebalance rare default class.",
      ],
      tools: ["scikit-learn, XGBoost, imbalanced-learn, SHAP."],
      analysis: ["Baseline logistic vs RF/XGBoost; CV with ROC-AUC/PR/F1.", "Threshold tuning to portfolio economics."],
      delivery: ["Notebook, comparison plots, SHAP dashboard, governance notes."],
      insights: ["Imbalance matters; trees improved recall.", "SHAP: payment history & utilisation key drivers."],
    },
  },
  {
    key: "recon",
    title: "Python for Business Analytics — Automated Reconciliation",
    image: imgRecon,
    tags: ["Python", "pandas", "RapidFuzz", "SQLAlchemy"],
    summary:
      "Automated bank vs ledger reconciliation with exact/fuzzy matching and exception packs. Fewer aged items, better audit evidence.",
    details: {
      businessValue: [
        "Cut manual recon hours; reduce errors.",
        "Replace opaque Excel checks with traceable evidence.",
        "Introduce exception owner/SLA; optional ERP integration.",
      ],
      data: ["Bank CSV + ledger CSV: date, amount, ref/counterparty."],
      tools: ["pandas, RapidFuzz, optional DB via SQLAlchemy."],
      analysis: ["Descriptive: match rate, exception categories, aging.", "Automation: exact + fuzzy rules."],
      delivery: ["Script + scheduler; Excel/CSV exception packs."],
      insights: [
        "≈80% exact matches; fuzzy closes typos/date drift.",
        "Early surfacing of duplicates/splits improves control posture.",
      ],
    },
  },
  {
    key: "dashboard",
    title: "Business Data Analysis & Visualisation — Financial Dashboard",
    image: imgDashboard,
    tags: ["Power BI", "Plotly", "Streamlit", "SQL"],
    summary:
      "Interactive dashboard for revenue, cost, and margin with drill-downs; forecast overlay and prescriptive nudges for cost control.",
    details: {
      businessValue: [
        "Real-time finance visibility for faster action.",
        "End static monthly packs; enable drill-downs.",
        "Blend descriptive + predictive + prescriptive.",
      ],
      data: ["Revenue by project/month, CoS, overheads, metadata."],
      tools: ["Power BI or Plotly/Streamlit; SQL + pandas ETL."],
      analysis: ["Trends/breakdowns, forecasting, alerting/action rules."],
      delivery: ["Interactive app, shareable links, role-based views."],
      insights: ["Volatility varies by project; subcontractors drive overruns; overheads stable."],
    },
  },
]

/** ====== UI COMPONENTS ====== */

function DetailBlock({
  title,
  items,
  checklist = false,
}: {
  title: string
  items: string[]
  checklist?: boolean
}) {
  return (
    <div className="rounded-xl bg-white border border-black/10 p-4">
      <div className="text-sm font-semibold text-black">{title}</div>
      <ul className="mt-2 space-y-2 text-sm text-black/80">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            {checklist ? (
              // green check
              <svg className="h-4 w-4 mt-0.5" viewBox="0 0 20 20" fill="#047857">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.757 9.5l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <span className="mt-1">•</span>
            )}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** ====== HIGHLIGHTS (stats under hero) ====== */
function Highlights() {
  const items = [
    { label: "Close time", value: "−40%" },
    { label: "Reporting accuracy", value: "98%" },
    { label: "Breaks resolved", value: "70%" },
    { label: "Control breaches", value: "↓ 15%" },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 -mt-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((k) => (
          <div key={k.label} className="rounded-xl border border-black/10 bg-white p-4">
            <div className="text-xs text-black/60">{k.label}</div>
            <div className="text-2xl font-semibold text-black">{k.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** ====== PROJECT CAROUSEL (slideshow) ====== */
function ProjectCarousel({ items }: { items: Project[] }) {
  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const total = items.length

  const go = (i: number) => setIndex((i + total) % total);

  // Autoplay (pause on hover)
  React.useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(index + 1), 5000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused])

  // Keyboard arrows
  React.useEffect(() => {
    const onKey = (e: any) => {
      if (e.key === "ArrowRight") go(index + 1)
      if (e.key === "ArrowLeft") go(index - 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const p = items[index]

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-black/10 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slide (image + white caption) */}
      <div className="relative h-[340px] md:h-[420px]">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
        {/* overlay for legibility */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Caption (white) */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-white text-xl md:text-2xl font-semibold">{p.title}</h3>
          <p className="text-white/90 text-sm md:text-base mt-1">{p.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.slice(0, 4).map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/15 border border-white/30 text-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Previous project"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white px-3 py-2 hover:bg-black/80"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Next project"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white px-3 py-2 hover:bg-black/80"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2.5 bg-white/50"}`}
          />
        ))}
      </div>

      {/* Expandable details below image */}
      <div className="p-4">
        <details className="group">
          <summary className="cursor-pointer text-sm text-black/80 hover:text-black">Case study details</summary>
          <div className="mt-3 space-y-4">
            <DetailBlock title="Business Value (Start – Stop – Improve)" items={p.details.businessValue} checklist />
            <DetailBlock title="Data" items={p.details.data} />
            <DetailBlock title="Tools & Integration" items={p.details.tools} />
            <DetailBlock title="Analysis Type" items={p.details.analysis} />
            <DetailBlock title="Delivery" items={p.details.delivery} />
            <DetailBlock title="Data Behaviour & Insights" items={p.details.insights} />
          </div>
        </details>
      </div>
    </div>
  )
}

/** ====== HERO (portfolio slide style) ====== */
function Hero() {
  const brown = "#5b3b2e"
  const cream = "#fdfcf7"

  return (
    <section id="top" className="max-w-6xl mx-auto px-4 pt-6 pb-10" aria-label="Introduction">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-black/10 shadow-sm">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_60%_30%,rgba(0,0,0,0.06),transparent_70%)]" />
          <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full" style={{ backgroundColor: brown, opacity: 0.2 }} />
          <div className="absolute bottom-8 left-[28%] h-12 w-12 rounded-full" style={{ backgroundColor: "#d8c6b8", opacity: 0.8 }} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-stretch">
          {/* LEFT: circular photo */}
          <div className="relative p-5 md:p-8">
            <div className="relative mx-auto aspect-square max-w-[520px]">
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 0 28px ${brown}` }} />
              <img src={heroImg} alt="Shakirat E. Muibi working on finance analytics" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="relative px-6 md:px-10 py-10 md:py-12">
            <div className="text-4xl md:text-6xl leading-[1.05] font-extrabold tracking-tight" style={{ color: brown }}>
              Professional<br/>Portfolio
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-black">Shakirat E. Muibi</h1>
            <div className="mt-4 inline-flex">
              <span className="inline-flex items-center rounded-full px-5 py-2 text-white text-base md:text-lg font-semibold shadow-sm" style={{ backgroundColor: brown }}>
                Financial Analyst
              </span>
            </div>
            <p className="mt-6 text-black/80 max-w-xl text-sm md:text-base">
              I make finance functions faster, cleaner, and audit-ready. GL-tied reporting, reconciliations & controls,
              treasury visibility, and forecasting leaders can defend. Excel/Power BI, SQL, and Python—shipped as operable
              playbooks with owners and evidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl px-4 py-2 text-white font-medium" style={{ backgroundColor: brown }}>View Projects</a>
              <a href="#contact" className="rounded-xl px-4 py-2 border border-black/20 text-black font-medium" style={{ backgroundColor: cream }}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** ====== INTRODUCTION ====== */
function Introduction() {
  const brown = "#5b3b2e"
  return (
    <section id="intro" className="max-w-6xl mx-auto px-4 pb-10">
      <div className="bg-white border border-black/10 rounded-3xl shadow-sm px-6 md:px-10 py-10 md:py-14">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: brown }}>Introduction</h2>
        <p className="mt-6 text-black/80 max-w-3xl leading-relaxed text-lg">
          With a career spanning construction, real estate, consulting, and technology, I specialise in turning finance into
          a function that delivers speed, accuracy, and audit-readiness. My work cuts across reporting, treasury, reconciliations,
          and forecasting, with a consistent focus on GL-tied KPIs and governed processes.
        </p>
        <p className="mt-4 text-black/80 max-w-3xl leading-relaxed text-lg">
          Whether structuring finance from the ground up, automating reconciliations, or developing predictive models, I aim to
          balance discipline with agility—ensuring reliable numbers and insights leaders can trust.
        </p>
      </div>
    </section>
  )
}

/** ====== ABOUT ME (short, PDF style) ====== */
function AboutMe() {
  const brown = "#5b3b2e"

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 pb-10">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-black/10 shadow-sm">
        {/* subtle decor */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-[35%] bottom-0 h-[60%] w-[85%] rounded-[999px]"
            style={{ backgroundColor: brown, opacity: 0.18 }}
          />
          <div
            className="absolute top-10 left-[38%] h-14 w-14 rounded-full"
            style={{ backgroundColor: "#d8c6b8", opacity: 0.8 }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center px-6 md:px-10 py-10 md:py-12">
          {/* LEFT: text */}
          <div className="relative z-10">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: brown }}
            >
              About me
            </h2>
            <div className="mt-5 space-y-4 max-w-xl text-black/80">
              <p>
                I make finance functions faster, cleaner, and audit-ready. My
                work spans reporting, treasury, reconciliations, and forecasting
                across construction, real estate, consulting, and technology.
              </p>
              <p>
                I’ve built finance from the ground up—introducing structured
                charts of accounts, ERP integrations, and internal controls that
                gave leaders project-level visibility. I’ve also automated
                reconciliations, streamlined reporting, and delivered
                analytics-driven forecasts that turned finance into a decision
                partner.
              </p>
              <p>
                What drives me is balancing discipline with agility: reliable
                numbers, tighter controls, and insights leadership can act on
                with confidence.
              </p>
            </div>
          </div>

          {/* RIGHT: circular image with ring */}
          <div className="relative z-10">
            <div className="relative mx-auto aspect-square max-w-[520px]">
              <div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: `0 0 0 28px ${brown}` }}
              />
              <img
                src={financeImg}
                alt="Finance analytics workspace"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
/** ====== PROJECTS (wraps the carousel) ====== */
function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 pb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">Projects</h2>
      <ProjectCarousel items={PROJECTS} />
    </section>
  )
}

/** ====== CONTACT ====== */
function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 pb-16">
      <div className="bg-white border border-black/10 rounded-2xl p-6">
        <div className="text-lg font-semibold text-black">Contact</div>
        <p className="text-sm text-black/80">
          Open to roles in Treasury, Reporting, and Financial Operations.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
          <span className="text-xs inline-block px-3 py-1 rounded-full bg-[#1e3a5f]/10 border border-[#1e3a5f]/20 text-[#1e3a5f]">
            {PROFILE.email}
          </span>
          <span className="text-xs inline-block px-3 py-1 rounded-full bg-[#1e3a5f]/10 border border-[#1e3a5f]/20 text-[#1e3a5f]">
            {PROFILE.phone}
          </span>
          <a
            className="rounded-2xl border border-black/20 px-3 py-1.5 text-black"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

/** ====== FOOTER ====== */
function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-black/80 text-sm">
        <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <a className="hover:text-black" href="#intro">Intro</a>
          <span>·</span>
          <a className="hover:text-black" href="#about">About</a>
          <span>·</span>
          <a className="hover:text-black" href="#projects">Projects</a>
          <span>·</span>
          <a className="hover:text-black" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

/** ====== APP ROOT ====== */
export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfcf7]">
      <Hero />
      <Highlights />
      <Introduction />
      <AboutMe />
      <Projects />   {/* <-- carousel section */}
      <Contact />    {/* <-- contact section */}
      <Footer />     {/* <-- footer */}
    </div>
  )
}



              
