import React from 'react';
import { Globe, CheckCircle2, MessageSquare } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-16 md:py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            06 / Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Languages
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
        </div>

        {/* Languages Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {RESUME_DATA.languages.map((lang) => (
            <div
              key={lang}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {lang}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Spoken & Written
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                <CheckCircle2 className="w-3 h-3" />
                <span>Proficient</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
