import React from 'react';
import { ArrowRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const TechStackCell = ({ onClick }) => {
    const allTech = [
        ...resumeData.skills.languages,
        ...resumeData.skills.frameworks,
        ...resumeData.skills.databases
    ];

    // We duplicate the array to create a seamless infinite marquee effect
    const marqueeContent = [...allTech, ...allTech];

    return (
        <div
            className="bento-card h-full p-0 flex flex-col justify-center overflow-hidden bg-[#0A0A0A] border-slate-800 cursor-pointer group hover:border-primary-500/50 transition-colors"
            onClick={onClick}
        >
            <div className="px-6 md:px-8 mb-6 flex justify-between items-center z-10">
                <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                    Core Stack
                </h3>
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors group-hover:-rotate-45" />
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-edges">
                <div className="flex animate-marquee gap-3 py-2 items-center">
                    {marqueeContent.map((tech, i) => (
                        <div
                            key={`${tech}-${i}`}
                            className="px-4 py-2 bg-surfaceLight/50 border border-white/5 rounded-full text-slate-300 text-sm font-medium shrink-0 hover:border-primary-500/50 hover:text-primary-400 transition-colors"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
        </div>
    );
};

export default TechStackCell;
