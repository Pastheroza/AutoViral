import React, { useState, useEffect } from 'react';
import { TrendData } from './types';
import TrendList from './components/TrendList';
import TrendFilters from './components/TrendFilters';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import ApiStatus from './components/ApiStatus';
import { api, TrendsQuery } from './services/api';

const API_URL = 'https://viral.biaz.hurated.com';

// Convert API trend to TrendData format
const convertApiTrend = (apiTrend: any, index: number): TrendData => {
  if (!apiTrend || !apiTrend.keyword) {
    throw new Error('Invalid trend data');
  }
  
  const daysPassed = Math.floor((Date.now() - new Date(apiTrend.discoveredAt).getTime()) / (1000 * 60 * 60 * 24));
  const views = apiTrend.metadata?.postCount || 1000;
  const keyword = apiTrend.keyword || '#Unknown';
  const cleanKeyword = keyword.replace(/[#@]/g, '').toLowerCase();
  
  // Use real thumbnail if available, otherwise generate placeholder
  const imageUrl = apiTrend.thumbnailUrl || `https://picsum.photos/seed/${cleanKeyword}/800/600`;
  
  // Use real example posts if available, otherwise generate placeholders
  const exampleVideos = apiTrend.examplePosts?.length > 0 
    ? apiTrend.examplePosts.map((post: any, idx: number) => ({
        id: idx + 1,
        creator: post.creator || '@unknown',
        thumbnailUrl: post.thumbnailUrl || `https://picsum.photos/seed/${cleanKeyword}${idx}/400/600`
      }))
    : [
        { id: 1, creator: '@trending_creator', thumbnailUrl: `https://picsum.photos/seed/${cleanKeyword}1/400/600` },
        { id: 2, creator: '@viral_content', thumbnailUrl: `https://picsum.photos/seed/${cleanKeyword}2/400/600` },
        { id: 3, creator: '@trend_setter', thumbnailUrl: `https://picsum.photos/seed/${cleanKeyword}3/400/600` },
      ];
  
  return {
    id: index + 1,
    title: `${keyword} Trend Analysis`,
    imageUrl,
    exampleVideos,
    trendingFactor: {
      daysPassed: daysPassed === 0 ? 'Today' : `${daysPassed} days ago`,
      totalViews: `${Math.floor(views / 1000)}K+ Views`,
      firstSeen: apiTrend.discoveredAt?.split('T')[0] || '2025-10-18',
      growthPercentage: apiTrend.score || 0
    },
    analysis: {
      tag: apiTrend.metadata?.velocity === 'very-fast' ? 'HOT' : 'TRENDING',
      tagColor: apiTrend.metadata?.velocity === 'very-fast' ? 'bg-red-500' : 'bg-orange-500',
      summary: `${keyword} is ${apiTrend.status || 'trending'} with ${apiTrend.metadata?.engagement || 'good'} engagement. ${apiTrend.reason || 'Growing trend'}.`
    },
    detailedAnalysis: {
      about: `${keyword} is currently trending on ${apiTrend.source || 'social media'} with a score of ${apiTrend.score || 0}. This trend has ${apiTrend.metadata?.postCount || 0} posts and is growing at ${apiTrend.metadata?.velocity || 'moderate'} velocity.`,
      audience: `Primary audience engaging with ${keyword} shows ${apiTrend.metadata?.engagement || 'moderate'} engagement levels. Recent posts: ${apiTrend.metadata?.recentPosts || 0}.`,
      versatility: `This trend can be adapted across multiple content types. Related hashtags: ${apiTrend.metadata?.hashtags?.join(', ') || 'Various trending tags'}.`
    },
    enhancedData: {
      examplePosts: apiTrend.examplePosts || [],
      platformData: apiTrend.platformData || {},
      analysis: apiTrend.analysis || {}
    }
  };
};

const App: React.FC = () => {
  const [trends, setTrends] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [filters, setFilters] = useState<TrendsQuery>({ limit: 10 });
  const [showFilters, setShowFilters] = useState(false);

  // Fetch trends from API using the service
  const fetchTrends = async (query: TrendsQuery = filters) => {
    try {
      setLoading(true);
      const data = await api.getTrends(query);
      
      if (data.trends && Array.isArray(data.trends) && data.trends.length > 0) {
        const convertedTrends = data.trends.map(convertApiTrend);
        setTrends(convertedTrends);
        setError(null);
      } else {
        setTrends([]);
        setError('No trends found with current filters');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load trends');
      // Fallback to empty state on error
      setTrends([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
    // Refresh trends every 30 seconds with current filters
    const interval = setInterval(() => fetchTrends(), 30000);
    return () => clearInterval(interval);
  }, [filters]);

  const handleFiltersChange = (newFilters: TrendsQuery) => {
    setFilters(newFilters);
  };

  const handleTrendStopped = () => {
    // Refresh trends when a trend is stopped
    fetchTrends();
  };

  const handleUserClick = () => {
    setShowLoginModal(true);
  };

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading trending content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black overflow-hidden relative">
      <Header 
        isSlideExpanded={false}
        onUserClick={handleUserClick}
        onCloseClick={() => {}}
      />
      
      {/* Filter Toggle */}
      <div className="absolute top-20 right-4 z-10">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white p-2 rounded-full transition-colors"
        >
          🔍
        </button>
      </div>

      <div className="h-full pt-20">
        {/* Filters */}
        {showFilters && (
          <TrendFilters 
            filters={filters} 
            onFiltersChange={handleFiltersChange}
          />
        )}

        {/* Trends List */}
        <TrendList 
          trends={trends} 
          onTrendStopped={handleTrendStopped}
        />
      </div>

      {error && (
        <div className="absolute top-20 left-4 right-4 bg-red-500/20 border border-red-500 rounded p-3 text-white text-sm z-20">
          API Error: {error}
          <button 
            onClick={() => fetchTrends()}
            className="ml-2 px-2 py-1 bg-red-600 hover:bg-red-700 text-xs rounded"
          >
            Retry
          </button>
        </div>
      )}

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignUp={() => {
            setShowLoginModal(false);
            setShowSignUpModal(true);
          }}
        />
      )}

      {showSignUpModal && (
        <SignUpModal 
          onClose={() => setShowSignUpModal(false)}
          onSwitchToLogin={() => {
            setShowSignUpModal(false);
            setShowLoginModal(true);
          }}
        />
      )}

      <ApiStatus apiUrl={API_URL} />
    </div>
  );
};

export default App;
