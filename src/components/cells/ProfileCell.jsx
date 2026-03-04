import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const ProfileCell = () => {
    return (
        <div className="bento-card h-full flex flex-col group p-6 md:p-8">
            <div>
                <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm font-mono">
                    <MapPin size={14} className="text-primary-500" />
                    <span>United States</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-5xl font-black mb-4 tracking-tight leading-[1.1]">
                    {resumeData.name}.
                    <br />
                    <span className="text-slate-500 font-light text-3xl md:text-4xl lg:text-4xl mt-3 block">
                        Software Engineer<br />
                        <span className="text-primary-500">& Data Scientist</span>
                    </span>
                </h1>

                <p className="text-slate-300 text-sm md:text-base font-light max-w-lg mt-6 leading-relaxed">
                    {resumeData.shortBio}
                </p>
                <p className="text-slate-500 text-sm font-medium max-w-lg mt-3 leading-relaxed">
                    {resumeData.longBio}
                </p>
            </div>

            <div className="mt-6 flex items-center justify-end">
                {/* Decorative elements to anchor the bottom */}
                <div className="hidden sm:flex gap-1.5 opacity-50">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    ))}
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default ProfileCell;
