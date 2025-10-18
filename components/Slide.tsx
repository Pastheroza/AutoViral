import React, { useState } from 'react';
import { TrendData } from '../types';
import ContentCard from './ContentCard';
import TrendFactorCard from './TrendFactorCard';
import AnalysisCard from './AnalysisCard';
import DetailsModal from './DetailsModal';
import ExpandedContentView from './ExpandedContentView';

interface SlideProps {
  data: TrendData;
  /** A boolean indicating if this slide's content view should be expanded. */
  isExpanded: boolean;
  /** A callback function to toggle the expanded state. */
  onToggleExpand: () => void;
}

/**
 * @component Slide
 * @description A full-screen component for a single trend. It now manages the transition
 * between the compact summary view and the full-screen expanded content view.
 */
const Slide: React.FC<SlideProps> = ({ data, isExpanded, onToggleExpand }) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  return (
    <div className="h-full w-full flex-shrink-0 bg-[#0f0f0f] text-[#eaeaea] flex flex-col p-4 pt-28 snap-start relative overflow-hidden">
      
      {/* The main content card, now with an onClick to expand it. */}
      <div 
        className={`transition-all duration-500 ease-in-out ${isExpanded ? 'flex-grow' : ''}`}
        onClick={!isExpanded ? onToggleExpand : undefined}
      >
        <ContentCard
          imageUrl={data.imageUrl}
          title={data.title}
          isExpanded={isExpanded}
        >
           {/* The expanded view with example videos is rendered inside the ContentCard */}
           {isExpanded && <ExpandedContentView videos={data.exampleVideos} />}
        </ContentCard>
      </div>

      {/* These cards are hidden when the content view is expanded. */}
      <div className={`transition-all duration-500 ease-in-out space-y-4 ${isExpanded ? 'opacity-0 -translate-y-full absolute' : 'opacity-100 translate-y-0 mt-4'}`}>
        <TrendFactorCard trendingFactor={data.trendingFactor} />
        <div onClick={() => setIsDetailsModalOpen(true)}>
          <AnalysisCard analysis={data.analysis} />
        </div>
      </div>
      
       {!isExpanded && (
         <div className="w-full flex justify-center pt-4 pb-2">
           <div className="w-32 h-1.5 bg-neutral-800 rounded-full"></div>
        </div>
       )}

      {isDetailsModalOpen && (
        <DetailsModal 
          analysis={data.detailedAnalysis} 
          onClose={() => setIsDetailsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Slide;