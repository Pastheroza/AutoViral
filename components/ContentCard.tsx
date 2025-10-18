import React from 'react';

interface ContentCardProps {
  imageUrl: string;
  title: string;
  /** Boolean to control the expanded state styling. */
  isExpanded: boolean;
  /** Children to be rendered inside the card, used for the expanded view. */
  children?: React.ReactNode;
}

/**
 * @component ContentCard
 * @description Displays the primary visual content. Now supports an `isExpanded` state
 * to grow and contain the example video feed.
 */
const ContentCard: React.FC<ContentCardProps> = ({ imageUrl, title, isExpanded, children }) => {
  return (
    <div 
      className={`rounded-2xl bg-cover bg-center flex flex-col justify-end text-[#eaeaea] relative overflow-hidden transition-[height] duration-500 ease-in-out ${isExpanded ? 'h-full cursor-default' : 'h-60 cursor-pointer'}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Gradient is adjusted in expanded mode */}
      <div className={`absolute inset-0 bg-gradient-to-t ${isExpanded ? 'from-black/90 via-black/50 to-black/20' : 'from-black/80 via-black/40 to-transparent'}`}></div>
      
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Render children (ExpandedContentView) if they exist */}
        {children && <div className="flex-grow h-0">{children}</div>}

        {/* Title is positioned at the bottom */}
        <div className="p-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;