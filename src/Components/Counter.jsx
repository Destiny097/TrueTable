import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// This Counter component provides the smooth counting animation effect
function Counter({ from = 0, to, duration = 2000, prefix = "", suffix = "", trigger }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!trigger) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * (to - from) + from);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [trigger, from, to, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// The StatsSection component designed to display achievements
export default function StatsSection() {
  const { ref, inView } = useInView({
    // Triggers the animation when the section is at least 20% visible
    threshold: 0.2, 
    triggerOnce: true,
  });

  // Define a reusable component for each statistic block with responsive dividers
  const StatBlock = ({ to, label, prefix = "", suffix = "", isLast = false }) => (
    <div className={`flex flex-col items-center justify-center p-4 md:p-8 text-center
                     // Only show vertical divider on medium screens and up
                     md:border-r border-gray-600 ${isLast ? 'md:border-r-0' : ''}`}>
      <div className="text-[#E9DFC3] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
        <Counter 
            from={0} 
            to={to} 
            prefix={prefix} 
            suffix={suffix} 
            duration={2000} 
            trigger={inView} 
        />
      </div>
      <p className="text-white text-base md:text-lg font-light text-center">
        {label}
      </p>
    </div>
  );

  return (
    <div ref={ref} className="py-16 md:py-18 bg-[#0118D8] text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E9DFC3] mb-10 md:mb-16">
          Our Achievement
        </h2>

      {/* Grid: Stacks items on mobile (1 column) and displays them side-by-side on desktop (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-4 py-6">
        
        {/* Stat 1 */}
        <StatBlock 
            to={32} 
            suffix="%" 
            label="Repeated orders in 3 Weeks" 
        />

        {/* Stat 2 */}
        <StatBlock 
            to={58000} 
            prefix="₹" 
            label="In revenue from Ad Campaign" 
        />

        {/* Stat 3 (Last item - border-r is disabled on desktop) */}
        <StatBlock 
            to={5} 
            suffix=" Hours" 
            label="Saved Weekly" 
            isLast={true} 
        />
      </div>
    </div>
  );
}