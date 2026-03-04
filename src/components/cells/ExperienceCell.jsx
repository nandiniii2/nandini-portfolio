import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const ExperienceCell = ({ onClick }) => {
    return (
        <div
            className="bento-card h-full p-6 md:p-8 flex flex-col group cursor-pointer relative overflow-hidden"
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2 text-slate-400 font-mono text-xs md:text-sm">
                    <Briefcase size={16} className="text-primary-500" />
                    <span>Work Experience</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors group-hover:-rotate-45" />
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar pr-2 pb-4 pointer-events-auto">
                {resumeData.experience.map((role, idx) => (
                    <div key={idx} className="relative">
                        {/* Timeline line */}
                        {idx !== resumeData.experience.length - 1 && (
                            <div className="absolute left-[5px] top-6 bottom-[-24px] w-[1px] bg-white/10" />
                        )}
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-3 h-3 rounded-full bg-surfaceLight border border-primary-500/50 flex-shrink-0 z-10" />
                            <div>
                                <h4 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-primary-300 transition-colors">
                                    {role.role}
                                </h4>
                                <div className="text-slate-400 text-sm font-medium mb-1.5">
                                    {role.company}
                                </div>
                                <div className="text-slate-500 text-xs font-mono">
                                    {role.date}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCell;
