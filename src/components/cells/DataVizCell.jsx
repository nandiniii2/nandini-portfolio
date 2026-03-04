import React from 'react';
import { Network } from 'lucide-react';

const DataVizCell = () => {
    return (
        <div className="bento-card bg-surfaceLight/50 h-full p-0 overflow-hidden relative group">
            {/* Decorative gradient blob */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-600/20 blur-[80px] rounded-full group-hover:bg-primary-500/30 transition-colors duration-700" />

            <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 text-slate-400 font-mono text-sm mb-6">
                    <Network size={16} className="text-primary-500" />
                    <span>Data Infrastructure</span>
                </div>

                <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                        Scalable Pipelines & <br />Predictive Models
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Architecting distributed systems and optimizing complex datasets using PySpark, AWS, and modern machine learning frameworks.
                    </p>
                </div>
            </div>

            {/* Abstract Grid Graphic */}
            <svg className="absolute top-0 right-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.2)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />

                {/* Animated connecting line */}
                <path d="M 50 150 Q 150 50 250 150 T 450 150" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="2" className="stroke-dasharray" strokeDasharray="10 10">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
                </path>
                <circle cx="50" cy="150" r="4" fill="#38bdf8" />
                <circle cx="250" cy="150" r="6" fill="#0284c7" className="animate-pulse" />
                <circle cx="450" cy="150" r="4" fill="#38bdf8" />
            </svg>
        </div>
    );
};

export default DataVizCell;
