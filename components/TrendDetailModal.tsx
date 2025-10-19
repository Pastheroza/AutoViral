import React from 'react';
import { TrendData } from '../types';
import ClickableHashtag from './ClickableHashtag';
import ClickableCreator from './ClickableCreator';

interface TrendDetailModalProps {
  trend: TrendData;
  onClose: () => void;
}

const TrendDetailModal: React.FC<TrendDetailModalProps> = ({ trend, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{trend.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Main Image - Clickable */}
          <div className="mb-4">
            <img 
              src={trend.imageUrl}
              alt={trend.title}
              className="w-full h-64 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => window.open(trend.imageUrl, '_blank')}
              title="Click to view full image"
            />
          </div>

          {/* Analysis */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-2">Analysis</h3>
            <p className="text-gray-300">{trend.analysis.summary}</p>
          </div>

          {/* Detailed Analysis */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-2">Details</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-400">About:</span> <span className="text-gray-300">{trend.detailedAnalysis.about}</span></p>
              <p><span className="text-gray-400">Audience:</span> <span className="text-gray-300">{trend.detailedAnalysis.audience}</span></p>
              <p><span className="text-gray-400">Versatility:</span> <span className="text-gray-300">{trend.detailedAnalysis.versatility}</span></p>
            </div>
          </div>

          {/* Enhanced Data */}
          {trend.enhancedData && (
            <>
              {/* Related Hashtags */}
              {trend.enhancedData.analysis && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">Related Hashtags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['#trending', '#viral', '#content', '#creator'].map((hashtag) => (
                      <ClickableHashtag 
                        key={hashtag}
                        hashtag={hashtag}
                        className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-full cursor-pointer transition-colors"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Example Posts */}
              {trend.enhancedData.examplePosts && trend.enhancedData.examplePosts.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">Example Posts</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {trend.enhancedData.examplePosts.map((post, idx) => (
                      <div key={idx} className="bg-[#2a2a2a] rounded p-3">
                        <div className="flex items-start space-x-3">
                          {/* Post Thumbnail - Clickable */}
                          <img 
                            src={post.thumbnailUrl}
                            alt={post.creator}
                            className="w-16 h-16 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => window.open(post.postUrl, '_blank')}
                            title="Click to view post"
                          />
                          <div className="flex-1">
                            {/* Creator - Clickable */}
                            <ClickableCreator 
                              creator={post.creator}
                              className="font-bold text-purple-400 hover:text-purple-300 cursor-pointer"
                            />
                            {post.caption && (
                              <p className="text-gray-300 text-sm mt-1">{post.caption}</p>
                            )}
                            <div className="flex space-x-4 mt-2 text-xs text-gray-400">
                              {post.likes && <span>❤️ {post.likes.toLocaleString()}</span>}
                              {post.views && <span>👁️ {post.views.toLocaleString()}</span>}
                            </div>
                          </div>
                          {/* View Post Button */}
                          <button
                            onClick={() => window.open(post.postUrl, '_blank')}
                            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded"
                          >
                            View →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Example Videos */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-2">Example Content</h3>
            <div className="grid grid-cols-3 gap-3">
              {trend.exampleVideos.map((video) => (
                <div key={video.id} className="text-center">
                  {/* Video Thumbnail - Clickable */}
                  <img 
                    src={video.thumbnailUrl}
                    alt={video.creator}
                    className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => window.open(video.thumbnailUrl, '_blank')}
                    title="Click to view content"
                  />
                  {/* Creator - Clickable */}
                  <ClickableCreator 
                    creator={video.creator}
                    className="text-xs text-purple-400 hover:text-purple-300 cursor-pointer mt-1 block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendDetailModal;
