/**
 * @interface TrendingFactor
 * @description Defines the structure for the key statistics of a trend.
 */
export interface TrendingFactor {
  /** How many days have passed since the trend started gaining traction. */
  daysPassed: string;
  /** The total number of views the trend has accumulated. */
  totalViews: string;
  /** The date when the trend was first observed. */
  firstSeen: string;
  /** A qualitative measure of the trend's growth speed (e.g., 'Explosive', 'Steady'). */
  growthRate: string;
}

/**
 * @interface DetailedAnalysis
 * @description Defines the structure for the in-depth analysis of a trend, shown in the modal.
 */
export interface DetailedAnalysis {
  /** A detailed explanation of what the trend is about. */
  about: string;
  /** A description of the primary audience for this trend. */
  audience: string;
  /** An assessment of how easily the trend can be adapted to different niches or content types. */
  versatility: string;
}

/**
 * @interface TrendData
 * @description Represents the complete data structure for a single trend slide.
 */
export interface TrendData {
  /** A unique identifier for the trend. */
  id: number;
  /** The main title of the trend. */
  title: string;
  /** The URL for the background image or video thumbnail of the trend. */
  imageUrl: string;
  /** An object containing the key statistics for the trend. */
  trendingFactor: TrendingFactor;
  /** An object containing a brief summary and tag for the trend analysis. */
  analysis: {
    tag: string;
    tagColor: string;
    summary: string;
  };
  /** An object containing the detailed, in-depth analysis of the trend. */
  detailedAnalysis: DetailedAnalysis;
}
