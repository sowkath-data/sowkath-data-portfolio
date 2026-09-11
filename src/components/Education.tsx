import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#090d16]/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            05 / Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Education
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <Calendar className="w-3 h-3" />
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {edu.degree}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  {edu.institution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400/70" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
