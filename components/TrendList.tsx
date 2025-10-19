import React, { useState } from 'react';
import { TrendData } from '../types';
import TrendActions from './TrendActions';
import TrendDetailModal from './TrendDetailModal';
import ClickableHashtag from './ClickableHashtag';
import ClickableCreator from './ClickableCreator';

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
  const [selectedTrend, setSelectedTrend] = useState<TrendData | null>(null);

  const openTrendDetail = (trend: TrendData) => {
    setSelectedTrend(trend);
  };

  return (
    <>
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
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition-colors">
                {/* Trend Image - Clickable */}
                <div className="relative h-64 cursor-pointer" onClick={() => openTrendDetail(trend)}>
                  <img 
                    src={trend.imageUrl} 
                    alt={trend.title}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
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
                  {/* Click to expand overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-3 py-1 rounded">
                      Click to view details
                    </span>
                  </div>
                </div>
                
                {/* Trend Info */}
                <div className="p-4">
                  {/* Title - Clickable */}
                  <h3 
                    className="text-lg font-bold text-white mb-2 cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={() => openTrendDetail(trend)}
                  >
                    {trend.title}
                  </h3>
                  
                  {/* Summary with clickable hashtags */}
                  <div className="text-gray-300 text-sm mb-3">
                    {trend.analysis.summary.split(' ').map((word, idx) => 
                      word.startsWith('#') ? (
                        <React.Fragment key={idx}>
                          <ClickableHashtag hashtag={word} />
                          {' '}
                        </React.Fragment>
                      ) : (
                        <span key={idx}>{word} </span>
                      )
                    )}
                  </div>
                  
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
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
                          >
                            <img 
                              src={post.thumbnailUrl} 
                              alt={post.creator}
                              className="w-full h-16 object-cover rounded cursor-pointer"
                              title="Click to view post"
                            />
                            <ClickableCreator 
                              creator={post.creator}
                              className="text-xs text-purple-400 hover:text-purple-300 cursor-pointer mt-1 block"
                            />
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
                            className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => window.open(video.thumbnailUrl, '_blank')}
                            title="Click to view content"
                          />
                          <ClickableCreator 
                            creator={video.creator}
                            className="text-xs text-purple-400 hover:text-purple-300 cursor-pointer mt-1 block"
                          />
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

      {/* Trend Detail Modal */}
      {selectedTrend && (
        <TrendDetailModal 
          trend={selectedTrend}
          onClose={() => setSelectedTrend(null)}
        />
      )}
    </>
  );
};

export default TrendList;
