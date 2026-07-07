import React, { useState } from 'react';

// 1. Fully Structured English Profile Data
const profileData = {
  name: "Maram",
  role: "Full-Stack Web Developer",
  subRole: "Building Secure Backend Architectures & Responsive Frontends",
  about: "A results-driven Full-Stack developer focused on creating clean, maintainable web architectures. Experienced in building robust .NET backends and highly interactive React applications.",
  githubUrl: "https://github.com/Maram-44",
  linkedinUrl: "https://www.linkedin.com/in/maram-saleh-a90569334/",

  skills: {
    frontend: ["React.js", "Blazor WASM", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3"],
    backend: ["ASP.NET Core", "C#", "SignalR (Real-time)", "RESTful APIs", "JWT Authentication"],
    databases: ["SQL Server", "SQLite", "EF Core (ORM)", "Repository Pattern"],
    tools: ["Git & GitHub", "Stripe API Payments", "Clean Architecture", "Postman"]
  },

  featuredProjects: [
    {
      id: "feat-1",
      title: "Pulse Medical",
      badge: "Full-Stack Application",
      desc: "An advanced healthcare platform with automated scheduling. Built with secure route guards, real-time doctor-patient sync using SignalR, and fully integrated Stripe payment infrastructure.",
      tech: ["ASP.NET Core", "React", "Stripe", "SQL Server", "EF Core"],
      isSeparatedRepos: true,
      githubBackend: "https://github.com/Maram-44/HospitalManagement.git",
      githubFrontend: "https://github.com/Maram-44/Pulse.git",
      liveUrl: "#"
    }
  ],

  miniProjects: [
    {
      id: "mini-1",
      title: "Calculator",
      learned: "🧮 A custom-built Windows Forms Calculator focusing on advanced reusable Custom Controls and powered by a strict Prefix/Postfix (Polish Notation) mathematical evaluation engine.",
      tech: ["C#", "winForm"],
      githubRepo: "https://github.com/Maram-44/Calculator.git"
    },
    {
      id: "mini-2",
      title: "Event",
      learned: "A university project for a responsive Event Management & Ticket Booking web application built using ASP.NET Core MVC, Razor Views, and Entity Framework Core",
      tech: ["SignalR", "React"],
      githubRepo: "https://github.com/Maram-44/Event.git"
    }
  ]
};

export default function App() {
  const [activeFeatured, setActiveFeatured] = useState(null);
  const [activeMini, setActiveMini] = useState(null);

  const handleFeaturedClick = (id) => {
    setActiveFeatured(activeFeatured === id ? null : id);
  };

  const handleMiniClick = (id) => {
    setActiveMini(activeMini === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans antialiased selection:bg-indigo-500 selection:text-white px-4 py-12 md:py-24 relative overflow-hidden">

      {/* خلفية تقنية هندسية ناعمة جداً باللون الفاتح */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* هالات ضوئية ناعمة بألوان الكوبالت والأرجواني الفاتح */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-24 relative z-10">

        {/* ================= SECTION 1: HEADER & HERO ================= */}
        <header className="space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-indigo-700 uppercase font-bold">Systems & Architectures</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
              Hi, I am <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">{profileData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{profileData.role}</p>
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            {profileData.about}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-mono rounded-xl border border-slate-200 shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2">
              <span>github_repositories</span> <span className="text-indigo-500">↗</span>
            </a>
            <a href={profileData.linkedinUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-mono rounded-xl border border-slate-200 shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2">
              <span>linkedin_profile</span> <span className="text-indigo-500">↗</span>
            </a>
          </div>
        </header>

        {/* ================= SECTION 2: CATEGORIZED SKILLS ================= */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-mono tracking-widest text-indigo-600 uppercase font-bold bg-indigo-50/80 px-2 py-1 rounded">01 / Skill Stack</h2>
            <div className="h-[2px] bg-gradient-to-r from-indigo-100 to-transparent flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="text-xs font-mono text-indigo-500">&lt;</span> Frontend <span className="text-xs font-mono text-indigo-500">/&gt;</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.frontend.map(skill => (
                    <span key={skill} className="text-[11px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-100 font-mono font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="text-xs font-mono text-blue-500">#</span> Backend Core
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.backend.map(skill => (
                    <span key={skill} className="text-[11px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-100 font-mono font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Card */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="text-xs font-mono text-violet-500">⚙️</span> Ecosystem
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.tools.map(skill => (
                    <span key={skill} className="text-[11px] bg-slate-50 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-100 font-mono font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: FEATURED PROJECTS ================= */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-mono tracking-widest text-indigo-600 uppercase font-bold bg-indigo-50/80 px-2 py-1 rounded">02 / Core Production</h2>
            <div className="h-[2px] bg-gradient-to-r from-indigo-100 to-transparent flex-1" />
          </div>

          <div className="space-y-6">
            {profileData.featuredProjects.map((project) => {
              const isOpen = activeFeatured === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => handleFeaturedClick(project.id)}
                  className={`bg-white border ${isOpen ? 'border-indigo-500 ring-4 ring-indigo-500/5' : 'border-slate-200'} p-8 rounded-2xl shadow-sm hover:shadow-md relative overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 group`}
                >
                  {/* واجهة التحكم التفاعلية الفاتحة التي تظهر عند الضغط */}
                  <div
                    className={`absolute inset-0 bg-slate-50/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4 className="text-slate-900 font-bold text-xs font-mono tracking-wider uppercase">Select Architecture Core to View:</h4>

                    <div className="flex flex-col sm:flex-row gap-2.5 w-[85%] sm:w-auto">
                      {project.isSeparatedRepos ? (
                        <>
                          <a href={project.githubBackend} target="_blank" rel="noreferrer"
                            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-center font-mono text-xs font-semibold rounded-xl border border-slate-200 transition shadow-sm">
                            Backend API (C#) ↗
                          </a>
                          <a href={project.githubFrontend} target="_blank" rel="noreferrer"
                            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-center font-mono text-xs font-semibold rounded-xl border border-slate-200 transition shadow-sm">
                            Frontend UI (React) ↗
                          </a>
                        </>
                      ) : (
                        <a href={project.githubRepo} target="_blank" rel="noreferrer"
                          className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-center font-mono text-xs font-semibold rounded-xl border border-slate-200 transition shadow-sm">
                          View Repository ↗
                        </a>
                      )}

                      <a href={project.liveUrl} target="_blank" rel="noreferrer"
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold font-mono text-xs rounded-xl transition shadow-sm">
                        Launch System ↗
                      </a>
                    </div>

                    <button
                      onClick={() => setActiveFeatured(null)}
                      className="mt-1 text-[11px] font-mono text-slate-400 hover:text-slate-600 uppercase tracking-widest font-semibold"
                    >
                      [ close controller ]
                    </button>
                  </div>

                  {/* معلومات الكارد الأساسية */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.isSeparatedRepos && (
                          <span className="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md uppercase font-bold tracking-wider">Multi-Repo</span>
                        )}
                        <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100 uppercase font-bold tracking-wider">{project.badge}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{project.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="text-[11px] font-mono bg-slate-50 text-slate-500 px-2.5 py-0.5 rounded border border-slate-100">{t}</span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SECTION 4: MINI LEARNING LABS ================= */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-mono tracking-widest text-indigo-600 uppercase font-bold bg-indigo-50/80 px-2 py-1 rounded">03 / Prototypes & Labs</h2>
            <div className="h-[2px] bg-gradient-to-r from-indigo-100 to-transparent flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.miniProjects.map((mini) => {
              const isMiniOpen = activeMini === mini.id;
              return (
                <div
                  key={mini.id}
                  onClick={() => handleMiniClick(mini.id)}
                  className={`bg-white border ${isMiniOpen ? 'border-indigo-400 ring-4 ring-indigo-500/5' : 'border-slate-200'} p-6 rounded-2xl flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all duration-300 min-h-[160px] shadow-sm hover:shadow-md`}
                >
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> {mini.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed"><span className="font-semibold text-slate-400 uppercase font-mono text-[10px]">Objective:</span> {mini.learned}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    {isMiniOpen ? (
                      <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                        <span className="text-[11px] font-mono font-medium text-indigo-600">Explore Source Code?</span>
                        <div className="flex gap-2">
                          <button onClick={() => setActiveMini(null)} className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">Cancel</button>
                          <a href={mini.githubRepo} target="_blank" rel="noreferrer" onClick={() => setActiveMini(null)} className="text-[11px] font-mono text-white font-bold bg-indigo-600 px-3 py-1 rounded-lg shadow-sm hover:bg-indigo-700 transition">GitHub ↗</a>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {mini.tech.map(t => (
                          <span key={t} className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-medium">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* Modern Minimal Light Footer */}
        <footer className="text-center pt-8 text-[11px] font-mono text-slate-400 flex justify-between items-center px-2 border-t border-slate-200">
          <span>Clean Architecture UI Frame</span>
          <span className="font-semibold text-slate-500">{profileData.name} &bull; 2026</span>
        </footer>

      </div>
    </div>
  );
}