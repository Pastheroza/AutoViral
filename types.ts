
export interface GrowthMetric {
  label: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative';
}

export interface TrendData {
  id: number;
  source: string;
  timestamp: string;
  title: string;
  description: string;
  imageUrl: string;
  growthMetrics: GrowthMetric[];
  analysis: {
    tag: string;
    tagColor: string;
    summary: string;
  };
}
