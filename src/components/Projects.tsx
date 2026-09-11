import React from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  LineChart, 
  PieChart, 
  Server,
  Code2
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Projects: React.FC = () => {
  const attritionProject = RESUME_DATA.projects[0];
  const clouderaProject = RESUME_DATA.projects[1];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#090d16]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              03 / Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2 Visible Repositories</span>
          </div>
        </div>

        {/* Two Balanced Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* CARD 1: Employee Attrition Prediction */}
          <div 
            id="project-card-attrition"
            className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Header */}
              <div className="p-6 sm:p-7 border-b border-slate-800/90 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/60">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {attritionProject.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <LineChart className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Machine Learning & BI</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {attritionProject.title}
                </h3>

                {/* Short Professional Description */}
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {attritionProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                  {attritionProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] sm:text-xs font-mono font-medium rounded-md bg-slate-950/90 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Work / Features from Resume */}
              <div className="p-6 sm:p-7">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3.5 flex items-center justify-between">
                  <span>Key Deliverables & Workflow</span>
                  <span className="text-[11px] text-slate-500">Resume Verified</span>
                </div>

                <ul className="space-y-3">
                  {attritionProject.highlights.map((bullet, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                        {idx + 1}
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions & Dedicated GitHub Button */}
            <div className="px-6 py-4 sm:px-7 sm:py-5 bg-slate-950/80 border-t border-slate-800/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-slate-400 truncate">
                <span className="text-slate-500">Repo:</span> github.com/sowkath-data/Employee-Attrition-Prediction
              </div>

              <a
                id="btn-project-attrition-github"
                href={attritionProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 active:scale-[0.98] shrink-0"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 2: Cloud-Based Multimedia Content Protection System (CLOUDERA) */}
          <div 
            id="project-card-cloudera"
            className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Header */}
              <div className="p-6 sm:p-7 border-b border-slate-800/90 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/60">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <Cloud className="w-3.5 h-3.5" />
                    {clouderaProject.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Cloud & Multimedia Security</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {clouderaProject.title}
                </h3>

                {/* Short Professional Description */}
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {clouderaProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                  {clouderaProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] sm:text-xs font-mono font-medium rounded-md bg-slate-950/90 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Work / Features from Resume */}
              <div className="p-6 sm:p-7">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3.5 flex items-center justify-between">
                  <span>Key Deliverables & Features</span>
                  <span className="text-[11px] text-slate-500">Resume Verified</span>
                </div>

                <ul className="space-y-3">
                  {clouderaProject.highlights.map((bullet, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                        {idx + 1}
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Architecture Highlights Note */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>
                    Focuses on secure storage, role-based access control, file encryption/protection, and reliable relational persistence using PHP and MySQL.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Dedicated GitHub Button */}
            <div className="px-6 py-4 sm:px-7 sm:py-5 bg-slate-950/80 border-t border-slate-800/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-slate-400 truncate">
                <span className="text-slate-500">Repo:</span> github.com/sowkath-data/CLOUDERA
              </div>

              <a
                id="btn-project-cloudera-github"
                href={clouderaProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 active:scale-[0.98] shrink-0"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
