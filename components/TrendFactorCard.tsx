import React, { useState } from 'react';
import { GrowthMetric } from '../types';
import { TrendingUpIcon, TrendingDownIcon } from './icons';

interface TrendFactorCardProps {
  growthMetrics: GrowthMetric[];
}

const TrendFactorCard: React.FC<TrendFactorCardProps> = ({ growthMetrics }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!growthMetrics || growthMetrics.length === 0) {
    return null;
  }
  
  const currentMetric = growthMetrics[activeIndex];
  const isPositive = currentMetric.changeType === 'positive';

  return (
    <div className="bg-[#1a1a1a] rounded-2xl py-3 px-4">
      <p className="text-sm font-medium text-neutral-500">Trending Factor</p>
      <div className="flex justify-between items-end mt-2">
        <div>
          <p className="text-3xl font-semibold text-[#eaeaea]">{currentMetric.value}</p>
          <p className="text-xl text-neutral-400 mt-1">{currentMetric.label}</p>
        </div>
        <div className="text-right flex items-center space-x-2">
          {isPositive ? (
             <TrendingUpIcon className={`w-7 h-7 text-green-500`} />
          ) : (
            <TrendingDownIcon className={`w-7 h-7 text-red-500`} />
          )}
          <p className={`text-lg font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{currentMetric.change.toFixed(1)}%
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-3">
        {growthMetrics.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${activeIndex === index ? 'bg-[#eaeaea]' : 'bg-[#555555]'}`}
            aria-label={`View metric ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TrendFactorCard;