import React from 'react';
import { 
  FileSpreadsheet, 
  BarChart2, 
  Database, 
  Binary, 
  Target, 
  CheckCircle2 
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#090d16]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            01 / Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Professional Summary
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
        </div>

        {/* Verbatim Professional Summary Display */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Verbatim Resume Summary</span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {RESUME_DATA.summary}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Business & MIS Reporting</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Hands-on Excel reconciliation, validation, and daily/weekly business reports.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Modern Data Stack</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Python, SQL/MySQL, Power BI, Tableau, Pandas, NumPy, and Scikit-learn.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Data-Driven Insights</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Passionate about translating data analysis into solid business decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
