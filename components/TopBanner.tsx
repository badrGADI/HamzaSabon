import React from 'react';
import { PROMO_MESSAGES } from '../constants';

const TopBanner: React.FC = () => {
  // Quadruple the messages for a very long smooth loop
  const displayMessages = [...PROMO_MESSAGES, ...PROMO_MESSAGES, ...PROMO_MESSAGES, ...PROMO_MESSAGES];

  return (
    <div className="bg-primary text-secondary text-[10px] md:text-xs py-2.5 overflow-hidden relative z-50">
      <div className="whitespace-nowrap animate-marquee flex items-center w-max">
        {displayMessages.map((msg, idx) => (
          <span key={idx} className="uppercase tracking-widest font-medium px-8 md:px-12 opacity-90">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;