import React, { useState } from 'react';
import { 
  ArrowDown, 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  Check, 
  Copy, 
  Database, 
  FileSpreadsheet, 
  Cpu, 
  TrendingUp,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background technical grid accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Availability / Status Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>Seeking Entry-Level Data Analyst Role</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>B.Sc. IT (2025)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ex-Junior Executive — Supreme Mobiles</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            Portfolio & Resume
          </p>

          <h1 
            id="hero-name"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none"
          >
            {RESUME_DATA.name}
          </h1>

          <div className="flex items-center gap-3 pt-1">
            <div className="h-0.5 w-8 bg-cyan-400 rounded-full" />
            <h2 
              id="hero-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-cyan-300 font-mono"
            >
              {RESUME_DATA.title}
            </h2>
          </div>

          {/* Subtitle / Objective directly based on resume */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed pt-2">
            Information Technology graduate with hands-on experience in data analysis, business reporting, reconciliation, and MIS reporting. Strong interest in using data-driven insights to support business decisions.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-8">
          {/* CTA 1: View Projects */}
          <a
            id="hero-btn-view-projects"
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* CTA 2: GitHub Button */}
          <a
            id="hero-btn-github"
            href={RESUME_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all active:scale-[0.98]"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* CTA 3: Contact Me */}
          <a
            id="hero-btn-contact"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>

          {/* Quick Resume View Button */}
          <button
            id="hero-btn-quick-resume"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 text-sm font-medium transition-colors"
          >
            <span>View Complete Resume</span>
            <ArrowDown className="w-3.5 h-3.5 -rotate-90 text-cyan-400" />
          </button>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <a href={`tel:${RESUME_DATA.phone}`} className="hover:text-cyan-300 transition-colors">
                {RESUME_DATA.phone}
              </a>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone')}
                className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-cyan-300 transition-colors">
                {RESUME_DATA.email}
              </a>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.email, 'email')}
                className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>

          <div className="text-slate-500 text-[11px]">
            Coimbatore & Tirupur, India
          </div>
        </div>

        {/* Recruiter Quick Fact Cards (Grounded strictly in resume) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Experience</div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">3 Months</div>
            <div className="text-xs text-slate-400 mt-0.5">Supreme Mobiles (Jul–Sep 2025)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Key Projects</div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">2 Projects</div>
            <div className="text-xs text-slate-400 mt-0.5">ML Pipeline · CLOUDERA System</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Education</div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">B.Sc. IT</div>
            <div className="text-xs text-slate-400 mt-0.5">Nyruthi College (Class of 2025)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Languages</div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">3 Fluent</div>
            <div className="text-xs text-slate-400 mt-0.5">Tamil · English · Urdu</div>
          </div>
        </div>

      </div>
    </section>
  );
};
