import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ArtworkCard = ({ project, index }) => {
    const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
    
    return (
        <div className={`artwork-card group transition-transform duration-500 hover:scale-[1.02] hover:z-10 ${rotation} hover:rotate-0 bg-surface`}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="subheading-sans text-botanical-burgundy mb-2 block">
                            {project.category}
                        </span>
                        <h3 className="heading-serif text-2xl group-hover:text-botanical-red transition-colors">
                            {project.title}
                        </h3>
                    </div>
                </div>

                <p className="text-textMuted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="text-xs font-mono px-2 py-1 bg-botanical-yellow/10 text-botanical-burgundy border border-botanical-yellow/30 rounded">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 border-t border-surfaceBorder pt-4 mt-auto">
                    {project.demoLink && (
                        <a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-botanical-blue hover:text-botanical-burgundy transition-colors uppercase tracking-wider"
                        >
                            <ExternalLink size={14} /> View Exhibit
                        </a>
                    )}
                    {project.githubLink && (
                        <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-textMain hover:text-botanical-burgundy transition-colors uppercase tracking-wider"
                        >
                            <Github size={14} /> Source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArtworkCard;
