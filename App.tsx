import React, { useState } from 'react';
import { TrendData } from './types';
import Slide from './components/Slide';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

// Expanded mock data to include `exampleVideos` for the new feature.
const mockData: TrendData[] = [
  {
    id: 1,
    title: 'Vintage Camera Effect Goes Viral',
    imageUrl: 'https://picsum.photos/seed/vhs/800/600',
    exampleVideos: [
      { id: 1, creator: '@nostalgia_vibes', thumbnailUrl: 'https://picsum.photos/seed/vhs1/400/600' },
      { id: 2, creator: '@retro_reels', thumbnailUrl: 'https://picsum.photos/seed/vhs2/400/600' },
      { id: 3, creator: '@80s_dreamer', thumbnailUrl: 'https://picsum.photos/seed/vhs3/400/600' },
    ],
    trendingFactor: {
      daysPassed: '2 days ago',
      totalViews: '25M+ Views',
      firstSeen: '2024-09-01',
      growthRate: 'Explosive'
    },
    analysis: {
      tag: 'HOT',
      tagColor: 'bg-red-500',
      summary: 'This nostalgic aesthetic resonates with millennials and Gen Z. Easy to replicate. Ideal for fashion, travel, and "day in the life" content.'
    },
    detailedAnalysis: {
      about: "This trend involves using filters or editing techniques to give modern footage the grainy, slightly distorted look of old VHS tapes. It taps into a powerful sense of nostalgia and is often paired with retro fashion and music.",
      audience: "Primarily Gen Z (16-24) and Millennials (25-35) who appreciate retro aesthetics. It performs well with audiences interested in fashion, lifestyle, and creative videography.",
      versatility: "Highly versatile. Can be applied to almost any niche, including travel vlogs, fashion lookbooks, 'day in the life' content, and even product showcases to give them an artistic, stylized feel."
    }
  },
  {
    id: 2,
    title: 'The "Silent Review" Video Format',
    imageUrl: 'https://picsum.photos/seed/silent/800/600',
    exampleVideos: [
        { id: 1, creator: '@asmr_unboxing', thumbnailUrl: 'https://picsum.photos/seed/silent1/400/600' },
        { id: 2, creator: '@quiet_finds', thumbnailUrl: 'https://picsum.photos/seed/silent2/400/600' },
    ],
    trendingFactor: {
      daysPassed: '5 days ago',
      totalViews: '12M+ Views',
      firstSeen: '2024-08-28',
      growthRate: 'Steady'
    },
    analysis: {
      tag: 'HIGH POTENTIAL',
      tagColor: 'bg-green-500',
      summary: 'Low barrier to entry and high audience curiosity make this a prime trend. Focus on unique products and crisp audio for maximum impact.'
    },
    detailedAnalysis: {
        about: "Creators unbox and review products without speaking, relying on exaggerated gestures, satisfying ASMR sounds (tapping, crinkling), and on-screen text to convey their thoughts. The format is visually engaging and breaks language barriers.",
        audience: "Broad appeal, but particularly effective with audiences interested in ASMR, product reviews, and visually-driven content. Works well for tech, beauty, and stationery niches.",
        versatility: "Moderately versatile. Best suited for physical products where visual and auditory details are key. Less effective for service-based reviews or abstract concepts."
    }
  },
];

/**
 * @component App
 * @description The main root component of the application. It now manages global state
 * for modals and the expanded content view.
 */
const App: React.FC = () => {
  // State for managing authentication modals
  const [activeModal, setActiveModal] = useState<'login' | 'signup' | null>(null);
  // State to track which slide's content card is expanded. `null` means none are.
  const [expandedSlideId, setExpandedSlideId] = useState<number | null>(null);

  const handleUserClick = () => {
    // For now, we'll default to opening the login modal.
    // A more complex implementation could show a menu.
    setActiveModal('login');
  };
  
  const handleCloseModals = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-[#0f0f0f] overflow-hidden font-sans">
      <Header
        isSlideExpanded={expandedSlideId !== null}
        onUserClick={handleUserClick}
        onCloseClick={() => setExpandedSlideId(null)}
      />
      
      <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        {mockData.map((data) => (
          <Slide
            key={data.id}
            data={data}
            isExpanded={expandedSlideId === data.id}
            onToggleExpand={() =>
              setExpandedSlideId(expandedSlideId === data.id ? null : data.id)
            }
          />
        ))}
      </div>

      {/* Render modals conditionally based on state */}
      {activeModal === 'login' && (
        <LoginModal
          onClose={handleCloseModals}
          onSwitchToSignUp={() => setActiveModal('signup')}
        />
      )}
      {activeModal === 'signup' && (
        <SignUpModal
          onClose={handleCloseModals}
          onSwitchToLogin={() => setActiveModal('login')}
        />
      )}
    </div>
  );
};

export default App;