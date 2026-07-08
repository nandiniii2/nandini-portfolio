import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import ArtworkCard from './ArtworkCard';

// Reusable fade-up animation preset
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

const fadeUpInView = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

// Decorative SVG botanical leaf element
const BotanicalLeaf = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 120 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M60 190 Q10 140 20 80 Q30 20 60 10 Q90 20 100 80 Q110 140 60 190Z"
      fill="currentColor"
      opacity="0.15"
    />
    <path
      d="M60 190 Q60 120 60 10"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.3"
    />
    <path d="M60 120 Q35 100 20 80" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <path d="M60 100 Q80 85 100 80" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <path d="M60 150 Q42 138 30 125" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <path d="M60 140 Q75 132 88 122" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

const GalleryLayout = ({ onExperienceClick, onTechStackClick }) => {
  return (
    <div className="w-full">

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 md:px-12 lg:px-20">

        {/* Ambient botanical background accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <BotanicalLeaf className="absolute -top-10 -right-8 w-48 h-80 text-botanical-green rotate-12 opacity-60" />
          <BotanicalLeaf className="absolute top-1/3 -right-4 w-28 h-52 text-botanical-yellow rotate-6 opacity-40" />
          <BotanicalLeaf className="absolute -bottom-16 -left-10 w-40 h-64 text-botanical-burgundy -rotate-12 opacity-30" />
          <div className="absolute top-20 right-1/4 w-3 h-3 rounded-full bg-botanical-red opacity-40" />
          <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-botanical-yellow opacity-50" />
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-botanical-blue opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl w-full mx-auto">
          {/* Eyebrow label */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-botanical-burgundy">
              <MapPin size={14} />
              <span className="subheading-sans">United States - Open to Relocation</span>
            </div>
            <div className="h-px w-12 bg-botanical-yellow" />
            <span className="subheading-sans text-textMuted">MS Computer Science · IU Bloomington</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.0] text-textMain mb-6 tracking-tight"
          >
            Hi, I'm
            <br />
            <span className="text-botanical-red italic">Nandini.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-xl md:text-2xl text-textMuted font-sans font-light max-w-2xl leading-relaxed mb-10"
          >
            I engineer <strong className="text-textMain font-semibold">scalable data systems</strong> and
            build <strong className="text-textMain font-semibold">AI-powered products</strong> — with
            an eye for design sharp enough to almost get me into interior design school.
          </motion.p>

          {/* CTA Row */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
            <button
              onClick={onExperienceClick}
              className="group flex items-center gap-2 px-7 py-3.5 bg-botanical-burgundy text-white font-sans text-sm tracking-wider uppercase font-bold rounded-full hover:bg-botanical-red transition-all duration-300 shadow-lg hover:shadow-botanical-red/30 hover:-translate-y-0.5"
            >
              Experience
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onTechStackClick}
              className="group flex items-center gap-2 px-7 py-3.5 bg-surface border border-surfaceBorder text-textMain font-sans text-sm tracking-wider uppercase font-bold rounded-full hover:border-botanical-blue hover:text-botanical-blue transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              Tech Stack
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={resumeData.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 text-textMuted font-sans text-sm tracking-wider uppercase font-bold hover:text-botanical-burgundy transition-colors"
            >
              Resume PDF
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════════ */}
      <section className="py-10 border-y border-surfaceBorder bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5.5M+', label: 'Records Processed' },
              { value: '4', label: 'Production Apps' },
              { value: '3.87', label: 'GPA (MS)' },
              { value: '3+', label: 'Years Building' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                {...fadeUpInView}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl text-botanical-red font-bold mb-1">
                  {stat.value}
                </div>
                <div className="subheading-sans text-textMuted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE EXHIBITION (Projects)
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUpInView} className="mb-14 flex items-end gap-6">
            <div>
              <span className="subheading-sans text-botanical-burgundy block mb-2">My Work</span>
              <h2 className="heading-serif text-4xl md:text-5xl text-textMain">The Exhibition</h2>
            </div>
            <div className="h-px bg-botanical-yellow flex-grow mb-3" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <ArtworkCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          EDUCATION
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-surface border-y border-surfaceBorder">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUpInView} className="mb-10">
            <span className="subheading-sans text-botanical-burgundy block mb-2">Background</span>
            <h2 className="heading-serif text-4xl md:text-5xl text-textMain">Education</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                {...fadeUpInView}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.12 }}
                className="artwork-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-botanical-yellow/10 border border-botanical-yellow/30 flex items-center justify-center text-botanical-burgundy shrink-0 mt-0.5">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="subheading-sans text-botanical-blue mb-1">{edu.date}</div>
                    <h3 className="heading-serif text-xl text-textMain mb-1">{edu.degree}</h3>
                    <div className="text-textMuted text-sm mb-2">{edu.school}</div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-botanical-yellow/10 text-botanical-burgundy rounded-full text-xs font-bold font-mono border border-botanical-yellow/20">
                      GPA {edu.gpa}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT / FOOTER
      ═══════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <BotanicalLeaf className="absolute -bottom-20 right-10 w-36 h-56 text-botanical-yellow rotate-6 opacity-30" />
          <BotanicalLeaf className="absolute top-10 -left-10 w-28 h-44 text-botanical-red -rotate-12 opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div {...fadeUpInView} className="text-center max-w-2xl mx-auto">
            <span className="subheading-sans text-botanical-burgundy block mb-4">Let's Talk</span>
            <h2 className="heading-serif text-5xl md:text-6xl text-textMain mb-6">
              Let's Build Something
              <span className="text-botanical-red italic"> Great.</span>
            </h2>
            <p className="text-textMuted text-lg leading-relaxed mb-10">
              Currently open to full-time roles in software engineering and data science.
              I reply fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${resumeData.contact.email.replace(/[\[\]]/g, '')}`}
                className="group flex items-center gap-2 px-8 py-4 bg-botanical-burgundy text-white font-sans text-sm tracking-wider uppercase font-bold rounded-full hover:bg-botanical-red transition-all duration-300 shadow-xl hover:shadow-botanical-red/30 hover:-translate-y-1"
              >
                Say Hello
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface border border-surfaceBorder text-textMain font-sans text-sm tracking-wider uppercase font-bold rounded-full hover:border-botanical-blue hover:text-botanical-blue transition-all duration-300 shadow-sm hover:-translate-y-1"
              >
                LinkedIn
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface border border-surfaceBorder text-textMain font-sans text-sm tracking-wider uppercase font-bold rounded-full hover:border-botanical-burgundy hover:text-botanical-burgundy transition-all duration-300 shadow-sm hover:-translate-y-1"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Footer bar */}
          <motion.div
            {...fadeUpInView}
            className="mt-20 pt-8 border-t border-surfaceBorder flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="subheading-sans text-textMuted">
              NANDINI PATEL <span className="text-botanical-burgundy">✦</span> 2026
            </div>
            <div className="subheading-sans text-textMuted">
              Designed & Built from scratch · Not a template
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default GalleryLayout;
