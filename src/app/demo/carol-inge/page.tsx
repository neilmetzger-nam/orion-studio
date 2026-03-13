"use client";
import { useState } from "react";

const sprints = [
  {
    phase: "Phase 1 · Foundation",
    color: "violet",
    period: "Q1 2026",
    status: "in-progress",
    milestones: [
      { title: "Digital Identity Core", tasks: ["Blockchain identity vault", "Elder profile system", "Family permissions layer"], done: 2 },
      { title: "AI Companion MVP", tasks: ["Memory capture interface", "Voice interaction module", "Privacy controls"], done: 1 },
      { title: "Legal & Compliance", tasks: ["HIPAA framework", "Estate integration API", "Attorney partnership (Andy Tucker)"], done: 1 },
    ]
  },
  {
    phase: "Phase 2 · Platform",
    color: "blue",
    period: "Q2-Q3 2026",
    status: "queued",
    milestones: [
      { title: "Healthcare Integration", tasks: ["Provider portal", "Care team collaboration", "Medical record linking"], done: 0 },
      { title: "Family Network", tasks: ["Multi-generational access", "Notification system", "Legacy sharing tools"], done: 0 },
      { title: "Research Partnership", tasks: ["Ethics board setup (Dr. Inge)", "IRB protocol", "Data anonymization"], done: 0 },
    ]
  },
  {
    phase: "Phase 3 · Scale",
    color: "purple",
    period: "Q4 2026",
    status: "queued",
    milestones: [
      { title: "Enterprise & Licensing", tasks: ["Hospital system deals", "IP licensing framework (Armin)", "White-label platform"], done: 0 },
      { title: "Consumer Launch", tasks: ["App Store launch", "Marketing campaign", "Influencer partnerships"], done: 0 },
    ]
  }
];

const agents = [
  { name: "Research Agent", icon: "🔬", status: "active", task: "Scanning eldercare AI landscape — 3 competitors found" },
  { name: "Legal Agent", icon: "⚖️", status: "active", task: "Monitoring HIPAA regulatory updates" },
  { name: "Outreach Agent", icon: "📣", status: "idle", task: "Ready to draft investor deck section" },
  { name: "Dave (Chief of Staff)", icon: "🤖", status: "active", task: "Running nightly research brief" },
];

export default function CarolIngeDemo() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">⬡ Orion Studio</span>
          <span className="text-zinc-500 text-sm">Carol Inge · Digital Legacies</span>
          <a href="mailto:dave@orionstudio.ai?subject=I want my own workspace"
            className="text-sm bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-full font-medium">
            Get My Workspace
          </a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* HEADER */}
        <div className="mb-12">
          <div className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            Your Command Center · Preview
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Digital Legacies
          </h1>
          <p className="text-zinc-400 text-lg">Identity & Agency Platform for Older Adults · Carol Inge</p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Active Agents", value: "3", color: "text-violet-400" },
            { label: "Open Tasks", value: "14", color: "text-orange-400" },
            { label: "Milestones", value: "8", color: "text-blue-400" },
            { label: "Phase", value: "1 of 3", color: "text-green-400" },
          ].map(s => (
            <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-zinc-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* ROADMAP */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">📍 Roadmap</h2>
            <div className="flex gap-2 mb-4">
              {sprints.map((s, i) => (
                <button key={i} onClick={() => setActivePhase(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activePhase === i ? "bg-violet-600 text-white" : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600"
                  }`}>
                  {s.period}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {sprints[activePhase].milestones.map((m, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{m.title}</h3>
                    <span className="text-xs text-zinc-500">{m.done}/{m.tasks.length} done</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-3">
                    <div className="bg-violet-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${(m.done / m.tasks.length) * 100}%` }} />
                  </div>
                  <div className="space-y-1">
                    {m.tasks.map((t, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <span className={j < m.done ? "text-violet-400" : "text-zinc-600"}>
                          {j < m.done ? "✓" : "○"}
                        </span>
                        <span className={j < m.done ? "text-zinc-300" : "text-zinc-500"}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AGENT FEED */}
          <div>
            <h2 className="text-xl font-bold mb-4">🤖 Agent Activity</h2>
            <div className="space-y-3 mb-6">
              {agents.map((a, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{a.icon}</span>
                    <span className="font-medium text-sm">{a.name}</span>
                    <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                      a.status === "active" ? "bg-green-500/20 text-green-400" : "bg-zinc-800 text-zinc-500"
                    }`}>{a.status}</span>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{a.task}</p>
                </div>
              ))}
            </div>

            {/* NIGHTLY RESEARCH */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h3 className="text-sm font-bold mb-2">🔬 Last Night's Research</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-2">
                3 competitors identified in digital legacy space. None address blockchain-based identity for aging adults. Patent opportunity flagged.
              </p>
              <p className="text-zinc-600 text-xs">Generated 2:00 AM · Mar 13</p>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">👥 Your Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Carol Inge", role: "Founder & CEO", icon: "👩‍💼" },
              { name: "Andy Tucker", role: "IP & Licensing Attorney", icon: "⚖️" },
              { name: "Dr. Inge", role: "Research & Ethics", icon: "🔬" },
              { name: "Armin", role: "Technology Strategy", icon: "💻" },
            ].map(p => (
              <div key={p.name} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center text-lg">{p.icon}</div>
                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-zinc-500">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <h2 className="text-3xl font-bold mb-3">This is your command center.</h2>
          <p className="text-zinc-400 mb-2 max-w-lg mx-auto">
            Agents running research while you sleep. Roadmap always current. Team always aligned.
          </p>
          <p className="text-zinc-500 mb-8 max-w-lg mx-auto text-sm">
            This preview was built from one conversation. The real thing connects to your actual data, your agents, your calendar.
          </p>
          <a href="mailto:dave@orionstudio.ai?subject=I want my Orion Studio workspace"
            className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-10 py-4 rounded-full font-semibold text-lg">
            Get My Workspace →
          </a>
          <p className="text-zinc-600 text-sm mt-4">dave@orionstudio.ai · Design partner pricing available</p>
        </div>

      </div>
    </main>
  );
}
