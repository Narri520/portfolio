import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Code2
} from 'lucide-react';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : filter === 'FEATURED' 
      ? projects.filter(p => p.featured) 
      : projects.filter(p => p.liveDemo);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Projects & Real Implementations
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Practical applications built using Python, React, Node.js, databases, and microservices architecture.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === 'ALL'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              All Projects ({projects.length})
            </button>

            <button
              onClick={() => setFilter('FEATURED')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === 'FEATURED'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              Core Resume Projects
            </button>

            <button
              onClick={() => setFilter('LIVE')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === 'LIVE'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              Live Demos
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0b101d] border border-slate-800/90 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-950/20 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Banner Visual Header */}
                <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0f172a] p-5 relative overflow-hidden border-b border-slate-800/80 flex flex-col justify-between">
                  <div className="flex justify-between items-start z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-[11px] font-mono text-cyan-300">
                      {project.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Decorative Background Code Pattern */}
                  <div className="absolute inset-0 opacity-15 font-mono text-[10px] p-3 text-cyan-400 select-none overflow-hidden pointer-events-none">
                    <code>
                      {`const ${project.id} = {\n  tech: [${project.techStack.slice(0, 3).join(', ')}],\n  status: "verified"\n};`}
                    </code>
                  </div>

                  {/* Bottom title in visual */}
                  <div className="z-10 mt-auto">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-sans line-clamp-1">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4 text-left">
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key Features Bullet List (First 2) */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-800/40 flex items-center justify-between gap-3 text-left">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-400 border border-cyan-500/40 transition-colors"
                      title="View Live Web Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
