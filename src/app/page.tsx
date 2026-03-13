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
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600 to-purple-900 blur-[120px] opacity-20 pointer-events-none" style={{transform:"translate(-50%,-50%)"}} />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            Private Beta — 5 Spots Remaining
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            AI should be running<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              your business by now.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            Most founders know AI could help. Few know where to start — or have tried and gotten nowhere.
          </p>
          <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
            Orion Studio sets it up for you. We turn your chaos into a working AI team in under an hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#intake" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-8 py-4 rounded-full font-semibold text-lg">
              Start with The Intake
            </a>
            <a href="#how" className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-full font-semibold text-lg text-zinc-300">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* THREE TYPES */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Sound familiar?</h2>
          <p className="text-zinc-400 text-center text-lg mb-16 max-w-xl mx-auto">We built this for exactly these three founders.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji:"🤷", title:"I know I should be using AI, but I do not know where to start.", desc:"You have heard the hype. You believe it. You just do not have the time or technical background to figure it out yourself. We do it for you.", cta:"We do the setup." },
              { emoji:"🚀", title:"I want to use agents but have no idea how to set them up.", desc:"You have seen what is possible. You are ready to move. You just need someone to hand you a working system instead of another tutorial.", cta:"We hand you the keys." },
              { emoji:"😤", title:"I tried AI tools but they did not really work for my business.", desc:"You are not wrong — most AI tools fail founders because they are generic. The difference is agents built around your specific workflow, goals, and products.", cta:"We fix what failed." },
              { emoji:"🏢", title:"I already run a successful business and I do not want AI to freak out my staff or break what is working.", desc:"You do not need to rebuild anything. AI layers on top of what you have — handling the repetitive, invisible work so your team focuses on what humans do best. Your staff will barely notice the transition.", cta:"We integrate, we do not disrupt." },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-semibold mb-3 text-zinc-200 italic leading-snug">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">{item.desc}</p>
                <p className="text-violet-400 font-semibold text-sm">{item.cta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">From chaos to clarity in one session.</h2>
          <p className="text-zinc-400 text-center text-lg mb-16 max-w-xl mx-auto">Here is what you get after The Intake.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon:"🗺", title:"Product Roadmap", desc:"Your ideas organized into milestones, priorities, and a clear path forward." },
              { icon:"📋", title:"Sprint Plan", desc:"Broken into tasks with owners — what gets done this week, next week, this month." },
              { icon:"📅", title:"Shared Calendar", desc:"Your schedule and your agents side by side. Always know what is running and when." },
              { icon:"🤖", title:"Your AI Team", desc:"Agents configured for your specific business — research, outreach, ops, whatever you need." },
              { icon:"🔬", title:"Daily Intelligence", desc:"Every morning you wake up to market intel, lead updates, and a briefing from your agents." },
              { icon:"📣", title:"You Stay in Control", desc:"Your agents call you when something needs a human. Nothing important happens without you." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-violet-500/30 transition">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE INTAKE */}
      <section id="intake" className="py-24 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            Step 1
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Intake.</h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-4 max-w-2xl mx-auto">
            Dump everything. Emails, Notion pages, voice memos, napkin photos, half-finished docs — does not matter.
          </p>
          <p className="text-xl text-white leading-relaxed mb-8 max-w-2xl mx-auto">
            Dave reads it, finds the through-line, and hands back a product roadmap, sprint plan, and your first three moves. <strong>In under an hour.</strong>
          </p>
          <blockquote className="border-l-4 border-violet-500 pl-6 text-left max-w-xl mx-auto mb-10 italic text-zinc-300 text-lg">
            "We did not build a tool. We built the thing we wished existed."
          </blockquote>
          <a href="mailto:dave@orionstudio.ai?subject=Intake Request"
            className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-10 py-4 rounded-full font-semibold text-lg">
            Book Your Intake Session →
          </a>
          <p className="text-zinc-500 text-sm mt-4">dave@orionstudio.ai · We respond within 24 hours</p>
        </div>
      </section>

      {/* STATUS */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-violet-400 font-semibold uppercase tracking-widest text-sm mb-12">Currently in private beta</p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { stat:"5", label:"Products running on Orion Studio today — including ours" },
              { stat:"<1hr", label:"From chaos to working roadmap in The Intake" },
              { stat:"5 spots", label:"Design partner openings — lifetime founder pricing" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent mb-2">{item.stat}</div>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-600 text-sm italic">We run our own company on Orion Studio. You are not buying a demo — you are getting what we use every day.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-[#0a0a0a] border-t border-zinc-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to find out what AI can actually do for your business?</h2>
          <p className="text-zinc-400 text-lg mb-10">5 design partner spots. Lifetime founder pricing. Starts with one conversation.</p>
          {submitted ? (
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-8">
              <p className="text-violet-300 font-semibold text-lg">You are on the list.</p>
              <p className="text-zinc-400 mt-2">Dave will be in touch at dave@orionstudio.ai within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col sm:flex-row gap-3">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition" />
              <button type="submit" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-8 py-4 rounded-full font-semibold whitespace-nowrap">
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
