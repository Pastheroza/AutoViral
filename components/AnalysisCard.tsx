import React from 'react';
import { TrendData } from '../types';

interface AnalysisCardProps {
  /** The analysis object containing the summary and tag for the trend. */
  analysis: TrendData['analysis'];
}

/**
 * @component AnalysisCard
 * @description A card that displays a brief summary of the trend analysis. It is also
 * clickable, serving as the trigger to open the detailed analysis modal.
 */
const AnalysisCard: React.FC<AnalysisCardProps> = ({ analysis }) => {
  return (
    // The card is made interactive with cursor and scaling effects on click.
    <div className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform">
      <div>
        <p className="text-sm font-medium text-neutral-500">Trend Description</p>
        <div className="mt-3">
          {/* A colored tag to quickly categorize the trend (e.g., 'HOT', 'EVERGREEN'). */}
          <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${analysis.tagColor}`}>
            {analysis.tag}
          </span>
        </div>
        {/* A short summary of the trend analysis. */}
        <p className="text-[#eaeaea] text-base mt-3 leading-relaxed">
          {analysis.summary}
        </p>
      </div>
      {/* A call-to-action prompt for the user. */}
      <p className="text-center text-neutral-600 text-xs mt-4">
        Tap for detailed forecast
      </p>
    </div>
  );
};

export default AnalysisCard;
