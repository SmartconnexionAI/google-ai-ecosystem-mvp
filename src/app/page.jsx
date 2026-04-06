"use client";

import React, { useMemo, useState } from "react";

/* ===== DATA (UNCHANGED — COMPLETE) ===== */
const tools = [
  { name: "Gemini 2.5 Pro", category: "Foundational Models", description: "Balanced multimodal reasoning", tags: ["model"] },
  { name: "Gemini 3 Deep Think", category: "Foundational Models", description: "Advanced reasoning", tags: ["model"] },
  { name: "Gemini 3 Flash", category: "Foundational Models", description: "Fast AI model", tags: ["model","agent"] },
  { name: "Gemini 3 Pro", category: "Foundational Models", description: "Deep reasoning", tags: ["model"] },
  { name: "Gemma 3", category: "Foundational Models", description: "Open-weight model", tags: ["model"] },
  { name: "Veo 3", category: "Foundational Models", description: "Video generation", tags: ["video"] },

  { name: "Vertex AI", category: "Platforms", description: "Enterprise AI platform", tags: ["cloud","api"] },
  { name: "Google AI Studio", category: "Platforms", description: "Build with Gemini", tags: ["builder","api"] },
  { name: "Model Garden", category: "Platforms", description: "Model library", tags: ["models"] },
  { name: "Model Registry", category: "Platforms", description: "Manage models", tags: ["models"] },
  { name: "Gemini API", category: "Platforms", description: "Access Gemini via API", tags: ["api"] },
  { name: "Firebase AI", category: "Platforms", description: "AI in Firebase apps", tags: ["cloud","api"] },

  { name: "Gemini App", category: "Consumer Apps", description: "AI assistant", tags: ["chat"] },
  { name: "Google Search AI", category: "Consumer Apps", description: "AI search", tags: ["search"] },
  { name: "Google Photos AI", category: "Consumer Apps", description: "AI photo features", tags: ["image"] },
  { name: "Google Lens", category: "Consumer Apps", description: "Visual search", tags: ["vision","search"] },

  { name: "Docs AI", category: "Workspace AI", description: "Writing assistant", tags: ["writing"] },
  { name: "Sheets AI", category: "Workspace AI", description: "Data assistant", tags: ["data"] },
  { name: "Slides AI", category: "Workspace AI", description: "Presentation assistant", tags: ["presentation"] },
  { name: "Gmail AI", category: "Workspace AI", description: "Email assistant", tags: ["email"] },
  { name: "Meet AI", category: "Workspace AI", description: "Meeting assistant", tags: ["meeting"] },
  { name: "CC (Gmail Agent)", category: "Workspace AI", description: "Proactive Gmail agent", tags: ["email","agent"] },

  { name: "Jules", category: "Agents & Tools", description: "Coding agent", tags: ["coding","agent"] },
  { name: "Antigravity", category: "Agents & Tools", description: "Agent IDE", tags: ["agent","builder"] },
  { name: "NotebookLM", category: "Agents & Tools", description: "Research tool", tags: ["learning"] },

  { name: "Gemini 3 Flash Image (Nano Banana 2)", category: "Create with AI", description: "Image generation", tags: ["image"] },
  { name: "Flow", category: "Create with AI", description: "Video creation", tags: ["video"] },
  { name: "Imagen", category: "Create with AI", description: "Image generation model", tags: ["image"] },
  { name: "MusicLM", category: "Create with AI", description: "Music generation", tags: ["audio"] },

  { name: "Chirp", category: "Speech & Audio", description: "Speech-to-text", tags: ["audio"] },
  { name: "Speech AI", category: "Speech & Audio", description: "Voice generation", tags: ["audio"] },

  { name: "Whisk", category: "Google Labs", description: "Image remix", tags: ["image"] },
  { name: "Stitch", category: "Google Labs", description: "UI design", tags: ["design"] },
  { name: "Opal", category: "Google Labs", description: "App builder", tags: ["builder"] },
  { name: "Learn Your Way", category: "Google Labs", description: "Learning", tags: ["learning"] }
];

