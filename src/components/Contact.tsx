import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Github, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderRole, setSenderRole] = useState('Entry-Level Data Analyst');
  const [senderNotes, setSenderNotes] = useState('');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Data Analyst Opportunity for A. Sowkath${senderOrg ? ` - ${senderOrg}` : ''}`);
    const body = encodeURIComponent(
      `Hi Sowkath,\n\nI reviewed your portfolio based on your resume. We are interested in speaking with you regarding an opportunity${
        senderOrg ? ` at ${senderOrg}` : ''
      }${senderRole ? ` for the position of ${senderRole}` : ''}.\n\n${
        senderNotes ? `Details:\n${senderNotes}\n\n` : ''
      }Best regards,\n${senderName || 'Hiring Team'}`
    );
    window.location.href = `mailto:${RESUME_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#090d16]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            07 / Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Contact
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              I am actively seeking an entry-level Data Analyst role and am available for interviews and opportunities. Feel free to contact me directly:
            </p>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Mail className="w-4 h-4" />
                  <span>EMAIL ADDRESS</span>
                </div>
                <button
                  id="btn-copy-email"
                  onClick={() => copyToClipboard(RESUME_DATA.email, 'email')}
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-slate-950 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block truncate"
              >
                {RESUME_DATA.email}
              </a>
              <span className="text-xs text-slate-400 mt-1 block">
                Direct primary email
              </span>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <span>PHONE NUMBER</span>
                </div>
                <button
                  id="btn-copy-phone"
                  onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone')}
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-slate-950 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
                >
                  {copiedKey === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${RESUME_DATA.phone}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors block font-mono"
              >
                {RESUME_DATA.phone}
              </a>
              <span className="text-xs text-slate-400 mt-1 block">
                Calls and messages
              </span>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Github className="w-4 h-4" />
                  <span>GITHUB PROFILE & REPOSITORY</span>
                </div>
              </div>

              <a
                id="btn-contact-github"
                href={RESUME_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-cyan-300 transition-colors"
              >
                <span>github.com/sowkath-data</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>
              <span className="text-xs text-slate-400 mt-1 block">
                Employee Attrition Prediction & CLOUDERA repositories
              </span>
            </div>
          </div>

          {/* Right Column: Recruiter Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>Send Message / Inquire for Roles</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepares an email directly addressed to {RESUME_DATA.email}
                  </p>
                </div>
              </div>

              <form onSubmit={handleComposeMail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. John Doe / Recruiter"
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="contact-org"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      placeholder="e.g. Acme Tech Solutions"
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Target Role
                  </label>
                  <input
                    type="text"
                    id="contact-role"
                    value={senderRole}
                    onChange={(e) => setSenderRole(e.target.value)}
                    placeholder="e.g. Entry-Level Data Analyst"
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Message / Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={senderNotes}
                    onChange={(e) => setSenderNotes(e.target.value)}
                    placeholder="Write your note or interview request here..."
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400">
                    Direct recipient: <span className="font-mono text-cyan-300">{RESUME_DATA.email}</span>
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-message"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
