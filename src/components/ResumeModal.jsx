import React, { useRef } from 'react';
import { X, Printer, Download, Mail, Code, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const ResumeModal = ({ onClose }) => {
  const resumeRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn print:p-0 print:static print:bg-white">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0b101d] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white print:text-black">
        
        {/* Header Controls (Hidden during print) */}
        <div className="p-4 sm:p-5 bg-[#080c16] border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h3 className="text-base sm:text-lg font-bold text-white font-mono">
              Narendra_Chamarthi_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div ref={resumeRef} className="p-6 sm:p-10 overflow-y-auto space-y-6 text-left font-sans text-slate-200 print:text-slate-900 print:bg-white print:p-6 print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-5">
            <h1 className="text-3xl font-extrabold text-white print:text-slate-900 tracking-tight">
              NARENDRA CHAMARTHI
            </h1>
            <p className="text-cyan-400 print:text-blue-700 font-mono text-sm font-semibold mt-1">
              Software Developer | Python Full-Stack Developer | Problem Solver
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-slate-600" />
                narendrachamarthi520@gmail.com
              </span>
              <span>•</span>
              <a href="https://github.com/Narri520" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/Narri520
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/narendra-chamarthi" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/narendra-chamarthi
              </a>
              <span>•</span>
              <a href="https://leetcode.com/u/Narri05/" target="_blank" rel="noreferrer" className="hover:underline">
                leetcode.com/u/Narri05
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start pt-1">
              <div>
                <h3 className="text-base font-bold text-white print:text-slate-900">
                  Bachelor of Technology (B.Tech) – Artificial Intelligence and Data Science
                </h3>
                <p className="text-xs text-slate-300 print:text-slate-700">
                  VVIIT (Vignan's Institute of Information Technology), Andhra Pradesh
                </p>
              </div>
              <div className="text-right text-xs font-mono text-slate-400 print:text-slate-600 shrink-0 ml-4">
                <div>2023 – 2027</div>
                <div className="font-bold text-cyan-400 print:text-blue-700">CGPA: 8.6 / 10</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div>
                <span className="font-bold text-slate-200 print:text-slate-900">Programming:</span> Python, SQL
              </div>
              <div>
                <span className="font-bold text-slate-200 print:text-slate-900">Web Development:</span> HTML, CSS, JavaScript, React.js, Node.js, Express.js
              </div>
              <div>
                <span className="font-bold text-slate-200 print:text-slate-900">Databases:</span> MySQL, MongoDB
              </div>
              <div>
                <span className="font-bold text-slate-200 print:text-slate-900">Core CS:</span> Data Structures & Algorithms, OOP, DBMS, Computer Networks
              </div>
              <div>
                <span className="font-bold text-slate-200 print:text-slate-900">Tools & Frameworks:</span> Git, GitHub, Docker, REST APIs, FastAPI
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              FEATURED PROJECTS
            </h2>

            {/* SmartTask */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-white print:text-slate-900">
                  SmartTask – Location-Based Smart Reminder & Accountability System
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 print:text-slate-600">
                  Python, React.js, Node.js, MongoDB, FastAPI
                </span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-0.5 pl-1">
                <li>Built a smart reminder platform triggering task notifications based on time and user location.</li>
                <li>Implemented missed-task detection and automated alert dispatches to predefined emergency contacts.</li>
                <li>Designed accountability stake mechanisms and automated penalty engines for consistency tracking.</li>
                <li>Engineered visual and natural language proof verification microservice using Python FastAPI.</li>
              </ul>
            </div>

            {/* Green Link */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-white print:text-slate-900">
                  Green Link – Empowering Farmers Digitally
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 print:text-slate-600">
                  React.js, HTML, CSS, JavaScript
                </span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-0.5 pl-1">
                <li>Developed a web platform connecting agricultural workers with market insights and farming resources.</li>
                <li>Created a responsive, accessible interface for users with limited technical background.</li>
              </ul>
            </div>

            {/* Resumaid */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-white print:text-slate-900">
                  Resumaid – Resume Builder & ATS Scanner
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 print:text-slate-600">
                  React.js, Node.js, Express.js, MongoDB, Docker, AES-256
                </span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-0.5 pl-1">
                <li>Implemented docx resume parsing and ATS score feedback algorithms.</li>
                <li>Secured PII data using field-level AES-256-CBC encryption and Google Authenticator MFA.</li>
                <li>Containerized frontend, backend, and MongoDB database using Docker Compose.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-700">
              <div>• <span className="font-semibold text-slate-100 print:text-slate-900">Python Programming</span> – Issuer: Nxtwave</div>
              <div>• <span className="font-semibold text-slate-100 print:text-slate-900">Data Base – My SQL</span> – Issuer: Nxtwave</div>
              <div>• <span className="font-semibold text-slate-100 print:text-slate-900">Web Development – HTML, CSS, JS, REACT</span> – Issuer: Nxtwave</div>
              <div>• <span className="font-semibold text-slate-100 print:text-slate-900">Competitive Programming</span> – Issuer: NPTEL</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 border-b border-slate-800/80 print:border-slate-300 pb-1">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-1 pl-1">
              <li>Solved 300+ problems on LeetCode and other coding platforms.</li>
              <li>Participated in coding contests and hackathons.</li>
              <li>Demonstrated strong understanding of Data Structures and Algorithms.</li>
              <li>Consistently practiced competitive programming and problem-solving in Python.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080c16] border-t border-slate-800 flex justify-between items-center print:hidden">
          <span className="text-xs font-mono text-slate-400">Source of Truth: Verified Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono"
          >
            Close Resume Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
