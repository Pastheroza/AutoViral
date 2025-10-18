import React from 'react';
import { TrendData } from '../types';

interface AnalysisCardProps {
  analysis: TrendData['analysis'];
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ analysis }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-4 flex flex-col justify-between">
      <div>
        <p className="text-sm font-medium text-neutral-500">Trend Description</p>
        <div className="mt-3">
          <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${analysis.tagColor}`}>
            {analysis.tag}
          </span>
        </div>
        <p className="text-[#eaeaea] text-base mt-3 leading-relaxed">
          {analysis.summary}
        </p>
      </div>
      <p className="text-center text-neutral-600 text-xs mt-4">
        Tap for detailed forecast
      </p>
    </div>
  );
};

export default AnalysisCard;