"use client";
import { useState } from "react";

const media = [
  {
    type: "image",
    label: "Original Photo",
    sublabel: "Before",
    tag: null,
    url: "https://v3b.fal.media/files/b/0a920272/uhuKbo8ZzTqdMNgrWPJG3_2ace7ab633c3401184bbbf5ccffa0adc.png",
    original: true
  },
  {
    type: "image",
    label: "Product Hero Shot",
    sublabel: "Menu · Website",
    tag: "🎯 Hero",
    url: "https://v3b.fal.media/files/b/0a9202b4/Dxa-JxuaNTzHd3vZYFvhr_UUhbj1rZ.png"
  },
  {
    type: "image",
    label: "Lifestyle Shot",
    sublabel: "Instagram · Social Media",
    tag: "👤 Lifestyle",
    url: "https://v3b.fal.media/files/b/0a9202b4/NjlsIWVGH2tZHLl7r2XuF_8j4l12jQ.png"
  },
  {
    type: "image",
    label: "Action Shot",
    sublabel: "Ads · Editorial",
    tag: "☀️ Outdoor",
    url: "https://v3b.fal.media/files/b/0a9202b4/lR4dtyM6aLB1o37gWJM8v_25s2DPoy.png"
  },
  {
    type: "image",
    label: "Branded Hero Shot",
    sublabel: "Your name on the mug",
    tag: "✏️ Branded",
    url: "https://v3b.fal.media/files/b/0a920328/o-efDSPQYUIoZD87Flo7H_lsrozM8Y.png"
  },
  {
    type: "image",
    label: "Outdoor Patio Shot",
    sublabel: "Their actual patio · Lifestyle",
    tag: "☀️ Location",
    url: "https://v3b.fal.media/files/b/0a920345/9M6eL_0r4OMbAv_vZAhu6_PbGgGJKT.png"
  },
  {
    type: "image",
    label: "Cafe Counter Shot",
    sublabel: "Their actual interior · Menu",
    tag: "☕ Interior",
    url: "https://v3b.fal.media/files/b/0a92035d/ff9bbx2nFtjvQ7T-AT6aQ_9LD86Nhl.png"
  },
  {
    type: "video",
    label: "Video Commercial",
    sublabel: "Website · Reels · TikTok",
    tag: "🎬 Video",
    url: "https://v3b.fal.media/files/b/0a9202e4/FR-GaDC28VbSOS6LSzgK1_output.mp4"
  }
];

export default function BackstreetBrewsDemo() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">⬡ Orion Studio</span>
          <span className="text-zinc-500 text-sm">Client Preview · Back Street Brews</span>
          <a href="mailto:dave@orionstudio.ai?subject=I want this for my business"
            className="text-sm bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-full font-medium">
            I want this
          </a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <div className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            Your Content Preview
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Back Street Brews<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Commercial Content Suite
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            One photo. Four commercial assets. Generated in under 2 minutes.
          </p>
        </div>

        {/* MAIN VIEWER */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* LEFT — Thumbnail Strip */}
          <div className="flex flex-col gap-3">
            {media.map((item, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition text-left ${
                  selected === i
                    ? "border-violet-500 bg-violet-500/10"
                    : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
                }`}>
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                  {item.type === "video"
                    ? <video src={item.url} className="w-full h-full object-cover" muted />
                    : <img src={item.url} alt={item.label} className="w-full h-full object-cover" />
                  }
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    {item.tag && <span className="text-xs text-violet-400 font-medium">{item.tag}</span>}
                    {item.original && <span className="text-xs text-zinc-500 font-medium">📷 Original</span>}
                  </div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.sublabel}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Main Display */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center bg-zinc-950">
                {media[selected].type === "video"
                  ? <video src={media[selected].url} controls autoPlay loop
                      className="w-full h-full object-contain" />
                  : <img src={media[selected].url} alt={media[selected].label}
                      className="w-full h-full object-contain" />
                }
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{media[selected].label}</p>
                  <p className="text-zinc-500 text-sm">{media[selected].sublabel}</p>
                </div>
                <a href={media[selected].url} download
                  className="text-sm border border-zinc-700 hover:border-violet-500 hover:text-violet-400 transition px-4 py-2 rounded-full">
                  Download ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-16 p-10 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <h2 className="text-3xl font-bold mb-3">Want this for your whole menu?</h2>
          <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
            Every item. Hero shot, lifestyle, action shot, and video commercial.
            All from photos you already have on your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:dave@orionstudio.ai?subject=PlateAI for Back Street Brews"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition px-8 py-4 rounded-full font-semibold text-lg">
              Get Started →
            </a>
            <a href="https://orionstudio.ai"
              className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-full font-semibold text-lg text-zinc-300">
              Learn More
            </a>
          </div>
          <p className="text-zinc-600 text-sm mt-4">dave@orionstudio.ai · We respond within 24 hours</p>
        </div>

      </div>
    </main>
  );
}
