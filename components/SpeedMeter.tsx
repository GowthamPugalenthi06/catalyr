import React, { useState, useEffect } from 'react';

interface SpeedMeterProps {
    className?: string;
}

const SpeedMeter: React.FC<SpeedMeterProps> = ({ className = '' }) => {
    const [loadTime, setLoadTime] = useState<number | null>(null);

    useEffect(() => {
        // Calculate page load time
        const calculateLoadTime = () => {
            if (window.performance) {
                const perfData = window.performance.timing;
                const pageLoadTime = (perfData.loadEventEnd - perfData.navigationStart) / 1000;

                if (pageLoadTime > 0) {
                    setLoadTime(pageLoadTime);
                }
            }
        };

        // Wait for page to fully load
        if (document.readyState === 'complete') {
            calculateLoadTime();
        } else {
            window.addEventListener('load', calculateLoadTime);
            return () => window.removeEventListener('load', calculateLoadTime);
        }
    }, []);

    if (!loadTime) {
        return null;
    }

    return (
        <div className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 ${className}`}>
            <div className="bg-black text-white border-2 border-white rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Load Time
                        </span>
                        <div className="flex items-baseline space-x-1">
                            <span className="text-xl md:text-2xl font-extrabold">
                                {loadTime.toFixed(2)}s
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/20"></div>
                    <div className="hidden md:block text-xs text-gray-300 max-w-[140px] leading-tight">
                        We can do the same for yours.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedMeter;
