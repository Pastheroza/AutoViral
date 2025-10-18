import React from 'react';

interface ContentCardProps {
  imageUrl: string;
  source: string;
  timestamp: string;
  title: string;
  description: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ imageUrl, source, timestamp, title, description }) => {
  return (
    <div 
      className="rounded-2xl h-60 bg-cover bg-center flex flex-col justify-end p-4 text-[#eaeaea] relative overflow-hidden" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center text-xs text-neutral-400">
          <p className="font-bold tracking-wider uppercase text-neutral-300">{source}</p>
          <p>{timestamp}</p>
        </div>
        <h2 className="text-2xl font-bold mt-2">{title}</h2>
        <p className="text-sm text-neutral-400 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;