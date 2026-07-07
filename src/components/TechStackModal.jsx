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
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-surface/80 backdrop-blur-md"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="w-full max-w-4xl max-h-[90vh] bg-background border border-surfaceBorder rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Area */}
                        <div className="relative p-8 border-b border-surfaceBorder flex justify-between items-center bg-surface">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-botanical-yellow/10 border border-botanical-yellow/20 flex items-center justify-center text-botanical-burgundy">
                                    <Blocks size={24} />
                                </div>
                                <div>
                                    <h2 className="heading-serif text-3xl text-textMain">Technical Arsenal</h2>
                                    <p className="text-textMuted text-sm font-sans mt-1">Full-stack software engineering x Data science</p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-surfaceBorder text-textMuted hover:text-botanical-burgundy hover:bg-botanical-yellow/20 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {categories.map((category, idx) => (
                                    <div key={idx}>
                                        <h3 className="subheading-sans text-botanical-blue mb-4 border-b border-surfaceBorder pb-2">
                                            {category.label}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((skill, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-1.5 bg-surface border border-surfaceBorder rounded-lg text-textMain font-mono text-sm shadow-sm hover:border-botanical-burgundy hover:text-botanical-burgundy transition-colors cursor-default"
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
