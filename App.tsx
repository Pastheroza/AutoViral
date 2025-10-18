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
    growthMetrics: [
      { label: 'View Velocity', value: '2.1M/hr', change: 34.5, changeType: 'positive' },
      { label: 'Engagement Rate', value: '18.2%', change: 2.1, changeType: 'positive' },
    ],
    analysis: {
      tag: 'HOT',
      tagColor: 'bg-red-500',
      summary: 'This nostalgic aesthetic resonates with millennials and Gen Z. Easy to replicate. Ideal for fashion, travel, and "day in the life" content.'
    }
  },
  {
    id: 2,
    source: 'YOUTUBE SHORTS',
    timestamp: '8 hours ago',
    title: 'The "Silent Review" Video Format',
    description: 'Creators are reviewing products without speaking, using ASMR and text overlays, gaining millions of views...',
    imageUrl: 'https://picsum.photos/seed/silent/800/600',
    growthMetrics: [
      { label: 'Audience Retention', value: '85%', change: 5.0, changeType: 'positive' },
      { label: 'Share Coefficient', value: '2.3x', change: 1.8, changeType: 'positive' },
    ],
    analysis: {
      tag: 'HIGH POTENTIAL',
      tagColor: 'bg-green-500',
      summary: 'Low barrier to entry and high audience curiosity make this a prime trend. Focus on unique products and crisp audio for maximum impact.'
    }
  },
  {
    id: 3,
    source: 'EMERGING',
    timestamp: '1 day ago',
    title: '"One-Pot" Recipe Challenge',
    description: 'Simple, quick, and visually satisfying recipe videos using only one pot are becoming a major food trend...',
    imageUrl: 'https://picsum.photos/seed/recipe/800/600',
    growthMetrics: [
      { label: 'Saves', value: '800k+', change: 42.0, changeType: 'positive' },
      { label: 'Avg. Watch Time', value: '58s', change: 12.0, changeType: 'positive' },
    ],
    analysis: {
      tag: 'EVERGREEN',
      tagColor: 'bg-blue-500',
      summary: 'This trend has long-term potential due to its practicality. Use quick cuts, satisfying sounds, and display the final result prominently at the start.'
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