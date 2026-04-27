import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import BentoGrid from './components/BentoGrid';
import FloatingDock from './components/FloatingDock';
import ProjectModal from './components/ProjectModal';
import ExperienceModal from './components/ExperienceModal';
import TechStackModal from './components/TechStackModal';

function App() {
  const [activeModal, setActiveModal] = useState(null); // 'project', 'experience', 'techstack'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openProjectModal = () => {
    setActiveModal('project');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen w-full bg-background text-slate-200 p-4 md:p-6 lg:p-8 font-sans relative overflow-x-hidden flex flex-col">
      {/* Global Mouse Tracking Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        <header className="flex justify-between items-center mb-6 shrink-0">
          <div className="font-mono text-xs font-bold tracking-widest text-slate-500">
            NANDINI PATEL <span className="text-primary-500">_</span>
          </div>
          <div className="font-mono text-xs text-slate-500">
            v2.0 // SYSTEM ONLINE
          </div>
        </header>

        <main className="w-full pb-32">
          <BentoGrid
            onProjectClick={openProjectModal}
            onExperienceClick={() => setActiveModal('experience')}
            onTechStackClick={() => setActiveModal('techstack')}
          />
        </main>
      </div>

      <FloatingDock
        onExperienceClick={() => setActiveModal('experience')}
        onProjectClick={() => setActiveModal('project')}
      />

      {/* Modals */}
      <ProjectModal isOpen={activeModal === 'project'} onClose={closeModal} />
      <ExperienceModal isOpen={activeModal === 'experience'} onClose={closeModal} />
      <TechStackModal isOpen={activeModal === 'techstack'} onClose={closeModal} />
      <Analytics />
    </div>
  );
}

export default App;
