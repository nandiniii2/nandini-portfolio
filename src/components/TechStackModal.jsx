import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Blocks } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const TechStackModal = ({ isOpen, onClose }) => {
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

    const categories = [
        { label: "Languages", items: resumeData.skills.languages },
        { label: "Frameworks & Libs", items: resumeData.skills.frameworks },
        { label: "Databases", items: resumeData.skills.databases },
        { label: "Tools & Cloud", items: resumeData.skills.tools },
        { label: "Core Competencies", items: resumeData.skills.core },
    ];

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
                        {/* Header Area */}
                        <div className="relative p-8 border-b border-white/5 flex justify-between items-center bg-surfaceLight/30">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                                    <Blocks size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white">Technical Arsenal</h2>
                                    <p className="text-slate-400 text-sm font-mono mt-1">Full-stack software engineering x Data science</p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-black/40 text-slate-400 hover:text-white hover:bg-black/60 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {categories.map((category, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-sm font-mono text-primary-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
                                            {category.label}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((skill, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:border-primary-500/50 hover:bg-primary-500/10 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
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

export default TechStackModal;
