// src/pages/CaseStudy.tsx
import React from "react"
import { useParams, Link } from "react-router-dom"
import { PROJECTS } from "../data/projects"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart as RBarChart, Bar, PieChart as RPieChart, Pie, Cell, Legend
} from "recharts"

const PIE_COLORS = ["#60a5fa","#34d399","#fbbf24","#f472b6"]

export default function CaseStudy() {
  const { slug } = useParams()
  const p = PROJECTS.find(pr => pr.slug === slug)

  if (!p) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0b1020] to-[#0d1b2a] text-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <h1 className="text-3xl font-bold mt-6">Project not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1020] to-[#0d1b2a] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>

        <header className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold">{p.title}</h1>
          <p className="text-slate-300 mt-2">{p.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="inline-block text-xs rounded-full px-3 py-1 bg-white/10 border border-white/20">{t}</span>
            ))}
          </div>
        </header>

        {p.kpis && (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {p.kpis.map(k => (
              <div key={k.label} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <div className="text-xs text-slate-300">{k.label}</div>
                <div className="text-2xl font-semibold mt-1">{k.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Charts (render only if data present) */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          {p.monthlyClose && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Monthly Close Time</div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={p.monthlyClose}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="m" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background:"#0f172a", border:"1px solid #28324a", color:"#e2e8f0" }} />
                    <Line type="monotone" dataKey="days" stroke="#60a5fa" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          {p.exceptions && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Exceptions Cleared</div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RBarChart data={p.exceptions}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="m" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background:"#0f172a", border:"1px solid #28324a", color:"#e2e8f0" }} />
                    <Bar dataKey="items" fill="#34d399" radius={[6,6,0,0]} />
                  </RBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </section>

        {p.costMix && (
          <section className="mt-6">
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Cost Breakdown</div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RPieChart>
                    <Pie data={p.costMix} dataKey="value" nameKey="name" outerRadius={80} innerRadius={45}>
                      {p.costMix.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                    </Pie>
                    <Legend />
                    <Tooltip contentStyle={{ background:"#0f172a", border:"1px solid #28324a", color:"#e2e8f0" }} />
                  </RPieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}

        {p.forecastSample && (
          <section className="mt-6">
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Forecast vs Actual (Sample)</div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={p.forecastSample}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="date" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background:"#0f172a", border:"1px solid #28324a", color:"#e2e8f0" }} />
                    <Line type="monotone" dataKey="actual" stroke="#60a5fa" strokeWidth={3} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="forecast" stroke="#34d399" strokeWidth={3} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          {p.problem && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Business Value (Start – Stop – Improve)</div>
              <p className="text-slate-300">{p.problem}</p>
            </div>
          )}
          {p.approach && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Approach</div>
              <ul className="space-y-2 text-slate-300 text-sm">
                {p.approach.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {p.solution && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Solution</div>
              <ul className="list-disc list-inside text-slate-300 text-sm">
                {p.solution.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}
          {p.results && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold mb-2">Data Behaviour & Insights</div>
              <ul className="list-disc list-inside text-slate-300 text-sm">
                {p.results.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}
          {p.lessons && p.lessons.length > 0 && (
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10 md:col-span-2">
              <div className="font-semibold mb-2">Lessons & Next Steps</div>
              <ul className="list-disc list-inside text-slate-300 text-sm">
                {p.lessons.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </div>
          )}
        </section>

        <section className="mt-10 flex gap-3">
          {p.demo && <a className="rounded-2xl bg-[#2563eb] text-white px-4 py-2" href={p.demo} target="_blank">Live</a>}
          {p.repo && <a className="rounded-2xl border border-white/20 text-white px-4 py-2" href={p.repo} target="_blank">Repo</a>}
        </section>
      </div>
    </div>
  )
}
