import React from 'react';
import { TrendingFactor } from '../types';

interface TrendFactorCardProps {
  trendingFactor: TrendingFactor;
}

const TrendFactorCard: React.FC<TrendFactorCardProps> = ({ trendingFactor }) => {
  if (!trendingFactor) {
    return null;
  }

  const Statistic: React.FC<{ label: string; value: string; valueColor?: string, align?: 'left' | 'right' }> = ({ label, value, valueColor = 'text-[#eaeaea]', align = 'left' }) => (
    <div className={`flex flex-col ${align === 'left' ? 'items-start' : 'items-end'}`}>
      <p className="text-neutral-500 text-xs">{label}</p>
      <p className={`font-semibold text-sm mt-0.5 ${valueColor}`}>{value}</p>
    </div>
  );

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-3">
        <Statistic label="Active Since" value={trendingFactor.daysPassed} align="left" />
        <Statistic label="Total Views" value={trendingFactor.totalViews} align="right" />
        <Statistic label="First Seen" value={trendingFactor.firstSeen} align="left" />
        <Statistic label="Growth" value={trendingFactor.growthRate} valueColor="text-green-500" align="right" />
      </div>
    </div>
  );
};

export default TrendFactorCard;