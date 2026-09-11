import React from 'react';
import { 
  Building2, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  FileSpreadsheet, 
  TrendingUp, 
  Database,
  ArrowRight
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Experience: React.FC = () => {
  const exp = RESUME_DATA.experience[0];

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            02 / Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Experience
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
        </div>

        {/* Experience Timeline Card */}
        <div className="relative pl-0 md:pl-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-lg hover:border-slate-700 transition-all">
            
            {/* Header / Meta Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <Building2 className="w-3 h-3" />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-sm font-mono text-slate-400 bg-slate-950/60 px-3.5 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Responsibilities list (strictly verbatim from resume) */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <span>Key Responsibilities & Deliverables</span>
                <span className="h-px flex-1 bg-slate-800" />
              </h4>

              <ul className="space-y-3.5">
                {exp.responsibilities.map((resp, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3.5 text-sm sm:text-base text-slate-300 leading-relaxed group"
                  >
                    <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400 font-mono text-xs">
                      {index + 1}
                    </div>
                    <span className="group-hover:text-slate-100 transition-colors">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Methods applied in this experience based strictly on the bullets */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Mentioned in Role:</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                Microsoft Excel
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                VLOOKUP & XLOOKUP
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                Pivot Tables
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                MIS Reporting
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                Data Validation & Reconciliation
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
