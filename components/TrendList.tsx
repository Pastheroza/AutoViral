import React from 'react';
import { TrendData } from '../types';
import TrendActions from './TrendActions';

interface TrendListProps {
  trends: TrendData[];
  onTrendStopped?: () => void;
}

interface EnhancedTrendData extends TrendData {
  enhancedData?: {
    examplePosts?: Array<{
      creator: string;
      thumbnailUrl: string;
      postUrl: string;
      likes?: number;
      views?: number;
      caption?: string;
    }>;
    platformData?: {
      instagram?: {
        hashtagUrl: string;
        postCount?: number;
        avgEngagement?: number;
      };
      tiktok?: {
        hashtagUrl: string;
        postCount?: number;
        avgEngagement?: number;
      };
    };
    analysis?: {
      category?: string;
      difficulty?: string;
      bestTimes?: string[];
    };
  };
}

const TrendList: React.FC<TrendListProps> = ({ trends, onTrendStopped }) => {
  return (
    <div className="h-full overflow-y-auto pb-4">
      {trends.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div>
            <p>No trends found</p>
            <p className="text-sm">Try adjusting your filters</p>
          </div>
        </div>
      ) : (
        trends.map((trend: EnhancedTrendData) => (
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
                {/* Category and Difficulty */}
                {trend.enhancedData?.analysis && (
                  <div className="absolute top-3 right-3 flex space-x-1">
                    {trend.enhancedData.analysis.category && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                        {trend.enhancedData.analysis.category}
                      </span>
                    )}
                    {trend.enhancedData.analysis.difficulty && (
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">
                        {trend.enhancedData.analysis.difficulty}
                      </span>
                    )}
                  </div>
                )}
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

                {/* Platform Links */}
                <div className="mb-3 flex space-x-2">
                  {trend.enhancedData?.platformData?.instagram && (
                    <a 
                      href={trend.enhancedData.platformData.instagram.hashtagUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white text-xs rounded-full transition-colors"
                    >
                      Instagram ({trend.enhancedData.platformData.instagram.postCount || 0}) →
                    </a>
                  )}
                  {trend.enhancedData?.platformData?.tiktok && (
                    <a 
                      href={trend.enhancedData.platformData.tiktok.hashtagUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-black hover:bg-gray-800 text-white text-xs rounded-full transition-colors"
                    >
                      TikTok ({trend.enhancedData.platformData.tiktok.postCount || 0}) →
                    </a>
                  )}
                </div>

                {/* Best Times */}
                {trend.enhancedData?.analysis?.bestTimes && (
                  <div className="mb-3">
                    <span className="text-xs text-gray-400">Best times: </span>
                    <span className="text-xs text-green-400">
                      {trend.enhancedData.analysis.bestTimes.join(', ')}
                    </span>
                  </div>
                )}

                {/* Trend Actions */}
                <TrendActions 
                  trendId={trend.id.toString()}
                  keyword={trend.title.split(' ')[0]}
                  onTrendStopped={onTrendStopped}
                />
                
                {/* Example Posts - Use enhanced data if available */}
                <div className="flex space-x-2 mt-3">
                  {trend.enhancedData?.examplePosts?.length > 0 ? (
                    trend.enhancedData.examplePosts.slice(0, 3).map((post, idx) => (
                      <div key={idx} className="flex-1">
                        <a 
                          href={post.postUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block hover:opacity-80 transition-opacity"
                        >
                          <img 
                            src={post.thumbnailUrl} 
                            alt={post.creator}
                            className="w-full h-16 object-cover rounded"
                          />
                          <p className="text-xs text-gray-400 mt-1">{post.creator}</p>
                          {post.likes && (
                            <p className="text-xs text-green-400">❤️ {post.likes.toLocaleString()}</p>
                          )}
                        </a>
                      </div>
                    ))
                  ) : (
                    // Fallback to original example videos
                    trend.exampleVideos.slice(0, 3).map((video) => (
                      <div key={video.id} className="flex-1">
                        <img 
                          src={video.thumbnailUrl} 
                          alt={video.creator}
                          className="w-full h-16 object-cover rounded"
                        />
                        <p className="text-xs text-gray-400 mt-1">{video.creator}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TrendList;
