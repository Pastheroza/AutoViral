import React from 'react';
import { TrendData } from '../types';

interface TrendListProps {
  trends: TrendData[];
}

const generatePlatformLink = (keyword: string, source: string): string => {
  const cleanKeyword = encodeURIComponent(keyword);
  switch (source) {
    case 'instagram':
      return `https://www.instagram.com/explore/tags/${keyword.replace('#', '')}/`;
    case 'x':
      return `https://x.com/search?q=${cleanKeyword}`;
    case 'reddit':
      return `https://www.reddit.com/search/?q=${cleanKeyword}`;
    default:
      return `https://www.google.com/search?q=${cleanKeyword}`;
  }
};

const TrendList: React.FC<TrendListProps> = ({ trends }) => {
  return (
    <div className="h-full overflow-y-auto pt-20 pb-4">
      {trends.map((trend) => (
        <div key={trend.id} className="mb-4 mx-4">
          <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
            {/* Trend Image */}
            <div className="relative h-64">
              <img 
                src={trend.imageUrl} 
                alt={trend.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded text-xs font-bold text-white ${trend.analysis.tagColor}`}>
                  {trend.analysis.tag}
                </span>
              </div>
            </div>
            
            {/* Trend Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">{trend.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{trend.analysis.summary}</p>
              
              {/* Stats Row */}
              <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                <span>{trend.trendingFactor.totalViews}</span>
                <span>{trend.trendingFactor.daysPassed}</span>
                <span className="text-green-400">+{trend.trendingFactor.growthPercentage}%</span>
              </div>

              {/* Platform Link */}
              <div className="mb-3">
                <a 
                  href={generatePlatformLink(trend.title.split(' ')[0], 'instagram')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-full transition-colors"
                >
                  View on Instagram →
                </a>
              </div>
              
              {/* Example Videos */}
              <div className="flex space-x-2">
                {trend.exampleVideos.slice(0, 3).map((video) => (
                  <div key={video.id} className="flex-1">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.creator}
                      className="w-full h-16 object-cover rounded"
                    />
                    <p className="text-xs text-gray-400 mt-1">{video.creator}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendList;
