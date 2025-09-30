// src/pages/CaseStudy.tsx
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const proj = PROJECTS.find((p) => p.slug === slug);

  if (!proj) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-black">
        <Link to="/" className="underline">← Back</Link>
        <h1 className="text-2xl font-bold mt-6">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-100 bg-gradient-to-b from-[#0b1020] to-[#0d1b2a]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Link to="/" className="text-slate-300 underline">← Back</Link>
        <h1 className="text-4xl font-bold mt-6">{proj.title}</h1>
        <p className="text-slate-300 mt-3">{proj.summary}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {proj.tags.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
