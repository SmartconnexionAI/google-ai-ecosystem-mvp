"use client";

import React, { useState } from "react";

const tools = [
  // FOUNDATIONAL MODELS
  { name: "Gemini 2.5 Pro", category: "Foundational Models", description: "Balanced multimodal reasoning", best_for: "Enterprise", tags: ["model"] },
  { name: "Gemini 3 Deep Think", category: "Foundational Models", description: "Advanced reasoning", best_for: "Research", tags: ["model"] },
  { name: "Gemini 3 Flash", category: "Foundational Models", description: "Fast AI model", best_for: "Agents", tags: ["model","agent"] },
  { name: "Gemini 3 Pro", category: "Foundational Models", description: "Deep reasoning", best_for: "Research", tags: ["model"] },
  { name: "Gemma 3", category: "Foundational Models", description: "Open-weight model", best_for: "Developers", tags: ["model"] },
  { name: "Veo 3", category: "Foundational Models", description: "Video generation", best_for: "Video", tags: ["video"] },

  // PLATFORMS
  { name: "Gemini API", category: "Platforms", description: "Access Gemini via API", best_for: "Developers", tags: ["api"] },
  { name: "Vertex AI", category: "Platforms", description: "Enterprise AI platform", best_for: "Enterprise", tags: ["cloud"] },
  { name: "Firebase AI", category: "Platforms", description: "AI in Firebase apps", best_for: "Developers", tags: ["builder"] },
  { name: "Model Garden", category: "Platforms", description: "Model registry", best_for: "Developers", tags: ["models"] },

  // CONSUMER APPS
  { name: "Gemini App", category: "Consumer Apps", description: "AI assistant", best_for: "Everyone", tags: ["chat"] },
  { name: "Google Search AI", category: "Consumer Apps", description: "AI search", best_for: "General use", tags: ["search"] },
  { name: "Google Photos AI", category: "Consumer Apps", description: "AI photo editing", best_for: "Creators", tags: ["image"] },
  { name: "Google Lens", category: "Consumer Apps", description: "Visual search", best_for: "Mobile", tags: ["vision"] },

  // WORKSPACE
  { name: "Docs AI", category: "Workspace AI", description: "Writing assistant", best_for: "Work", tags: ["writing"] },
  { name: "Sheets AI", category: "Workspace AI", description: "Data analysis", best_for: "Work", tags: ["data"] },
  { name: "Slides AI", category: "Workspace AI", description: "Presentations", best_for: "Work", tags: ["presentation"] },
  { name: "Gmail AI", category: "Workspace AI", description: "Email assistant", best_for: "Work", tags: ["email"] },
  { name: "Meet AI", category: "Workspace AI", description: "Meeting summaries", best_for: "Work", tags: ["meeting"] },

  // AGENTS
  { name: "Jules", category: "Agents & Tools", description: "Coding agent", best_for: "Developers", tags: ["agent","coding"] },
  { name: "Google Antigravity", category: "Agents & Tools", description: "Agent IDE", best_for: "Developers", tags: ["agent","coding"] },
  { name: "CC (Gmail Agent)", category: "Agents & Tools", description: "Email agent", best_for: "Productivity", tags: ["agent"] },
  { name: "NotebookLM", category: "Agents & Tools", description: "Research tool", best_for: "Students", tags: ["learning"] },

  // CREATE
  { name: "Gemini 3 Flash Image", category: "Create with AI", description: "Image generation", best_for: "Creators", tags: ["image"] },
  { name: "Imagen", category: "Create with AI", description: "Dev image model", best_for: "Developers", tags: ["image"] },
  { name: "Flow", category: "Create with AI", description: "Video creation", best_for: "Creators", tags: ["video"] },
  { name: "MusicLM", category: "Create with AI", description: "Music generation", best_for: "Audio", tags: ["audio"] },

  // AUDIO
  { name: "Chirp", category: "Speech & Audio", description: "Speech-to-text", best_for: "Developers", tags: ["audio"] },

  // LABS
  { name: "Opal", category: "Google Labs", description: "No-code AI apps", best_for: "Beginners", tags: ["builder"] },
  { name: "Stitch", category: "Google Labs", description: "UI generator", best_for: "Designers", tags: ["design"] },
  { name: "Whisk", category: "Google Labs", description: "Image remix", best_for: "Creators", tags: ["image"] },
  { name: "Learn Your Way", category: "Google Labs", description: "Learning AI", best_for: "Students", tags: ["learning"] }
];

