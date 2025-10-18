// components/ExpandedContentView.tsx
import React from 'react';
import { ExampleVideo } from '../types';

interface ExpandedContentViewProps {
  /** An array of example videos to display. */
  videos: ExampleVideo[];
}

/**
 * @component ExpandedContentView
 * @description Renders a vertically scrollable feed of example videos.
 * This view is shown inside the expanded ContentCard.
 */
const ExpandedContentView: React.FC<ExpandedContentViewProps> = ({ videos }) => {
  return (
    // This container enables the vertical, TikTok-style scrolling for the examples.
    // The `pt-20` provides space for the fixed header.
    <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide pt-20">
      {videos.map(video => (
        // Each video slide is a full-height container with the thumbnail as a background.
        // This creates the immersive, TikTok-style feed.
        <div 
          key={video.id}
          className="h-full w-full flex-shrink-0 snap-start relative flex flex-col justify-end bg-cover bg-center"
          style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
        >
          {/* Gradient overlay to ensure text is readable against various backgrounds. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Creator tag is positioned at the bottom of the slide. */}
          <div className="relative z-10 p-4">
            <div className="bg-black/50 p-2 rounded-xl inline-block">
              <p className="text-white font-semibold text-sm">by {video.creator}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandedContentView;