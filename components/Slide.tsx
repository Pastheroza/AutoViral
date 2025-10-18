import React, { useState } from 'react';
import { TrendData } from '../types';
import Header from './Header';
import ContentCard from './ContentCard';
import TrendFactorCard from './TrendFactorCard';
import AnalysisCard from './AnalysisCard';
import DetailsModal from './DetailsModal';

interface SlideProps {
  /** The data object for the trend to be displayed in this slide. */
  data: TrendData;
}

/**
 * @component Slide
 * @description A full-screen component that displays all the information for a single trend.
 * It acts as a container for the Header, ContentCard, TrendFactorCard, and AnalysisCard.
 * It also manages the state for the details modal.
 */
const Slide: React.FC<SlideProps> = ({ data }) => {
  // State to control the visibility of the detailed analysis modal.
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Main container for a single slide, configured for CSS snap scrolling.
    <div className="h-full w-full flex-shrink-0 bg-[#0f0f0f] text-[#eaeaea] flex flex-col p-4 pt-28 snap-start relative">
      <Header />

      {/* Main content area */}
      <div className="flex flex-col space-y-4 flex-grow">
        <ContentCard 
          imageUrl={data.imageUrl}
          title={data.title}
        />
        <TrendFactorCard trendingFactor={data.trendingFactor} />
        {/* The AnalysisCard is clickable to open the details modal. */}
        <div onClick={() => setIsModalOpen(true)}>
          <AnalysisCard analysis={data.analysis} />
        </div>
      </div>

      {/* Visual home indicator at the bottom of the slide. */}
       <div className="w-full flex justify-center pt-4 pb-2">
         <div className="w-32 h-1.5 bg-neutral-800 rounded-full"></div>
      </div>

      {/* Conditionally render the DetailsModal when isModalOpen is true. */}
      {isModalOpen && (
        <DetailsModal 
          analysis={data.detailedAnalysis} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Slide;
