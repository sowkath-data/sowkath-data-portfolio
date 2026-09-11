import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Top sticky navigation bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main content sections */}
      <main>
        {/* Hero / Home */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* About / Professional Summary */}
        <About />

        {/* Experience: Junior Executive — Supreme Mobiles */}
        <Experience />

        {/* Projects: Employee Attrition Prediction */}
        <Projects />

        {/* Technical Skills: 9 categories strictly matching resume */}
        <Skills />

        {/* Education: B.Sc. IT (2025), HSC (2022), SSLC (2020) */}
        <Education />

        {/* Languages: Tamil, English, Urdu */}
        <Languages />

        {/* Contact: Phone, Email, GitHub, Message Composer */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* 1:1 Printable & Viewable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
