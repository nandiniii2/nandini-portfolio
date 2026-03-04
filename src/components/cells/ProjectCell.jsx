import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const ProjectCell = ({ onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = resumeData.projects;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 4000); // Rotate every 4 seconds

        return () => clearInterval(timer);
    }, [projects.length]);

    const currentProject = projects[currentIndex];

    return (
        <div
            className="bento-card h-full p-0 overflow-hidden group cursor-pointer relative flex flex-col"
            onClick={() => onClick(currentProject)}
        >
            {/* Background Image / Abstract Graphic placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-surface z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105" />

            {/* Abstract Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

            <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                <div className="flex items-center justify-end mb-auto w-full">

                    <div className="flex items-center gap-3">
                        {/* Pagination Dots */}
                        <div className="flex gap-1">
                            {projects.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-4 bg-primary-500' : 'w-1 bg-slate-700'}`}
                                />
                            ))}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                            <ArrowRight size={18} className="text-slate-400 group-hover:text-white transition-colors group-hover:-rotate-45" />
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-4 relative min-h-[140px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="absolute bottom-0 left-0 w-full"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                {currentProject.title}
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                                {currentProject.description}
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                {currentProject.tech.slice(0, 3).map((tech, idx) => (
                                    <span key={idx} className="text-[10px] md:text-xs font-mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                                {currentProject.tech.length > 3 && (
                                    <span className="text-[10px] md:text-xs font-mono text-primary-500 bg-primary-500/10 px-2 py-1 rounded border border-primary-500/20">
                                        +{currentProject.tech.length - 3}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ProjectCell;