const whatsChanged = [
  "Gemini 3 Pro expanded long-context reasoning",
  "Gemini 3 Flash optimized for low latency",
  "Antigravity released",
  "Nano Banana → Gemini 3 Flash Image",
];

const goals = [
  { name: "YouTube Automation", tags: ["video","image","writing"] },
  { name: "Content Creation", tags: ["image","video","writing"] },
  { name: "Study / Learning", tags: ["learning","writing"] },
  { name: "Coding / App Building", tags: ["coding","builder"] },
  { name: "Business / Productivity", tags: ["email","data","writing","agent"] },
  { name: "Social Media Growth", tags: ["image","video","writing"] },
  { name: "AI Side Hustles", tags: ["image","video","writing","agent"] }
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [tag, setTag] = useState("All");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = ["All","Foundational Models","Platforms","Consumer Apps","Workspace AI","Agents & Tools","Create with AI","Speech & Audio","Google Labs","What's Changed"];

  const tags = ["All","model","agent","video","api","cloud","builder","models","chat","search","image","vision","writing","data","presentation","email","meeting","coding","learning","audio","design"];

  const filteredTools = useMemo(() => {
    if (filter === "What's Changed") return [];
    return tools.filter(t =>
      (filter==="All"||t.category===filter) &&
      (tag==="All"||t.tags.includes(tag)) &&
      (t.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [filter, tag, search]);

  const stackTools = useMemo(() => {
    if (!selectedGoal) return [];
    const goal = goals.find(g=>g.name===selectedGoal);
    return tools.filter(t => goal.tags.some(tag=>t.tags.includes(tag)));
  }, [selectedGoal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-white p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-cyan-400">Google AI Ecosystem</h1>

        <input value={search} onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search tools..."
          className="w-full mb-6 p-3 rounded-xl bg-slate-800 border border-slate-600"/>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(c=>(
            <button key={c} onClick={()=>setFilter(c)}
              className={`px-4 py-2 rounded-xl ${filter===c?"bg-cyan-500 text-black":"bg-slate-800"}`}>
              {c}
            </button>
          ))}
        </div>

        {filter!=="What's Changed" && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(t=>(
              <button key={t} onClick={()=>setTag(t)}
                className={`px-3 py-1 rounded-full ${tag===t?"bg-purple-500":"bg-slate-800"}`}>
                {t}
              </button>
            ))}
          </div>
        )}

        {filter!=="What's Changed" && (
          <div className="grid md:grid-cols-2 gap-4">
            {filteredTools.map(t=>(
              <div key={t.name} className="p-4 bg-slate-900 rounded-xl">
                <div className="text-cyan-300">{t.name}</div>
                <div className="text-sm text-gray-300">{t.description}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-3xl text-cyan-400 mb-6">AI Stack Builder</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {goals.map(g=>(
              <button key={g.name}
                onClick={()=>{setSelectedGoal(g.name);setSubmitted(false);}}
                className="px-4 py-2 bg-slate-800 rounded-xl">
                {g.name}
              </button>
            ))}
          </div>

          {selectedGoal && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                {stackTools.map(t=>(
                  <div key={t.name} className="p-4 bg-slate-900 rounded-xl">
                    {t.name}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 rounded-xl bg-slate-900 border border-slate-700">
                <div className="text-lg font-semibold text-cyan-400 mb-2">
                  🚀 Get Your AI Stack
                </div>

                <div className="text-sm text-gray-300 mb-4">
                  Enter your email to save this stack and receive:
                  • Your selected AI tools
                  • Ready-to-use prompts
                  • Bonus tools and updates
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 p-3 bg-slate-800 border border-slate-600 rounded-xl"
                  />

                  <button
                    onClick={async()=>{
                      if(!email) return;

                      await fetch("/api/subscribe",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify({
                          email,
                          goal: selectedGoal,
                          stack: stackTools.map(t => t.name).join(", ")
                        })
                      });

                      setSubmitted(true);
                    }}
                    className="px-6 py-3 bg-cyan-500 text-black rounded-xl"
                  >
                    Get My Stack
                  </button>
                </div>

                {submitted && (
                  <div className="text-green-400 mt-3">
                    ✅ Your AI stack has been saved.
                  </div>
                )}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}