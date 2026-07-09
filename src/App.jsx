import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import GalleryLayout from './components/GalleryLayout';
import FloatingDock from './components/FloatingDock';
import ExperienceModal from './components/ExperienceModal';
import TechStackModal from './components/TechStackModal';

function App() {
  const [activeModal, setActiveModal] = useState(null); // 'experience', 'techstack'

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen w-full bg-background text-textMain relative overflow-x-hidden flex flex-col font-sans">
      
      {/* Botanical ambient glow at the top */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-botanical-yellow/10 to-transparent pointer-events-none" />

      <div className="w-full relative z-10 flex flex-col flex-grow">
        <header className="flex justify-between items-center p-6 md:p-8 max-w-6xl mx-auto w-full">
          <div className="subheading-sans text-textMuted tracking-widest">
            NANDINI PATEL <span className="text-botanical-burgundy">✦</span>
          </div>
          {/* <div className="subheading-sans text-botanical-blue">
            EST. 2026
          </div> */}
        </header>

        <main className="w-full pb-32 flex-grow">
          <GalleryLayout
            onExperienceClick={() => setActiveModal('experience')}
            onTechStackClick={() => setActiveModal('techstack')}
          />
        </main>
      </div>

      <FloatingDock
        onExperienceClick={() => setActiveModal('experience')}
        onProjectClick={() => {
          // Smooth scroll to The Exhibition section instead of opening a modal
          window.scrollTo({ top: 600, behavior: 'smooth' });
        }}
      />

      {/* Modals */}
      <ExperienceModal isOpen={activeModal === 'experience'} onClose={closeModal} />
      <TechStackModal isOpen={activeModal === 'techstack'} onClose={closeModal} />
      <Analytics />
    </div>
  );
}

export default App;
