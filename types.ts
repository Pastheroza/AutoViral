export interface TrendingFactor {
  daysPassed: string;
  totalViews: string;
  firstSeen: string;
  growthRate: string;
}

export interface DetailedAnalysis {
  about: string;
  audience: string;
  versatility: string;
}

export interface TrendData {
  id: number;
  source: string;
  timestamp: string;
  title: string;
  description: string;
  imageUrl: string;
  trendingFactor: TrendingFactor;
  analysis: {
    tag: string;
    tagColor: string;
    summary: string;
  };
  detailedAnalysis: DetailedAnalysis;
}