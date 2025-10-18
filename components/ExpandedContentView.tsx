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
    <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide pt-20">
      {videos.map(video => (
        <div 
          key={video.id}
          className="h-full w-full flex-shrink-0 snap-start flex items-center justify-center p-4"
        >
          {/* Placeholder for a single video example */}
          <div 
            className="w-full h-5/6 rounded-lg bg-cover bg-center border border-neutral-700 flex items-end p-4"
            style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
          >
            <div className="bg-black/50 p-2 rounded-md">
                <p className="text-white font-semibold text-sm">by {video.creator}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandedContentView;