import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Award, CheckCircle2, Shield, ExternalLink } from 'lucide-react';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Technical Certifications
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Formally certified skill sets across programming languages, database systems, web development, and competitive programming.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0b101d] border border-slate-800 p-6 sm:p-7 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                        {cert.name}
                      </h3>
                      <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                        Issuer: {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium shrink-0">
                    {cert.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Resume Verified Certification
                </span>
                <span className="text-slate-400">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
