import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  FileText 
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
${RESUME_DATA.name}
${RESUME_DATA.title}
${RESUME_DATA.phone} | ${RESUME_DATA.email} | GitHub | Portfolio

PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

EXPERIENCE
${RESUME_DATA.experience[0].role} — ${RESUME_DATA.experience[0].company} ${RESUME_DATA.experience[0].period}
${RESUME_DATA.experience[0].duration}
${RESUME_DATA.experience[0].responsibilities.map(r => `• ${r}`).join('\n')}

PROJECTS
${RESUME_DATA.projects.map(p => `${p.title} — ${p.badge} | GitHub
${p.techString}
${p.highlights.map(h => `• ${h}`).join('\n')}`).join('\n\n')}

TECHNICAL SKILLS
${RESUME_DATA.skillCategories.map(c => `${c.category}: ${c.rawText}`).join('\n')}

EDUCATION
${RESUME_DATA.education.map(e => `${e.degree} ${e.year}\n${e.institution}`).join('\n')}

LANGUAGES
${RESUME_DATA.languages.join(' | ')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static">
      
      {/* Container Dialog */}
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden print:border-0 print:rounded-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              1:1 Exact Resume View (Faithful Reproduction)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Copy plain resume text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Exact Resume Sheet */}
        <div className="p-6 sm:p-12 overflow-y-auto max-h-[80vh] print:max-h-none print:p-8 bg-white text-[#111827] font-serif selection:bg-cyan-100">
          
          {/* Header */}
          <div className="text-center pb-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black font-sans">
              {RESUME_DATA.name}
            </h1>
            <div className="text-sm font-bold tracking-wider text-black mt-0.5 font-sans">
              {RESUME_DATA.title}
            </div>
            <div className="text-xs text-gray-700 mt-1 font-sans flex items-center justify-center flex-wrap gap-2">
              <span>{RESUME_DATA.phone}</span>
              <span>|</span>
              <a href={`mailto:${RESUME_DATA.email}`} className="text-blue-800 hover:underline">
                {RESUME_DATA.email}
              </a>
              <span>|</span>
              <a href={RESUME_DATA.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                GitHub
              </a>
              <span>|</span>
              <a href="#" className="text-blue-800 hover:underline">
                Portfolio
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mt-4">
            <h2 className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-0.5 font-sans">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed mt-1.5 text-justify font-sans">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Section: Experience */}
          <div className="mt-4">
            <h2 className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-0.5 font-sans">
              EXPERIENCE
            </h2>

            <div className="mt-1.5 font-sans">
              <div className="flex items-baseline justify-between text-xs sm:text-[13px]">
                <div className="font-bold text-black">
                  {RESUME_DATA.experience[0].role} — {RESUME_DATA.experience[0].company}
                </div>
                <div className="font-bold text-black">
                  {RESUME_DATA.experience[0].period}
                </div>
              </div>
              <div className="text-xs italic text-gray-700 mt-0.5">
                {RESUME_DATA.experience[0].duration}
              </div>

              <ul className="list-disc list-outside pl-4 mt-1 space-y-1 text-xs leading-relaxed text-gray-900">
                {RESUME_DATA.experience[0].responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="mt-4">
            <h2 className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-0.5 font-sans">
              PROJECTS
            </h2>

            <div className="mt-1.5 space-y-3 font-sans">
              {RESUME_DATA.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-baseline justify-between text-xs sm:text-[13px]">
                    <span className="font-bold text-black">
                      {proj.title} — {proj.badge}
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline text-[11px] font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="text-xs italic text-gray-700 mt-0.5">
                    {proj.techString}
                  </div>

                  <ul className="list-disc list-outside pl-4 mt-1 space-y-1 text-xs leading-relaxed text-gray-900">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="mt-4">
            <h2 className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-0.5 font-sans">
              TECHNICAL SKILLS
            </h2>

            <div className="mt-1.5 space-y-1 text-xs font-sans">
              {RESUME_DATA.skillCategories.map((c) => (
                <div key={c.id} className="leading-relaxed">
                  <span className="font-bold text-black">{c.category}: </span>
                  <span className="text-gray-900">{c.rawText}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="mt-4">
            <h2 className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-0.5 font-sans">
              EDUCATION
            </h2>

            <div className="mt-1.5 space-y-2 text-xs font-sans">
              {RESUME_DATA.education.map((e) => (
                <div key={e.id}>
                  <div className="flex items-baseline justify-between font-bold text-black">
                    <span>{e.degree}</span>
                    <span>{e.year}</span>
                  </div>
                  <div className="text-gray-800">{e.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Languages */}
          <div className="mt-4">
            <h2 className="text-xs font-bold tracking-wider uppercase border-b-2 border-black pb-0.5 font-sans">
              LANGUAGES
            </h2>
            <div className="mt-1 text-xs font-sans text-gray-900">
              {RESUME_DATA.languages.join(' | ')}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 text-center text-xs text-slate-400 print:hidden">
          Exact reproduction of A. Sowkath's resume • All details preserved 100% faithfully
        </div>

      </div>
    </div>
  );
};
