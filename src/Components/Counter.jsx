import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.5, // section is at least 50% visible
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="py-12 text-center">
        <h2 className="text-[24px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold text-[#0118D8] leading-tight mb-6 md:mb-6 text-center">
          What Restaurants Are Saying   
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Stat 1 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <div className="text-[#0118D8] text-3xl font-bold">
            <Counter from={0} to={32} suffix="%" trigger={inView} />
          </div>
          <p className="mt-2 text-gray-600">repeat orders in 3 weeks</p>
        </div>

        {/* Stat 2 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <div className="text-[#0118D8] text-3xl font-bold">
            <Counter from={0} to={58000} prefix="₹" trigger={inView} />
          </div>
          <p className="mt-2 text-gray-600">in new revenue from 1 Vibe campaign</p>
        </div>

        {/* Stat 3 */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <div className="text-[#0118D8] text-3xl font-bold">
            <Counter from={0} to={5} suffix=" hours" trigger={inView} />
          </div>
          <p className="mt-2 text-gray-600">saved weekly by Supplier Agent</p>
        </div>
      </div>
    </div>
  );
}
