"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">⬡ Orion Studio</span>
          <a href="mailto:dave@orionstudio.ai?subject=Intake Request"
            className="text-sm bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-full font-medium">
            Request Access
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="orb absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600 to-purple-900 blur-[120px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            Private Beta — 5 Spots Remaining
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            The OS for<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              AI-Powered Founders
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your agents are working.<br />Now give them a command center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#intake"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-8 py-4 rounded-full font-semibold text-lg">
              Request Early Access
            </a>
            <a href="#features"
              className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-full font-semibold text-lg text-zinc-300">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            You hired AI.<br />Now you are flying blind.
          </h2>
          <p className="text-zinc-400 text-center text-lg mb-16 max-w-2xl mx-auto">
            Every founder running agents hits the same wall. The tools exist. The infrastructure does not.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🗂", title: "Chat windows everywhere", desc: "No single view of what your agents did today. Was that task done? Did the email go out? You have no idea." },
              { icon: "⏰", title: "Manual updates, always stale", desc: "Your project tracker reflects last week. Updating it manually defeats the entire point of having agents." },
              { icon: "📵", title: "No alerts, no visibility", desc: "You find out what broke when a customer tells you. Your agents have no way to escalate to a human." },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Everything your AI team needs to run.
          </h2>
          <p className="text-zinc-400 text-center text-lg mb-16 max-w-xl mx-auto">
            Built from the inside out — we run our own studio on this every day.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🗂", title: "Mission Control", desc: "Live project dashboard across all your products. Auto-updates from git commits. Zero manual input." },
              { icon: "🤖", title: "Agent Activity Feed", desc: "See exactly what your agents did today. Decisions made, tasks completed — surfaced in plain English." },
              { icon: "📋", title: "Shared Calendar", desc: "Your schedule and your agents side by side. Always know what is running and when." },
              { icon: "🔬", title: "Nightly Research", desc: "Wake up to competitive intel your agent ran at 2 AM. Relevant to your markets, every morning." },
              { icon: "📣", title: "Phone Alerts", desc: "Your agent calls your phone when something needs a human. Stay in the loop without watching a chat window." },
              { icon: "🎯", title: "Sprint Tracker", desc: "Milestones and tasks that update themselves. Syncs from every code commit. Always current." },
            ].map((item) => (
              <div key={item.title} className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-300 transition">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE INTAKE */}
      <section id="intake" className="py-24 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            The Signature Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start with The Intake.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Dump your chaos. Emails, Notion pages, voice memos, napkin photos — does not matter.
            Dave reads it, finds the through-line, and hands back a product brief, sprint plan,
            and your next 3 moves. <strong className="text-white">In under an hour.</strong>
          </p>
          <blockquote className="border-l-4 border-violet-500 pl-6 text-left max-w-xl mx-auto mb-10 italic text-zinc-300 text-lg">
            "We did not build a tool. We built the thing we wished existed."
          </blockquote>
          <a href="mailto:dave@orionstudio.ai?subject=Intake Request"
            className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-10 py-4 rounded-full font-semibold text-lg">
            Book Your Intake Session →
          </a>
          <p className="text-zinc-500 text-sm mt-4">dave@orionstudio.ai · Response within 24 hours</p>
        </div>
      </section>

      {/* STATUS */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-violet-400 font-semibold uppercase tracking-widest text-sm mb-12">Currently in private beta</p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { stat: "5", label: "Products running on Orion Studio today" },
              { stat: "Day 1", label: "Built from inside the problem — we are the customer" },
              { stat: "5 spots", label: "Design partner openings remaining" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-[#0a0a0a] border-t border-zinc-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to give your agents a command center?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">Join the waitlist. Design partners get lifetime founder pricing.</p>
          {submitted ? (
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-8">
              <p className="text-violet-300 font-semibold text-lg">You are on the list.</p>
              <p className="text-zinc-400 mt-2">Dave will be in touch at dave@orionstudio.ai within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3">
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition"
              />
              <button type="submit"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-8 py-4 rounded-full font-semibold whitespace-nowrap">
                Request Access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <span>⬡ Orion Studio</span>
          <span>© 2026 Orion Studio. All rights reserved.</span>
          <a href="mailto:dave@orionstudio.ai" className="hover:text-zinc-400 transition">dave@orionstudio.ai</a>
        </div>
      </footer>

    </main>
  );
}
