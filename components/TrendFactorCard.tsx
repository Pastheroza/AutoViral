// components/TrendFactorCard.tsx
import React from 'react';
import { TrendingFactor } from '../types';

interface TrendFactorCardProps {
  /** The object containing the trend's key statistics. */
  trendingFactor: TrendingFactor;
}

/**
 * @component TrendFactorCard
 * @description A card component that displays key trend metrics in a 2x2 grid format
 * for quick, at-a-glance analysis.
 */
const TrendFactorCard: React.FC<TrendFactorCardProps> = ({ trendingFactor }) => {
  // Return null if no data is provided to prevent rendering errors.
  if (!trendingFactor) {
    return null;
  }

  /**
   * @component Statistic
   * @description A small, reusable component to display a single statistic with a label and value.
   */
  const Statistic: React.FC<{ label: string; value: string; valueColor?: string, align?: 'left' | 'right' }> = ({ label, value, valueColor = 'text-[#eaeaea]', align = 'left' }) => (
    <div className={`flex flex-col ${align === 'left' ? 'items-start' : 'items-end'}`}>
      <p className="text-neutral-500 text-xs">{label}</p>
      <p className={`font-semibold text-sm mt-0.5 ${valueColor}`}>{value}</p>
    </div>
  );

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-4">
      {/* The 2x2 grid layout for displaying the four key metrics. */}
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-3">
        <Statistic label="Active Since" value={trendingFactor.daysPassed} align="left" />
        <Statistic label="Total Views" value={trendingFactor.totalViews} align="right" />
        <Statistic label="First Seen" value={trendingFactor.firstSeen} align="left" />
        <Statistic label="Hourly Growth" value={`+${trendingFactor.growthPercentage}%`} valueColor="text-green-500" align="right" />
      </div>
    </div>
  );
};

export default TrendFactorCard;