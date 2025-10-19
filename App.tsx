import React, { useState, useEffect } from 'react';
import { TrendData } from './types';
import TrendList from './components/TrendList';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import ApiStatus from './components/ApiStatus';

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

  // Fetch trends from API
  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch(`${API_URL}/trends?limit=10`);
        if (!response.ok) throw new Error('Failed to fetch trends');
        
        const data = await response.json();
        if (data.trends && Array.isArray(data.trends) && data.trends.length > 0) {
          const convertedTrends = data.trends.map(convertApiTrend);
          setTrends(convertedTrends);
          setError(null);
        } else {
          throw new Error('No trends available');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trends');
        // Fallback to mock data if API fails
        setTrends([{
          id: 1,
          title: 'API Connection Error',
          imageUrl: 'https://picsum.photos/seed/error/800/600',
          exampleVideos: [
            { id: 1, creator: '@system', thumbnailUrl: 'https://picsum.photos/seed/error1/400/600' }
          ],
          trendingFactor: { daysPassed: 'Now', totalViews: '0', firstSeen: '2025-10-18', growthPercentage: 0 },
          analysis: { tag: 'ERROR', tagColor: 'bg-red-500', summary: 'Unable to connect to trend API. Please try again later.' },
          detailedAnalysis: { about: 'API connection failed', audience: 'Technical issue', versatility: 'Retry needed' }
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
    // Refresh trends every 30 seconds
    const interval = setInterval(fetchTrends, 30000);
    return () => clearInterval(interval);
  }, []);

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
      
      <TrendList trends={trends} />

      {error && (
        <div className="absolute top-20 left-4 right-4 bg-red-500/20 border border-red-500 rounded p-3 text-white text-sm">
          API Error: {error}
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
