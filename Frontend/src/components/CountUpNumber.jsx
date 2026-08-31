import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

const CountUpNumber = ({ end, duration = 2.5, prefix = '', suffix = '', decimals = 0, label, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`flex flex-col items-center ${className}`}>
      <div className="text-4xl font-heading font-bold text-accent mb-2">
        {isInView ? (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            separator=","
          />
        ) : (
          <span>{prefix}0{suffix}</span>
        )}
      </div>
      {label && <span className="text-sm uppercase tracking-widest text-light/70">{label}</span>}
    </div>
  );
};

export default CountUpNumber;
