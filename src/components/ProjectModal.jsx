import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ProjectModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
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
                        className="w-full max-w-4xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header/Banner Area */}
                        <div className="relative p-8 pb-10 bg-gradient-to-br from-primary-900/30 to-surface border-b border-white/5 overflow-hidden shrink-0">
                            {/* Abstract Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0 pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-black/40 text-slate-400 hover:text-white hover:bg-black/60 transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative z-10 flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center border border-primary-500/30 mb-2">
                                    <FolderGit2 size={24} />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                    Project Portfolio
                                </h2>
                                <p className="text-slate-400 max-w-lg mt-2">
                                    A comprehensive look at my engineering systems and data science capabilities.
                                </p>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar bg-black/20 flex flex-col gap-6">
                            {resumeData.projects.map((proj, i) => (
                                <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary-500/40 transition-colors group">
                                    <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                                        <div>
                                            <span className="inline-block px-3 py-1 mb-3 bg-primary-500/10 text-primary-400 text-xs font-mono rounded-full border border-primary-500/20">
                                                {proj.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">{proj.title}</h3>
                                        </div>
                                        <div className="flex gap-2 self-start sm:self-auto shrink-0">
                                            <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                                                <ExternalLink size={14}/>
                                                    <a href="https://f1-finish-tier-predictor.streamlit.app/"> Demo </a>
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                                                <Github size={14} /> Code
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{proj.description}</p>

                                    <ul className="space-y-2 mt-2">
                                        {proj.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm">
                                                <span className="text-primary-500 mt-0.5">✦</span>
                                                <span className="text-slate-300 leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                        {proj.tech.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
