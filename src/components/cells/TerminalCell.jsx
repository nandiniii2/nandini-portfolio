import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const TerminalCell = () => {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState('');

    const bootSequence = [
        { text: "> System initialized.", delay: 800 },
        { text: "> Loading Nandini.exe...", delay: 1200 },
        { text: "> Injecting dependencies: React, Python, ML", delay: 900 },
        { text: "> Status: System Online.", delay: 0 }
    ];

    useEffect(() => {
        let isMounted = true;
        let lineIdx = 0;
        let charIdx = 0;
        let timer;

        const typeNextChar = () => {
            if (!isMounted) return;
            if (lineIdx >= bootSequence.length) return;

            const currentObj = bootSequence[lineIdx];

            if (charIdx < currentObj.text.length) {
                // Type next character
                setCurrentLine(currentObj.text.slice(0, charIdx + 1));
                charIdx++;
                timer = setTimeout(typeNextChar, Math.random() * 30 + 20); // 20-50ms per char
            } else {
                // Line finished
                setLines(prev => [...prev, currentObj.text]);
                setCurrentLine('');
                lineIdx++;
                charIdx = 0;

                // Wait before next line starts
                if (lineIdx < bootSequence.length) {
                    timer = setTimeout(typeNextChar, currentObj.delay);
                }
            }
        };

        timer = setTimeout(typeNextChar, 500);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="bento-card bg-[#0A0A0A] border-slate-800 h-full flex flex-col font-mono text-sm relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-transparent opacity-50 group-hover:opacity-100 transition-opacity z-10" />

            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4 relative z-10 shrink-0">
                <div className="flex items-center gap-2 text-slate-500">
                    <Terminal size={14} />
                    <span>system.log</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
            </div>

            <div className="text-primary-400 leading-relaxed flex-1 flex flex-col justify-end relative z-10">
                {lines.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
                <div>
                    {currentLine}
                    <span className="animate-pulse inline-block w-2 h-4 bg-primary-400 ml-1 translate-y-0.5" />
                </div>
            </div>
        </div>
    );
};

export default TerminalCell;
