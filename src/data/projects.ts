// src/data/projects.ts
export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  outcomes: string[]
  kpis?: { label: string; value: string }[]
  problem?: string
  approach?: string[]
  solution?: string[]
  results?: string[]
  lessons?: string[]
  demo?: string
  repo?: string
  monthlyClose?: { m: string; days: number }[]
  exceptions?: { m: string; items: number }[]
  costMix?: { name: string; value: number }[]
  forecastSample?: { date: string; actual?: number; forecast?: number }[]
}

export const PROJECTS: Project[] = [
  {
  slug: "usdcny-forecasting",
  title: "Business Forecasting – USD/CNY with PPP & Regime Awareness",
  summary:
    "Econometric forecasting of USD/CNY with PPP testing, regime/policy markers, and ARIMAX/VECM ensemble options.",
  tags: ["Python","statsmodels","ARIMA/ARIMAX","VAR/VECM","Quarto"],
  outcomes: [
    "Short-horizon ARIMA often lower RMSE than VAR/VECM",
    "ARIMAX with policy dummies stabilised error during policy episodes",
    "PPP cointegration weak short-run; improves on longer windows"
  ],
  kpis: [
    { label: "RMSE Δ vs baseline", value: "− (illustrative)" },
    { label: "Backtest windows", value: "rolling" },
    { label: "Models compared", value: "ARIMA | ARIMAX | VAR/VECM" }
  ],
  problem:
    "Risk and treasury decisions treated CNY as a freely floating G10 pair. Regime shifts, fixing bands, and PBoC guidance break naive trend models and degrade hedge timing, transfer-pricing ranges, and VaR limits.",
  approach: [
    "Data: USD/CNY daily → monthly aggregation (FRED/BIS/IMF/broker); CN CPI (NBS/IMF) and US CPI (BLS/FRED).",
    "Transformations: monthly frequency; Real Exchange Rate RER_t = USDCNY_t × (CPI_US,t / CPI_CN,t); log transforms; differencing as needed.",
    "Regime awareness: policy/regime markers (e.g., 2015 devaluation dummy; band-widening dates); rolling windows; optional Markov-switching.",
    "Diagnostics: ADF/KPSS for stationarity; Johansen cointegration (PPP); residual/stability checks; optional Chow/Quandt–Andrews around policy dates.",
    "Models: ARIMA for short-run; VAR/VECM for system dynamics (FX + CPI_CN + CPI_US); ARIMAX including policy/regime dummies."
  ],
  solution: [
    "Forecast pipeline in Python (pandas + statsmodels) with ARIMA/ARIMAX and VAR/VECM tracks.",
    "Backtesting: rolling windows with RMSE/MAE and Diebold–Mariano comparisons.",
    "Quarto report published to GitHub Pages; figures via Plotly/Matplotlib; memo section explains treasury implications."
  ],
  results: [
    "Managed float features visible: clustering near fixes, step-moves at policy points, volatility asymmetry.",
    "PPP evidence typically weak in the short run; relative-PPP improves over longer windows but degrades around structural breaks.",
    "ARIMA tended to win at short horizons; adding regime dummies (ARIMAX) further stabilised errors during policy episodes."
  ],
  lessons: [
    "Always encode policy/regime structure (dummies, rolling windows, or switching) before trusting forecast bands.",
    "Use ensemble logic: near-term ARIMA/ARIMAX + periodic VAR/VECM re-estimation for PPP/system context.",
    "Document data lineage (sources, aggregation rules) for auditability and reproducibility."
  ],
  demo: "#",
  repo: "#",
  // Chart: Forecast vs Actual (illustrative sample; replace with your backtest series)
  forecastSample: [
    { date: "2024-01", actual: 7.18, forecast: 7.17 },
    { date: "2024-02", actual: 7.20, forecast: 7.19 },
    { date: "2024-03", actual: 7.23, forecast: 7.21 },
    { date: "2024-04", actual: 7.24, forecast: 7.23 },
    { date: "2024-05", actual: 7.25, forecast: 7.24 }
  ]
},
  {
    slug: "credit-risk-scoring",
    title: "Predictive Analytics – Credit Risk Scoring",
    summary:
      "ML-based credit scoring with SMOTE balancing, benchmarked against logistic regression, with SHAP explainability.",
    tags: ["Python","scikit-learn","XGBoost","SHAP","SMOTE"],
    outcomes: [
      "Higher recall on defaults vs logistic baseline",
      "Explainability via SHAP for regulators",
      "Cross-validated ROC-AUC and F1 improvements"
    ],
    kpis: [
      { label: "ROC-AUC gain", value: "+0.06" },
      { label: "Recall (defaults)", value: "↑" },
      { label: "Balancing", value: "SMOTE" }
    ],
    problem:
      "Legacy scorecards under-identified risk and lacked transparent attribution.",
    approach: [
      "Feature engineering (utilisation, delinquency, income ratios).",
      "Logistic (baseline), Random Forest, XGBoost.",
      "Threshold tuning against portfolio economics."
    ],
    solution: [
      "Train/validate pipeline with calibration.",
      "SHAP plots to surface drivers."
    ],
    results: [
      "Improved recall with acceptable precision.",
      "Defensible model governance package."
    ],
    lessons: [
      "Keep feature lineage and data quality controls.",
      "Revisit thresholds as macro shifts."
    ],
    exceptions: [
      { m: "Baseline", items: 100 },
      { m: "ML v1", items: 78 },
      { m: "ML v2", items: 70 }
    ],
    costMix: [
      { name: "PD error cost", value: 35 },
      { name: "LGD impact", value: 25 },
      { name: "Opex model run", value: 15 },
      { name: "Review time", value: 25 }
    ]
  },
  {
    slug: "automated-reconciliations",
    title: "Python for Business Analytics – Automated Reconciliation",
    summary:
      "Automated bank vs ledger reconciliation with exact/fuzzy matching and exception reporting for faster closes and stronger controls.",
    tags: ["Python","pandas","RapidFuzz","SQLAlchemy","CSV/Excel"],
    outcomes: [
      "≈80% exact matches; fuzzy matching closed gaps",
      "Exception packs with owner & SLA",
      "Fewer duplicate/erroneous payments"
    ],
    kpis: [
      { label: "Exact match rate", value: "≈80%" },
      { label: "Exceptions aged >7d", value: "↓" },
      { label: "Close time impact", value: "− days" }
    ],
    problem:
      "Manual Excel reconciliations were slow, error-prone, and lacked traceability.",
    approach: [
      "Normalised sources (bank CSV, ledger CSV).",
      "Rule chain: exact (date/amount/ref) → fuzzy matching.",
      "Exception routing with owner, reason, due date."
    ],
    solution: [
      "Python scripts + scheduler; CSV/Excel exception exports.",
      "Optional DB via SQLAlchemy."
    ],
    results: [
      "Hours saved weekly; improved control posture.",
      "Auditor-ready evidence trail."
    ],
    lessons: [
      "Clean reference data reduces false positives.",
      "Track exception lifecycle, not just creation."
    ],
    exceptions: [
      { m: "W1", items: 42 },
      { m: "W2", items: 28 },
      { m: "W3", items: 21 },
      { m: "W4", items: 16 }
    ],
    costMix: [
      { name: "Manual time", value: 40 },
      { name: "Errors", value: 20 },
      { name: "Rework", value: 15 },
      { name: "Controls", value: 25 }
    ]
  },
  {
    slug: "financial-dashboard",
    title: "Business Data Analysis & Visualisation – Financial Dashboard",
    summary:
      "Interactive dashboard for revenue, costs, margins, and drill-downs with forecasting and prescriptive suggestions.",
    tags: ["Power BI/Plotly","Streamlit","Pandas","SQL"],
    outcomes: [
      "Real-time visibility on budget vs actuals",
      "Surfaced subcontractor overruns",
      "Improved margin tracking"
    ],
    kpis: [
      { label: "Reports automated", value: "Yes" },
      { label: "Drill-downs", value: "Project/Region" },
      { label: "Forecast layer", value: "Enabled" }
    ],
    problem:
      "Static monthly packs hid drivers and slowed corrective actions.",
    approach: [
      "ETL from revenue, cost-of-sales, and overheads.",
      "KPI definitions (gross/net margins), filters by project/region.",
      "Forecast overlay and prescriptive rules."
    ],
    solution: [
      "Interactive app with trend, breakdown, and margin visuals.",
      "Role-based views; shareable links."
    ],
    results: [
      "Faster variance detection and targeted actions.",
      "One source of truth for stakeholders."
    ],
    lessons: [
      "Agree KPI formulae with Finance upfront.",
      "Keep metadata (project codes, COA) consistent."
    ],
    monthlyClose: [
      { m: "Jan", days: 9 }, { m: "Feb", days: 8 }, { m: "Mar", days: 7 },
      { m: "Apr", days: 6 }, { m: "May", days: 6 }, { m: "Jun", days: 5 }
    ],
    costMix: [
      { name: "Revenue volatility impact", value: 30 },
      { name: "Subcontractors", value: 35 },
      { name: "Materials", value: 20 },
      { name: "Overheads", value: 15 }
    ]
  }
]
