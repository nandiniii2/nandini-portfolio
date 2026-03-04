import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ExperienceModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="w-full max-w-3xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative p-6 sm:p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-primary-900/20 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-surfaceLight border border-white/10 flex items-center justify-center text-primary-500">
                                    <Terminal size={20} />
                                </div>
                                <h2 className="text-2xl font-black text-white">Experience Log</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-black/40 text-slate-400 hover:text-white hover:bg-black/60 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Timeline Content */}
                        <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                            <div className="space-y-12">
                                {resumeData.experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-8 sm:pl-0">

                                        {/* Desktop Timeline Node */}
                                        <div className="hidden sm:block absolute left-[150px] top-2 bottom-[-48px] w-[1px] bg-white/10 z-0">
                                            {idx === resumeData.experience.length - 1 && <div className="absolute inset-0 bg-surface h-full w-full" />}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 relative z-10">
                                            {/* Left: Dates & Duration */}
                                            <div className="sm:w-[130px] sm:text-right shrink-0">
                                                <div className="text-primary-400 font-mono text-sm uppercase tracking-wider mb-1">
                                                    {exp.date.split(' - ')[0]}
                                                </div>
                                                <div className="text-slate-500 text-xs">
                                                    {exp.date}
                                                </div>
                                            </div>

                                            {/* Timeline Dot (Desktop) */}
                                            <div className="hidden sm:flex absolute left-[146px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary-500 border-2 border-surface shadow-[0_0_10px_rgba(56,189,248,0.5)] z-20" />

                                            {/* Timeline Dot (Mobile) */}
                                            <div className="sm:hidden absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary-500 z-20" />
                                            <div className="sm:hidden absolute left-[3px] top-3 bottom-[-48px] w-[1px] bg-white/10 z-0" />

                                            {/* Right: Content */}
                                            <div className="flex-1 pb-2">
                                                <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                                                    {exp.role}
                                                </h3>
                                                <div className="text-slate-300 font-medium mb-1">
                                                    {exp.company}
                                                </div>
                                                <div className="text-slate-500 text-sm mb-4">
                                                    {exp.location}
                                                </div>

                                                <ul className="space-y-3">
                                                    {exp.bullets.map((bullet, bIdx) => (
                                                        <li key={bIdx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                                                            <span className="text-primary-600 mt-1.5 w-1 h-1 rounded-full bg-primary-600 shrink-0" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ExperienceModal;