const toolRoles = {
  // FOUNDATIONAL
  "Gemini 2.5 Pro": "Balanced multimodal reasoning",
  "Gemini 3 Deep Think": "Advanced long-horizon reasoning",
  "Gemini 3 Flash": "Fast generation and agent workflows",
  "Gemini 3 Pro": "Deep research and reasoning",
  "Gemma 3": "Local/open-weight model usage",
  "Veo 3": "Generate videos",

  // PLATFORMS
  "Gemini API": "Integrate AI into apps",
  "Vertex AI": "Deploy and manage AI systems",
  "Firebase AI": "Build AI-powered apps",
  "Model Garden": "Access and manage models",

  // CONSUMER
  "Gemini App": "Chat and general AI tasks",
  "Google Search AI": "AI-powered search",
  "Google Photos AI": "Edit and enhance images",
  "Google Lens": "Visual search",

  // WORKSPACE
  "Docs AI": "Write and edit content",
  "Sheets AI": "Analyse data",
  "Slides AI": "Create presentations",
  "Gmail AI": "Draft and summarise emails",
  "Meet AI": "Summarise meetings",

  // AGENTS
  "Jules": "Automate coding tasks",
  "Google Antigravity": "Build apps with agents",
  "CC (Gmail Agent)": "Automate email workflows",
  "NotebookLM": "Research and summarisation",

  // CREATE
  "Gemini 3 Flash Image": "Generate and edit images",
  "Imagen": "Developer image generation",
  "Flow": "Create and edit videos",
  "MusicLM": "Generate music/audio",

  // AUDIO
  "Chirp": "Speech-to-text",

  // LABS
  "Opal": "Build no-code AI apps",
  "Stitch": "Generate UI designs",
  "Whisk": "Image remix",
  "Learn Your Way": "Personalised learning"
};

const goals = [
  { name: "YouTube Automation", tags: ["video","image","writing","audio"] },
  { name: "Content Creation", tags: ["image","video","writing"] },
  { name: "Study / Learning", tags: ["learning","writing"] },
  { name: "Coding / App Building", tags: ["coding","builder","api"] },
  { name: "Business / Productivity", tags: ["email","data","writing","agent"] },
  { name: "Social Media Growth", tags: ["image","video","writing"] },
  { name: "AI Side Hustles", tags: ["image","video","writing","agent"] }
];

const updates = [
  { date: "2025-11-20", title: "Gemini 3 Pro improved" },
  { date: "2025-11-15", title: "Antigravity released" }
];

export default function Page() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [filter, setFilter] = useState("All");
  const [tag, setTag] = useState("All");

  const categories = ["All", ...new Set(tools.map(t => t.category)), "What’s Changed"];
  const tags = ["All", ...new Set(tools.flatMap(t => t.tags))];

  const stackTools = selectedGoal
    ? tools.filter(t => goals.find(g => g.name === selectedGoal).tags.some(tag => t.tags.includes(tag)))
    : [];

  const filteredTools = tools.filter(t =>
    (filter === "All" || t.category === filter) &&
    (tag === "All" || t.tags.includes(tag))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-white p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-cyan-400 !text-cyan-400">Google AI Ecosystem</h1>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(c => (
            <button
              key={c}
              onClick={()=>setFilter(c)}
              className={`px-4 py-2 rounded-xl border transition text-white ${filter === c ? "bg-cyan-500 text-black border-cyan-400" : "border-slate-600 bg-slate-800 hover:bg-slate-700"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* TAG FILTER */}
        {filter !== "What’s Changed" && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(t => (
              <button
                key={t}
                onClick={()=>setTag(t)}
                className={`px-3 py-1 rounded-full text-sm border bg-slate-800 text-white ${tag === t ? "bg-purple-500 text-white" : "border-slate-600 bg-slate-800 hover:bg-slate-700"}`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* WHAT'S CHANGED */}
        {filter === "What’s Changed" ? (
          <div className="space-y-3">
            {updates.map(u => (
              <div key={u.title} className="p-4 rounded-xl bg-slate-900 border border-slate-700">
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-400">{u.title}</span>
                  <span className="text-gray-400">{u.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filteredTools.map(t => (
              <div key={t.name} className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 transition">
                <div className="text-cyan-300 font-semibold">{t.name}</div>
                <div className="text-sm text-gray-300">{t.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* STACK BUILDER MOVED TO BOTTOM */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">AI Stack Builder</h2>
          <div className="flex flex-wrap gap-2">
            {goals.map(g => (
              <button
                key={g.name}
                onClick={()=>setSelectedGoal(g.name)}
                className={`px-4 py-2 rounded-xl border transition text-white ${selectedGoal === g.name ? "bg-purple-500 text-white border-purple-400" : "border-slate-600 bg-slate-800 hover:bg-slate-700"}`}
              >
                {g.name}
              </button>
            ))}
          </div>

          {selectedGoal && (
            <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-700">
              {stackTools.map(t => (
                <div key={t.name} className="bg-slate-800 p-3 mb-2 rounded">
                  <div className="text-cyan-300 font-semibold">{t.name}</div>
                  <div className="text-xs text-purple-300">{toolRoles[t.name] || t.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
