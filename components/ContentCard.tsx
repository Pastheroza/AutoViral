import React from 'react';

interface ContentCardProps {
  /** The URL of the background image for the card. */
  imageUrl: string;
  /** The main title of the trend. */
  title: string;
}

/**
 * @component ContentCard
 * @description Displays the primary visual content for a trend, including a background image
 * and the trend's title overlaid with a gradient for better text visibility.
 */
const ContentCard: React.FC<ContentCardProps> = ({ imageUrl, title }) => {
  return (
    <div 
      className="rounded-2xl h-60 bg-cover bg-center flex flex-col justify-end p-4 text-[#eaeaea] relative overflow-hidden" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Gradient overlay to ensure the text is readable against various backgrounds. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Content container for the title. */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default ContentCard;
