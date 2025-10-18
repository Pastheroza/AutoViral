import React from 'react';
import { TrendData } from '../types';
import Header from './Header';
import ContentCard from './ContentCard';
import TrendFactorCard from './TrendFactorCard';
import AnalysisCard from './AnalysisCard';

interface SlideProps {
  data: TrendData;
}

const Slide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="h-full w-full flex-shrink-0 bg-[#0f0f0f] text-[#eaeaea] flex flex-col p-4 pt-28 snap-start">
      <Header />
      <div className="flex flex-col space-y-4 flex-grow">
        <ContentCard 
          imageUrl={data.imageUrl}
          source={data.source}
          timestamp={data.timestamp}
          title={data.title}
          description={data.description}
        />
        <TrendFactorCard growthMetrics={data.growthMetrics} />
        <AnalysisCard analysis={data.analysis} />
      </div>
       <div className="w-full flex justify-center pt-4 pb-2">
         <div className="w-32 h-1.5 bg-neutral-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default Slide;