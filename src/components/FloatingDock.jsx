import React from 'react';
import { Mail, Github, Linkedin, Briefcase, FolderGit2, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const FloatingDock = ({ onExperienceClick, onProjectClick }) => {
    const links = [
        { icon: <FileText size={20} />, label: 'Resume', action: () => window.open(resumeData.contact.resume, '_blank') },
        { icon: <Briefcase size={20} />, label: 'Experience', action: onExperienceClick },
        { icon: <FolderGit2 size={20} />, label: 'Projects', action: onProjectClick },
        { icon: <Github size={20} />, label: 'GitHub', action: () => window.open(resumeData.contact.github, '_blank') },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', action: () => window.open(resumeData.contact.linkedin, '_blank') },
        { icon: <Mail size={20} />, label: 'Contact', action: () => window.location.href = `mailto:${resumeData.contact.email}` },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface/90 backdrop-blur-xl border border-surfaceBorder rounded-full shadow-lg">
                {links.map((link, idx) => (
                    <button
                        key={idx}
                        onClick={link.action}
                        className="p-3 text-textMuted hover:text-botanical-burgundy hover:bg-botanical-yellow/10 rounded-full transition-all duration-300 relative group flex items-center justify-center hover:scale-110"
                        aria-label={link.label}
                    >
                        {link.icon}
                        {/* Tooltip */}
                        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-textMain text-white font-sans text-xs px-3 py-1.5 rounded shadow-xl whitespace-nowrap pointer-events-none">
                            {link.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FloatingDock;
