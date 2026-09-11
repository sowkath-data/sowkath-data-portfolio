import React from 'react';
import { ArrowUp, Github, Mail, Phone, FileText } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060910] text-slate-400 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-300 text-xs">
                AS
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {RESUME_DATA.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              {RESUME_DATA.title} · Information Technology Graduate
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#languages" className="hover:text-cyan-300 transition-colors">Languages</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <a
              href={RESUME_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors font-bold"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All portfolio content strictly based on resume.</p>
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Coimbatore & Tirupur, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
