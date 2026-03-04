import React from 'react';
import { ArrowUpRight, Github, Linkedin, FileText } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const ContactCell = () => {
    return (
        <div className="bento-card h-full flex flex-col justify-between group hover:border-primary-500/50 transition-colors cursor-pointer" onClick={() => window.open(resumeData.contact.linkedin, '_blank')}>
            <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center border border-primary-500/30 group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={24} />
                </div>
                <div className="flex gap-2 text-slate-500">
                    <Github size={18} className="hover:text-white transition-colors" />
                    <Linkedin size={18} className="hover:text-[#0A66C2] transition-colors" />
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-white mb-2">Connect with me</h3>
                <p className="text-sm text-slate-400 max-w-[200px]">
                    Always open to discussing engineering systems or data science opportunities.
                </p>
            </div>
        </div>
    );
};

export default ContactCell;
