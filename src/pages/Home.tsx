// src/pages/Home.tsx
import React from "react"
import { Link } from "react-router-dom"
import { Briefcase } from "lucide-react"
import { PROJECTS } from "../data/projects"

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100 bg-gradient-to-b from-[#0b1020] to-[#0d1b2a]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Shakirat · Finance Portfolio</h1>
        <p className="text-slate-300 mt-2">Reporting · Treasury · Forecasting · Analytics</p>

        <h2 className="text-2xl font-semibold mt-10 flex items-center gap-2">
          <Briefcase className="h-5 w-5" /> Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {PROJECTS.map((p) => (
            <div key={p.slug} className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="font-semibold text-white/90">{p.title}</div>
              <div className="text-sm text-slate-300 mt-1">{p.summary}</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={`/case/${p.slug}`}
                className="inline-block mt-4 rounded-2xl bg-[#2563eb] px-3 py-1.5 text-sm text-white"
              >
                View Case Study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
