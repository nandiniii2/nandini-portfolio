import React from 'react';
import { resumeData } from '../../data/resumeData';

const StatsCell = () => {
    return (
        <div className="bento-card h-full flex flex-col justify-center gap-6 bg-primary-900/10 hover:bg-primary-900/20 transition-colors">
            {resumeData.metrics.map((metric, i) => (
                <div key={metric.label} className="relative">
                    {i !== 0 && <div className="absolute -top-3 left-0 w-8 h-[1px] bg-white/10" />}
                    <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                        {metric.value}
                    </div>
                    <div className="text-xs font-mono text-primary-400 mt-1 uppercase tracking-wider">
                        {metric.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCell;
