import React from 'react';
import { TrendData } from './types';
import Slide from './components/Slide';

// Updated mock data to be relevant for content creators and viral trends.
const mockData: TrendData[] = [
  {
    id: 1,
    source: 'TIKTOK TREND',
    timestamp: '4 hours ago',
    title: 'Vintage Camera Effect Goes Viral',
    description: 'A new filter mimicking old VHS cameras is exploding in popularity, especially in lifestyle vlogs...',
    imageUrl: 'https://picsum.photos/seed/vhs/800/600',
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
    source: 'YOUTUBE SHORTS',
    timestamp: '8 hours ago',
    title: 'The "Silent Review" Video Format',
    description: 'Creators are reviewing products without speaking, using ASMR and text overlays, gaining millions of views...',
    imageUrl: 'https://picsum.photos/seed/silent/800/600',
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
  {
    id: 3,
    source: 'EMERGING',
    timestamp: '1 day ago',
    title: '"One-Pot" Recipe Challenge',
    description: 'Simple, quick, and visually satisfying recipe videos using only one pot are becoming a major food trend...',
    imageUrl: 'https://picsum.photos/seed/recipe/800/600',
    trendingFactor: {
      daysPassed: '7 days ago',
      totalViews: '8M+ Views',
      firstSeen: '2024-08-26',
      growthRate: 'Accelerating'
    },
    analysis: {
      tag: 'EVERGREEN',
      tagColor: 'bg-blue-500',
      summary: 'This trend has long-term potential due to its practicality. Use quick cuts, satisfying sounds, and display the final result prominently at the start.'
    },
    detailedAnalysis: {
        about: "This trend focuses on recipes that can be made using just a single pot or pan, emphasizing convenience and minimal cleanup. The videos are typically fast-paced, visually appealing, and set to upbeat music.",
        audience: "Wide audience, including busy professionals, students, and anyone looking for easy meal ideas. Particularly popular with home cooking and lifestyle-focused demographics.",
        versatility: "Very versatile within the food niche. Can be adapted for countless cuisines and dietary preferences (e.g., vegan, gluten-free). The core concept of simplicity is universally appealing."
    }
  }
];


const App: React.FC = () => {
  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-[#0f0f0f] overflow-hidden font-sans">
       <div
        className="h-full w-full overflow-y-auto snap-y snap-mandatory scrollbar-hide"
      >
        {mockData.map((data) => (
          <Slide key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;